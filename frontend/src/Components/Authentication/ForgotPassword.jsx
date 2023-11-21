import { useState } from "react";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import backgroundImage from "./login_background.png";
import "./auth.css";
const ForgotPassword = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(loginDetails);
    };
    const fillDetails = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    };
    return (
        <div style={divStyle} className="md:flex justify-evenly h-screen">
            <div className="flex flex-col">
                <span className="quizzo">QUIZZO</span>
                <span className="welcome">No Worries.!!</span>
            </div>
            <Card
                variant="gradient"
                color="transparent"
                className="p-5 my-10 mx-4 h-fit shadow-lg border-2 border-[#AFAFAF] shadow-black backdrop-blur-xl"
            >
                <Typography
                    style={{ fontFamily: "Noto Sans", fontWeight: 600 }}
                    variant="h3"
                    color="white"
                >
                    Forgot Password
                </Typography>
                <span style={{ fontFamily: "Noto Sans" }} className="text-white font-medium">Please enter your email</span>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
                >
                    <div
                        style={{ fontFamily: "Noto Sans" }}
                        className="mb-1 flex flex-col gap-6"
                    >
                        <Input
                            style={{ fontFamily: "Noto Sans" }}
                            className="focus:bg-transparent"
                            onChange={fillDetails}
                            name="email"
                            size="md"
                            type="email"
                            label="Email"
                            color="white"
                        />
                    </div>
                    <Button
                        style={{ fontFamily: "Noto Sans" }}
                        type="submit"
                        className="mt-5 bg-gradient-to-r from-amber-500 to-[#885200]"
                        fullWidth
                    >
                        Reset
                    </Button>
                    <Typography
                        style={{ fontFamily: "Noto Sans" }}
                        variant="small"
                        color="white"
                        className="mt-4 text-center font-semibold"
                    >
                        Don&apos;t have an account?{" "}
                        <Link to="/signup" className="font-bold">
                            Sign Up
                        </Link>
                    </Typography>
                </form>
                <div
                    style={{ fontFamily: "Noto Sans" }}
                    className="flex justify-evenly mt-16 text-white font-bold"
                >
                    <span>Terms & Conditions</span>
                    <span>Support</span>
                    <span>Customer Care</span>
                </div>
            </Card>
        </div>
    );
};

export default ForgotPassword;
