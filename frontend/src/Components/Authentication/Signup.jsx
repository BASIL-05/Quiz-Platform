import { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "./login_background.png";
import axios from "axios";

const Login = () => {
  // Import the image
  const navigate = useNavigate();
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const fillDetails = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let url = "http://192.168.29.250:3000/user/signup";
      let res = await axios.post(url, signupDetails);
      console.log(res.data);
      if (res.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div style={divStyle} className="md:flex justify-evenly h-screen">
      <div className="flex flex-col">
        <span className="quizzo">QUIZZO</span>
        <span className="welcome">Roll the Carpet .!</span>
      </div>
      <Card
        color="transparent"
        className="p-3 shadow-lg shadow-black backdrop-blur-xl h-fit my-10 mx-4"
      >
        <Typography
          variant="h3"
          style={{ fontFamily: "Noto Sans" }}
          color="white"
        >
          Signup
        </Typography>
        <span
          style={{ fontFamily: "Noto Sans" }}
          className="text-white font-medium"
        >
          Just some details to get you in.!
        </span>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div
            style={{ fontFamily: "Noto Sans" }}
            className="mb-1 flex flex-col gap-6"
          >
            <Input
              style={{ fontFamily: "Noto Sans" }}
              onChange={fillDetails}
              className="focus:bg-transparent"
              name="name"
              size="lg"
              type="text"
              label="Name"
              color="white"
            />
            <Input
              style={{ fontFamily: "Noto Sans" }}
              onChange={fillDetails}
              className="focus:bg-transparent"
              name="email"
              size="lg"
              type="email"
              label="Email"
              color="white"
            />
            <Input
              style={{ fontFamily: "Noto Sans" }}
              onChange={fillDetails}
              className="focus:bg-transparent"
              name="password"
              color="white"
              type="password"
              size="lg"
              label="Password"
            />
          </div>
          <Checkbox
            color="blue"
            label={
              <Typography
                style={{ fontFamily: "Noto Sans" }}
                variant="small"
                color="white"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            style={{ fontFamily: "Noto Sans" }}
            type="submit"
            className="mt-1 bg-gradient-to-r from-amber-500 to-[#885200]"
            fullWidth
          >
            Signup
          </Button>
          <Typography
            style={{ fontFamily: "Noto Sans" }}
            color="white"
            className="mt-4 text-center font-normal"
          >
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-white">
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
