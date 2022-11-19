import React from "react";
import img1 from "../../../../assets/images/people1.png";
import img2 from "../../../../assets/images/people2.png";
import img3 from "../../../../assets/images/people3.png";
import TestimonialComment from "./TestimonialComment";
import quyo from "../../../../assets/icons/quote.svg";

const Testimonial = () => {
  const coments = [
    {
      id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      icon: img1,
      name: "Winson Herry",
      address: "California",
    },
    {
      id: 2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      icon: img2,
      name: "Winson Herry",
      address: "California",
    },
    {
      id: 3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      icon: img3,
      name: "Winson Herry",
      address: "California",
    },
  ];
  return (
    <section className="my-16">
      <div>
        <div className="flex justify-between">
          <div>
            <h4 className="text-xl text-primary font-bold">Testimonial</h4>
            <h2>What Our Patients Says</h2>
          </div>

          <figure>
            <img className="lg:w-48  w-24" src={quyo} alt="" />
          </figure>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-2 grid grid-cols-1 gap-2">
          {coments.map((comment) => (
            <TestimonialComment
              key={comment.key}
              comment={comment}
            ></TestimonialComment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
