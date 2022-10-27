import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import HeaderTop from '../pages/Shared/HeaderTop/HeaderTop';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
 
        </div>
    );
};

export default Main;