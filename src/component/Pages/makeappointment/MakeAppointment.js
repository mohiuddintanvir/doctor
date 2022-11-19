import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import apointment from "../../../assets/images/appointment.png";


const MakeAppointment = () => {
  
  return (
    <section
      className="mt-32 "
      style={{
        background: `url(${apointment})`,
      }}
    >
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row pb-0">
          <img
            src={doctor}
            alt=""
            className=" -mt-32 hidden lg:block lg:w-1/2 lg:mb-0 rounded-lg "
          />
          <div>
            <h4 className="text-lg text-primary font-bold"> Appointment</h4>
            <h1 className="text-5xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
