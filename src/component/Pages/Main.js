import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './home/footer/Footer';
import Navber from './home/shared/navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;