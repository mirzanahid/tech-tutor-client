import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo2 from '../../../assets/logo2.svg'
import { FaPhoneAlt, FaEnvelope, FaFacebookSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer bg-color'>
            <Container>
                <Row>
                    <Col lg='4'>
                        <Link><img src={logo2} alt="" /></Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p> Ut enim ad minim veniam, quis nostrud exercitation ullmco laboris nisi ut aliquip ex ea.</p>
                        <div className="social">
                            <Link className='social-icons facebook-icon'><FaFacebookSquare /></Link>
                            <Link className='social-icons twitter-icon'><FaTwitter /></Link>
                            <Link className='social-icons linkedin-icon'><FaLinkedin /></Link>
                            <Link className='social-icons youtube-icon'><FaYoutube /></Link>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="links">
                            <div className="quick-link">
                                <Link>Home</Link>
                                <Link>Our Courses</Link>
                                <Link>Faq</Link>
                                <Link>Blog</Link>
                                <Link>Contact</Link>
                            </div>
                            <div className="course-link"></div>
                        </div>
                    </Col>
                    <Col lg='4'></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;