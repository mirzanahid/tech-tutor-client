import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Main;