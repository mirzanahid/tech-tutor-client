import React from 'react';
import { Col, Row } from 'react-bootstrap';
import login from '../../../assets/login.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Login = () => {
    return (
        <div>
            <Row>
                <Col lg='4'>
                    <div className="login">
                        <h3>Log in</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                        <div className="button-group">
                            <button>Continue with Google</button>
                            <button>Continue with GitHub</button>
                        </div>
                    </div>
                </Col>
                <Col lg='8'>
                    <img src={login} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Login;