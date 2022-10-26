import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import HeaderTop from '../pages/Shared/HeaderTop/HeaderTop';

const Main = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;