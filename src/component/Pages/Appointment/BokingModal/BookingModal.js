import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate,settreatment}) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");


const handlemodle=event=>{
    event.preventDefault()
    const form=event.target;
    const slot=form.slot.value;
    const Name=form.name.value;
    const email=form.email.value;
    const phone=form.phone.value;
    const booking={
        appointmentdate:date,
        treatment:name,
        patient:Name,
        slot,
        email,
        phone,

    }
    console.log(booking)
  
    settreatment(null)
}









  return (
    <>
      <input type="checkbox" id="Booking-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Booking-Modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handlemodle} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              disabled
              value={date}
              className="input w-full input-bordered"
            />
            <select name="slot" className="select select-bordered w-full ">
              
                {slots.map((slot,i) => (
                  <option value={slot} key={i}>{slot}</option>
                ))}
              
              
            </select>
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="input w-full input-bordered"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full input-bordered"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
