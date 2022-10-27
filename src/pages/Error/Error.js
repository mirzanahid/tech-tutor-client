import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../assets/404.svg';
import './Error.css'
const Error = () => {
    return (
        <div className='error-container'>
            <img className='error-image' src={errorImage} alt="" />
               <h5 className='error-heading text-color4'>Page Not Found</h5>
               <p className='error-paragraph text-color4'>The page you'r looking for does not seem to exit!</p>
               <Link className='nav-item-btn error-btn bg-color text-color3' to={'/'}>Go To Home</Link>

        </div>
    );
};

export default Error;