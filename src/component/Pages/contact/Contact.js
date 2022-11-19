import React from "react";
import bd from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      style={{
        background: `url(${bd})`,
      }}
    >
      <div className="hero my-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0  w-full ">
            <div className="card-body text-white">
              <div className="form-control">
                <h2 className="text-primary font-bold text-xl text-center">
                  Contact Us
                </h2>
                <p className="font-normal text-4xl">Stay connected with us</p>
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <div className="form-control">
                  <label className="label">
                   
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Your massage"
                  ></textarea>
                  <label className="label">
                   
                  
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
