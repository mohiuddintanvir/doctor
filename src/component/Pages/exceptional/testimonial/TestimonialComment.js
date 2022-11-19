import React from "react";

const TestimonialComment = ({ comment }) => {
  const { description, icon, name, address } = comment;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <h1 className="font-normal text-sm ml-7 mr-8 mt-9 mb-9">
          {description}
        </h1>
        <div className="flex items-center mt-6 ">
          <div>
            <div className="avatar ml-6 mb-6">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={icon} alt=""/>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg ml-5">{name}</h2>
            <p className="ml-5">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComment;
