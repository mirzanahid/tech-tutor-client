import React, { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import google from '../../../assets/google.png';
import github from '../../../assets/github.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Signup = () => {

    const { user, createUser, handlerForGoogleLogin, handlerForGithubLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    //error state maintain
    const [error, setError] = useState(null);
    const [passerror, setPasserror] = useState(null);
    const [emailerror, setEmailerror] = useState(null);
    //checking checked status
    const [checked, setChecked] = useState(false);



    // sign up with email and password
    const signupHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        // form authentication 
        if (!name && !email && !password) {
            setError('this field can not be empty')
        }
        if (user?.email === email) {
            setEmailerror('Already had an account on this email')
        }
        if (password !== confirmPassword) {
            setPasserror('password and confirm password does not match')
            form.password.reset()
            return

        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate('/login')
            })
            .catch(error => { console.error(error) })
    }

    // checking checked box status
    const checkedHandler = (e) => {
        setChecked(e.target.checked)
    }


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
                                <Form onSubmit={signupHandler} className='login-logout-form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" name='name' />
                                        <p className='text-danger'>{error}</p>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" name='email' />
                                        <p className='text-danger'>{error}</p>
                                        <p className='text-danger'>{emailerror}</p>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Image Url</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Image Url" name='image' />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" name='password' />
                                        <p className='text-danger'>{error}</p>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" name='confirmPassword' />
                                        <p className='text-danger'>{passerror}</p>
                                    </Form.Group>
                                    <Form.Group className="mb-3 check-input" controlId="formBasicCheckbox">
                                        <Form.Check onClick={checkedHandler} type="checkbox" />
                                        <Form.Label>I agree to the <Link>Terms of Service</Link> and <Link>Privacy Policy</Link></Form.Label>
                                    </Form.Group>
                                    <Button className='submit-btn' type="submit" disabled={!checked}>
                                        Sign Up
                                    </Button>
                                </Form>
                                <p className='or'>Or</p>
                                <div className="button-group">
                                    <button onClick={handlerForGoogleLogin} className='thirdparty-signup'><img className='google-icon' src={google} alt="" /> Continue with Google</button>
                                    <button onClick={handlerForGithubLogin} className='thirdparty-signup'> <img className='github-icon' src={github} alt="" /> Continue with GitHub</button>
                                </div>
                                <p className='already-have-acc'>Already have an account? <Link to={'/login'}>Log in</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


        </div>
    );
};

export default Signup;