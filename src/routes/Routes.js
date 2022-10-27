import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Courses from '../pages/Courses/Courses';
import Home from '../pages/Home/Home';
import CourseDetails from '../pages/Shared/CourseDetails/CourseDetails';
import Login from '../pages/Shared/Login/Login';
import Profile from '../pages/Shared/Profile/Profile';
import Signup from '../pages/Shared/Signup/Signup';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),

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


