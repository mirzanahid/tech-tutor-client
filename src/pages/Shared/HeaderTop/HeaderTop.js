import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderTop.css'
import {FaPhoneAlt, FaEnvelope,FaFacebookSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const HeaderTop = () => {
    return (
        <div className='navbar-top'>
            <Container>
                <div className="navbar-top-container">
                    <div className="contact">
                        <Link to={'tel:(+880) 1234 567 890'}><FaPhoneAlt /> (+880) 1234 567 890</Link> 
                        <Link to={'mailto:techtutor@gmail.com'}><FaEnvelope /> techtutor@gmail.com</Link>
                    </div>
                    <div className="social-media">
                         <p className='social-heading'>social media:</p>
                        <Link className='social-icons facebook-icon'><FaFacebookSquare /></Link>
                        <Link className='social-icons twitter-icon'><FaTwitter /></Link>
                        <Link className='social-icons linkedin-icon'><FaLinkedin /></Link>
                        <Link className='social-icons youtube-icon'><FaYoutube /></Link>


                    </div>
                </div>
            </Container>
        </div>


    );
};

export default HeaderTop;