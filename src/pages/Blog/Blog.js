import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg='8'>
                        <div className="faq">
                            <h3 className='faq-heading text-color'>Our Blog</h3>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is cors?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='text-color99'>
                                            Cross-supply Resource Sharing (CORS) is an HTTP header-primarily based totally mechanism that permits a server to suggest any foundation (domain, scheme, or port) apart from the foundation from which the browser need to permit download resources.
                                        </p>
                                        <p className='text-color99'>
                                            CORS additionally is predicated on a mechanism via way of means of which the browser makes a preemptive request to the server web website hosting the cross-foundation resource, to confirm that the server will permit the real request. In this preamble, the browser sends headers indicating the HTTP approach and the headers for use withinside the real request.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='text-color99'> Firebase lets us build rich, collaborative applications by enabling secure database access directly from client-side code. Data is stored locally and real-time events are still triggered offline, providing a responsive experience front end users.
                                        </p>
                                        <ul className='text-color99 fw-bold'>
                                            Firebase gave us many option to implement. some of them are:
                                            <li className='text-color99'> Create user and sign in with email and password</li>
                                            <li className='text-color99'>Create user and sign in Phone Number</li>
                                            <li className='text-color99'>Create user and sign in Google</li>
                                            <li className='text-color99'>Create user and sign in Facebook</li>
                                            <li className='text-color99'>Create user and sign in Twitter</li>
                                            <li className='text-color99'>Create user and sign in Github and so on</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        How does the private route work?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className='text-color99'>Private routes vary by app. B. Dashboards, user profiles, app settings, homepages, etc. </p>
                                        <p className='text-color99'>   In short, private route components are similar to public routes, the only changes are the redirect URL and authentication conditions. If the user is not authenticated, the user will be redirected to the login page, and the authenticated route can only be accessed if the user is authenticated (logged in).</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        What is Node? How does Node work?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className='text-color99'>Node.js is an open source and popular backend JavaScript runtime environment. It is used as a backend service that runs JavaScript on the server side of application. Node.js use the Chrome v8 engine to run, which translates Javascript code into machine code .</p>
                                        <p className='text-color99'>
                                            How Node.js work:
                                            Node.js accepts requests from clients and sends responses, but request processing is handled by node.js in a single thread. To perform I/O operations or requests, node.js uses the concept of threads. A thread is a set of instructions that the server must execute. It runs in parallel on the server and serves information to multiple clients. Node.js is a single-threaded event loop language. A single thread can handle concurrent requests without blocking requests.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;