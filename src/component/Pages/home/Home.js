import React from 'react';
import Contact from '../contact/Contact';
import Testimonial from '../exceptional/testimonial/Testimonial';
import MakeAppointment from '../makeappointment/MakeAppointment';

import Services from '../Services/Services';
import VisitDetails from '../visitdetails/VisitDetails';
import Banner from './banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <VisitDetails></VisitDetails>
            <Services></Services>
     <MakeAppointment></MakeAppointment>
     <Testimonial></Testimonial>
     <Contact></Contact>
        </div>
    );
};

export default Home;