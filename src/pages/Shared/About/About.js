import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import student from '../../../assets/student.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="about-image">
                            <img className='about-img' src={student} alt="" />
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="about-texts">
                            <h3 className='sub-heading2 text-color about-heading'>About Us</h3>
                            <p className='primary-paragraph about-paragraph'>TechTutor is online learning web application. Where student can easily access courses and start learning. If they stuck TechTutor powerful support with them. </p>
                            <Link className='primary-button about-btn' to={'./courses'}>Explore Courses</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;