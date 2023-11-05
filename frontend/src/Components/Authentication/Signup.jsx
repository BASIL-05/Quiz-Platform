import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import backgroundImage from "./login_background.jpeg";
const Login = () => {
  // Import the image

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={divStyle} className="flex justify-center items-center h-screen">
      <Card className="p-3 shadow-lg shadow-blue-500 opacity-80">
        <Typography variant="h3" className=" text-center" color="blue-gray">
          Signup
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Input size="lg" type="name" label="Name" color="blue" />
            <Input size="lg" type="email" label="Email" color="blue" />
            <Input color="blue" type="password" size="lg" label="Password" />
          </div>
          <Checkbox
            color="blue"
            label={
              <Typography
                variant="small"
                color="gray"
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
          <Button className="mt-6" color="blue" fullWidth>
            Signup
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-blue-500">
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
