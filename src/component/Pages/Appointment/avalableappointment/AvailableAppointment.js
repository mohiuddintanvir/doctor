import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import Apointmentoption from "../Apointmentoption";
import BookingModal from "../BokingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointment, setappointment] = useState([]);
  const [treatment, settreatment] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setappointment(data));
  }, []);
  return (
    <div className="my-10">
      <p className="text-center text-secondary font-bold">
        Available Appointments on{format(selectedDate, "PP")}{" "}
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointment.map((appoint) => (
          <Apointmentoption
            key={appoint._id}
            appoint={appoint}
            settreatment={settreatment}
          ></Apointmentoption>
        ))}
      </div>
      {treatment && <BookingModal
      selectedDate={selectedDate}
      treatment={treatment}
      settreatment={settreatment}
      ></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
