import "./App.css";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import HomePage from "./Components/Homepage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <div style={{fontFamily:"Noto Sans"}}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
