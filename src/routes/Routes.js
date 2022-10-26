import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../pages/Shared/Login/Login';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
    },
    {
        path: '/login',
        element: <Login></Login>,
    }
])


