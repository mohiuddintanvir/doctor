import React from "react";

const Service = ({detail}) => {
  const {icon,name,description,bgClas}=detail
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl text-center ">
        <figure>
          <img className=" w-28 h-28 left-44 top-96" src={icon} alt="Shoes" />
        </figure>
        <div className="card-body  ">
          <h2 className=" font-semibold  text-xl  ">{name}</h2>
          <p>{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Service;
