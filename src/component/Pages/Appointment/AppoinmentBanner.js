import React, { useState } from "react";
import chair from "../../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg from "../../../assets/images/bg.png"


const AppoinmentBanner = ({selectedDate,setselectedDate}) => {
    
  return (
    <header style={{
      background:`url(${bg})`
    }}>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
           alt="" className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
         <DayPicker
         mode="single"
         selected={selectedDate}
         onSelect={setselectedDate}
         
         />
        
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
