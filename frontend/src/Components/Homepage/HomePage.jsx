import backgroundImage from "../Authentication/login_background.png";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import sportsBg from "./sports.png";
import scienceBg from "./science.png";
import vehicleBg from "./vehicle.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = ({ setQuestions }) => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const navigate = useNavigate();
  const handleClick = async (category) => {
    try {
      let url = `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`;
      const res = await axios.get(url);
      console.log(res.data);
      const { results } = res.data;
      console.log(results);
      const newResult = results.map((question) => {
        const { correct_answer, incorrect_answers } = question;
        let options = [...incorrect_answers, correct_answer];
        options = options.sort(() => Math.random() - 0.5);
        return { ...question, options: options };
      });
      console.log(newResult);
      setQuestions(newResult);
      navigate("/quiz");
    } catch (error) {
      navigate("/");
      console.error(error);
    }
  };

  return (
    <div style={divStyle} className="w-screen h-screen">
      <div className="w-fit h-fit p-5">
        <span className="text-white text-6xl font-bold mt-6">
          CHOOSE CATEGORY
        </span>
      </div>
      <div className="flex justify-around flex-wrap gap-5 mt-10">
        <Card
          onClick={() => {
            handleClick(21);
          }}
          className="relative grid h-48 w-80 items-end justify-center overflow-hidden text-center cursor-pointer"
        >
          <CardHeader
            floated={false}
            color="transparent"
            style={{ backgroundImage: `url(${sportsBg})` }}
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative p-6 md:px-12">
            <span className="text-white text-3xl font-semibold">Sports</span>
          </CardBody>
        </Card>
        <Card
          onClick={() => {
            handleClick(17);
          }}
          className="relative grid h-48 w-80 items-end justify-center overflow-hidden text-center cursor-pointer"
        >
          <CardHeader
            floated={false}
            color="transparent"
            style={{ backgroundImage: `url(${scienceBg})` }}
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative p-6 md:px-12">
            <span className="text-white text-3xl font-semibold">Nature</span>
          </CardBody>
        </Card>
        <Card
          onClick={() => {
            handleClick(28);
          }}
          className="relative grid h-48 w-80 items-end justify-center overflow-hidden text-center cursor-pointer"
        >
          <CardHeader
            floated={false}
            color="transparent"
            style={{ backgroundImage: `url(${vehicleBg})` }}
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative p-6 md:px-12">
            <span className="text-white text-3xl font-semibold">Vehicle</span>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
