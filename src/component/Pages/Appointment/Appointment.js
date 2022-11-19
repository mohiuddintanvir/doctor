import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppointment from './avalableappointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate,setselectedDate]=useState(new Date());
    return (
        <div>
           <AppoinmentBanner selectedDate={selectedDate} setselectedDate={setselectedDate}></AppoinmentBanner>
           <AvailableAppointment selectedDate={selectedDate} ></AvailableAppointment>
        </div>
    );
};
 
export default Appointment;