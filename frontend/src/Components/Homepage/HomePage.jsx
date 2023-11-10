import backgroundImage from "../Authentication/login_background.png";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import sportsBg from "./sports.png";
import scienceBg from "./science.png";
import vehicleBg from "./vehicle.png";

const HomePage = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={divStyle} className="w-screen h-screen">
      <div className="w-fit h-fit p-5">
        <span className="text-white text-6xl font-bold mt-6">CHOOSE CATEGORY</span>
      </div>
      <div className="flex justify-around mt-10">
        <Card className="relative grid h-48 w-80 items-end justify-center overflow-hidden text-center cursor-pointer">
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
        <Card className="relative grid h-48 w-80 items-end justify-center overflow-hidden text-center cursor-pointer">
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
        <Card className="relative grid h-48 w-80 items-end justify-center overflow-hidden text-center cursor-pointer">
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
