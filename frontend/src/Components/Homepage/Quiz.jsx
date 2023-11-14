import backgroundImage from "../Authentication/login_background.png";
import React from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
const Quiz = ({ questions }) => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [active, setActive] = React.useState(1);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [isCorrect, setIsCorrect] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [isScoreVisible, setIsScoreVisible] = React.useState(false);
  const next = () => {
    if (active === 10) return;
    setActive(active + 1);
    setIsCorrect(null);
    setSelectedOption(null);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };
  var currentQuestion = questions[active - 1];

  const handleAnswerClick = (index) => {
    // Assuming currentQuestion.correctOption is the index of the correct answer
    console.log(index);
    setSelectedOption(index);
    console.log(selectedOption);
    if (currentQuestion.options[index] == currentQuestion.correct_answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
  };
  return (
    <div
      style={divStyle}
      className="w-screen h-screen text-white overflow-y-scroll flex flex-col items-center"
    >
      <div className="flex flex-col flex-wrap justify-between backdrop-blur-lg border rounded-md p-3 mt-5">
        <h1 className="text-4xl font-bold">
          Question {active} of {questions.length}
        </h1>
        <div
          key={active}
          className="flex flex-col gap-4 m-3 md:w-[50vw] h-[40vh] p-2"
        >
          <h1 className="text-2xl font-semibold">{currentQuestion.question}</h1>
          <div className="flex gap-4">
            <button
              className={`p-4 w-56 h-20 border rounded-lg text-xl font-bold ${
                selectedOption === 0 &&
                (isCorrect ? "bg-green-500" : "bg-red-500")
              }`}
              onClick={() => handleAnswerClick(0)}
              disabled={selectedOption !== null}
            >
              A. {currentQuestion.options[0]}
            </button>
            <button
              className={`p-4 w-56 h-20 border rounded-lg text-xl font-bold ${
                selectedOption === 1 &&
                (isCorrect ? "bg-green-500" : "bg-red-500")
              }`}
              onClick={() => handleAnswerClick(1)}
              disabled={selectedOption !== null}
            >
              B. {currentQuestion.options[1]}
            </button>
          </div>
          <div className="flex gap-4">
            <button
              className={`p-4 w-56 h-20 border rounded-lg text-xl font-bold ${
                selectedOption === 2 &&
                (isCorrect ? "bg-green-500" : "bg-red-500")
              }`}
              onClick={() => handleAnswerClick(2)}
              disabled={selectedOption !== null}
            >
              C. {currentQuestion.options[2]}
            </button>
            <button
              className={`p-4 w-56 h-20 border rounded-lg text-xl font-bold ${
                selectedOption === 3 &&
                (isCorrect ? "bg-green-500" : "bg-red-500")
              }`}
              onClick={() => handleAnswerClick(3)}
              disabled={selectedOption !== null}
            >
              D. {currentQuestion.options[3]}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 mt-5">
        <IconButton
          size="sm"
          variant="outlined"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography color="white" className="font-normal flex gap-4">
          <strong>Previous</strong>
          <strong>Next</strong>
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={next}
          disabled={active === 10}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
      <Button
        disabled={active !== 10}
        onClick={() => {
          setIsScoreVisible(true);
        }}
        className="mt-5 bg-amber-900"
      >
        SUBMIT
      </Button>
      {isScoreVisible && (
        <div className="mt-3">
          <span className="font-bold text-2xl">Your Score is {score}/10</span>
        </div>
      )}
    </div>
  );
};

export default Quiz;
