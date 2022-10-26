import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Shared/Login/Login';
import Profile from '../pages/Shared/Profile/Profile';
import Signup from '../pages/Shared/Signup/Signup';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
            
            {
                path: '/profile',
                element: <Profile></Profile>,
            },
        ]
    },

])


