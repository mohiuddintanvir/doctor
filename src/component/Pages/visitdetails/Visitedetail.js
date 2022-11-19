import React from "react";

const Visitedetail = ({ detail }) => {
  const { name, icon, description,bgClas,} = detail;
  return (
    <div >
      
      <div className={`card lg:card-side md:text-center ${bgClas} shadow-xl sm:mb-5 md:mb-5  `}>
        <figure>
          <img className="w-14 ml-5 mt-10 lg: w-14 ml-5  sm: w-14 ml-5" src={icon} alt="Movie  " />
        </figure>
        <div className="card-body text-white  ">
          <h2 className="card-title font-bold   ">{name}</h2>
          <p className="text-sm  ">{description}</p>
          <div className="card-actions justify-end  "></div>
        </div>
      </div>
    </div>
  );
};

export default Visitedetail;
