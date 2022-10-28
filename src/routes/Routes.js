import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import Courses from '../pages/Courses/Courses';
import Error from '../pages/Error/Error';
import Faq from '../pages/Faq/Faq';
import Home from '../pages/Home/Home';
import Checkout from '../pages/Shared/Checkout/Checkout';
import CourseDetails from '../pages/Shared/CourseDetails/CourseDetails';
import Login from '../pages/Shared/Login/Login';
import Profile from '../pages/Shared/Profile/Profile';
import Signup from '../pages/Shared/Signup/Signup';
import PrivateRoute from './PrivateRoute';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://tech-tutor-server.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://tech-tutor-server.vercel.app/courses/${params.id}`),

            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tech-tutor-server.vercel.app/checkout/${params.id}`),
            },
            {
                path: '/faq',
                element: <Faq></Faq>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
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


