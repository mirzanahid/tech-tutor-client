import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import google from '../../../assets/google.png';
import github from '../../../assets/github.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import app from '../../../firebase/firebase.config';


const auth = getAuth(app)
// google provider
const provider = new GoogleAuthProvider();
//github provider
const githubProvider = new GithubAuthProvider();

const Login = () => {

    const { user, login, load } = useContext(AuthContext);
    const navigate = useNavigate()

    const [logInError, setLogInError] = useState(null);

    // location state
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'




    //login with email and password
    const loginHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email && !password) {
            setLogInError('please provide valid email and password')
        }


        if (user?.email !== email && user?.password !== password) {
            setLogInError('your email and password is incorrect!')

        }

        login(email, password)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => {

            });
    }


    //log in with google 
    const handlerForGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => {
            })

    }

    //log in with git hub
    const handlerForGithubSignin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                navigate(from, { replace: true })
                load(false)
             
            })
            .catch(error => {
            })
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
                                <h3 className='heading'>Log In</h3>
                                <Form onSubmit={loginHandler} className='login-logout-form'>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" name='email' />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" name='password' />
                                        <p className='text-danger'>{logInError}</p>
                                    </Form.Group>
                                    <button className='submit-btn' type="submit">
                                        Log In
                                    </button>
                                </Form>
                                <p className='or'>Or</p>
                                <div className="button-group">
                                    <button onClick={handlerForGoogleSignin} className='thirdparty-signup'><img className='google-icon' src={google} alt="" /> Continue with Google</button>
                                    <button onClick={handlerForGithubSignin} className='thirdparty-signup'> <img className='github-icon' src={github} alt="" /> Continue with GitHub</button>
                                </div>

                                <p className='already-have-acc'>Don't you have an account? <Link to={'/signup'}>Sign Up</Link></p>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>


        </div>
    );
};

export default Login;