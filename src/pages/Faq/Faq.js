import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import NewsLetter from '../Shared/NewsLetter/NewsLetter';
import './Faq.css'

const Faq = () => {
    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg='8'>
                        <div className="faq">
                            <h3 className='faq-heading text-color'>Frequently Asked Questions</h3>

                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How do I take a TechTutor course?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='text-color99'>
                                            TechTutor courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app.

                                        </p>
                                        <p className='text-color99'>
                                            After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you're logged into your TechTutor account). You can also begin the course by logging in and navigating to your My learning page.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        What is required to do course on TechTutor?</Accordion.Header>
                                    <Accordion.Body>

                                        <p className='text-color99'>You need a computer and  required software we will provide you </p>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        How can I pay for a course?</Accordion.Header>
                                    <Accordion.Body>

                                        <p className='text-color99'>TechTutor supports several different payment methods, depending on your account country and location.  </p>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Faq;