import React from "react";

const Apointmentoption = ({ appoint,settreatment }) => {
  const { name, slots } = appoint;
  return (
    <section className="mt-10">
      <div className="card  shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-primary text-center">{name}</h2>
          <p className="text-center">{slots.length > 0 ? slots[0] : "try anotherday"}</p>
          <p className="text-center" > {slots.length} {slots.length>1 ?"spaces":'space'} available 

          </p>
          <div className="card-actions justify-center ">
            
            <label
            disabled={slots.length ===0}
             htmlFor="Booking-Modal" className="btn btn-primary text-white" onClick={()=>settreatment(appoint)}>Book Appointment</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apointmentoption;
