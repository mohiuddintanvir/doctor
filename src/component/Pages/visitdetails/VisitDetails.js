import React from "react";

import Visitedetail from "./Visitedetail";
import icon1 from "../../../assets/icons/clock.svg"
import icon2 from "../../../assets/icons/marker.svg"
import icon3 from "../../../assets/icons/phone.svg"
const VisitDetails = () => {
  const details = [
    {
      id: 1,
      icon: icon1,
      name: "Opening hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      bgClas: "bg-primary",
      width:"w-['w-86px']",
    },
    {
      id: 2,
      icon: icon2,
      name: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      bgClas: " bg-accent",
      width:"w-['86px']",
    },
    {
      id: 3,
      icon: icon3,
      name: "Contact us now",
      description: "+000 123 456789",
      bgClas: "bg-primary",
      width:"w-['86px']",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 mt-20  lg:grid lg:grid-cols-3 lg:gap-4 ">
      {details.map((detail) => (
        <Visitedetail key={detail.id} detail={detail}></Visitedetail>
      ))}
    </div>
  );
};

export default VisitDetails;
