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
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={divStyle} className="flex justify-center items-center h-screen">
      <Card className="p-3 shadow-lg shadow-blue-500 opacity-80">
        <Typography variant="h3" className=" text-center" color="blue-gray">
          Login
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Input size="lg" type="email" label="Email" color="blue" />
            <Input color="blue" type="password" size="lg" label="Password" />
          </div>
          <div className="flex justify-between items-center">
            <Checkbox
              color="blue"
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-semibold"
                >
                  &nbsp;Remember me
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Typography variant="small" color="blue" className="font-semibold">
              <Link to="/">Forgot Password?</Link>
            </Typography>
          </div>
          <Button className="mt-1" color="blue" fullWidth>
            Login
          </Button>
          <Typography variant="small" color="gray" className="mt-4 text-center font-semibold">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-bold text-blue-500">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
