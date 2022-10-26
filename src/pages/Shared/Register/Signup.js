import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Signup.css';
import google from '../../../assets/google.png';
import github from '../../../assets/github.png';

const Signup = () => {
    return (
        <div className='login-signup'>
            <div className="overlay">
                <Container>
                    <Row>
                        <Col lg='7'>
                        </Col>
                        <Col lg='5'>
                            <div className="login-signup-container">
                                <h3 className='heading'>Sign Up</h3>
                                <Form className='login-logout-form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Image Url</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Image Url" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <button className='submit-btn' type="submit">
                                        Sign Up
                                    </button>
                                </Form>
                                <p className='or'>Or</p>
                                <div className="button-group">
                                    <button className='thirdparty-signup'><img className='google-icon' src={google} alt="" /> Continue with Google</button>
                                    <button className='thirdparty-signup'> <img className='github-icon' src={github} alt="" /> Continue with GitHub</button>
                                </div>

                                <p className='already-have-acc'>Don't you have an account? <Link to={'/login'}>Log in</Link></p>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>


        </div>
    );
};

export default Signup;