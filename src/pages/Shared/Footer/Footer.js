import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo2 from '../../../assets/logo2.svg'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaHouseUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer bg-color'>
            <Container>
                <Row>
                    <Col lg='4'>
                        <Link><img className='footer-logo' src={logo2} alt="" /></Link>
                        <p className='pragraph  footer-paragraph text-color2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='pragraph footer-paragraph text-color2'> Ut enim ad minim veniam, quis nostrud exercitation ullmco laboris nisi ut aliquip ex ea.</p>
                        <div className="footer-social">
                            <ul>
                                <li className='bg-color2 '>  <Link className='social-icons facebook-icon text-color8'><FaFacebookF /></Link></li>
                                <li className='bg-color2 '><Link className='social-icons twitter-icon  text-color8'><FaTwitter /></Link></li>
                                <li className='bg-color2 '> <Link className='social-icons linkedin-icon text-color8'><FaLinkedinIn /></Link></li>
                                <li className='bg-color2 '><Link className='social-icons youtube-icon text-color8'><FaYoutube /></Link></li>
                            </ul>



                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="footer-links">
                            <div className="quick-link">
                                <h3 className='text-color2'>Quick Links</h3>
                                <ul >
                                    <li> <Link className='text-color9'>Home</Link></li>
                                    <li> <Link className='text-color9'>Our Courses</Link></li>
                                    <li> <Link className='text-color9'>Faq</Link></li>
                                    <li> <Link className='text-color9'>Blog</Link></li>
                                    <li> <Link className='text-color9'>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="contact-information">
                            <h3 className='text-color2'>Contact Information</h3>

                            <div className="contact-info-main">
                                <div className="contact-info-item">
                                    <div className="icon bg-color2 ">
                                        <FaHouseUser className='contact-icon text-color5 '></FaHouseUser>
                                    </div>
                                    <div className="contact-info">
                                        <span className='text-color2 bg-color3'>LOCATION</span>
                                        <p className='text-color2'>44 Cunningham CtSaint Charles, Missouri(MO), 63301</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="icon bg-color2 ">
                                        <FaPhoneAlt className='contact-icon text-color5 '></FaPhoneAlt>
                                    </div>
                                    <div className="contact-info">
                                        <span className='text-color2 bg-color3'>PHONE</span>
                                        <p className='text-color2'>+880 1234 567 890</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="icon bg-color2 ">
                                        <FaEnvelope className='contact-icon text-color5 '></FaEnvelope>
                                    </div>
                                    <div className="contact-info">
                                        <span className='text-color2 bg-color3'>EMAIL</span>
                                        <p className='text-color2'>techtutor@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
            <div className="footer-bottom bg-color4 ">
                <span className='footer-copyright text-color2'>Copyright 2022. All rights reserved by TechTutor</span>
            </div>
        </div>
    );
};

export default Footer;