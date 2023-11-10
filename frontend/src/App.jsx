import "./App.css";
import { useState } from "react";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import HomePage from "./Components/Homepage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Quiz from "./Components/Homepage/Quiz";
function App() {
  const [questions, setQuestions] = useState([]);

  return (
    <div style={{ fontFamily: "Noto Sans" }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage setQuestions={setQuestions} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/quiz" element={<Quiz questions={questions} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
