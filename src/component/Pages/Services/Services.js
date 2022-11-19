import React from "react";
import Service from "./Service";
import img1 from "../../../assets/images/cavity.png"
import img2 from "../../../assets/images/fluoride.png"
import img3 from "../../../assets/images/whitening.png"
import Exceptional from "../exceptional/Exceptional";

const Services = () => {
  const details = [
    {
      id: 1,
      icon: img1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      bgClas: "bg-primary",
      width: "w-['w-86px']",
    },
    {
      id: 2,
      icon: img2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      bgClas: " bg-accent",
      width: "w-['86px']",
    },
    {
      id: 3,
      icon: img3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      bgClas: "bg-primary",
      width: "w-['86px']",
    },
  ];
  return<div className="mt-44">
    <div className="text-center ">
      <h1 className="text-primary font-sans font-bold text-sm leading-7">
        OUR SERVICES
      </h1>
      <h2 className="font-normal text-3xl leading-10">Services We Provide</h2>
    </div>
    <div className=" lg:grid lg:grid-cols-3 lg:gap-[34px] mt-20  sm:grid grid-cols-1 gap-2   grid grid-cols-1 gap-2">
      {
        details.map(detail=><Service key={details.id} detail={detail}></Service>)
      }
    </div>
    <div className="">
      <Exceptional></Exceptional>
    </div>
  </div>;
};

export default Services;
