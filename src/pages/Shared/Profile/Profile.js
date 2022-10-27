import React from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

import './Profile.css'

const Profile = () => {
    const { updateUserProfile } = useContext(AuthContext);

    const handlerForUpdateUserNameAndPhoto = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const profile = {
            displayName: name,
            photoURL: image
        }
        updateUserProfile(profile)
            .then(result => {
                toast('Update Successful', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            })
            .catch(error => {
                console.error('error', error)
            })
    }




    return (
        <div>
            <Container className='login-signup-container'>
                <Row className='d-flex justify-content-center'>
                    <Col lg="8">
                        <h3 className='update-user-heading .text-color4'>Update Your Name and Photo</h3>
                        <Form onSubmit={handlerForUpdateUserNameAndPhoto} className='update-user'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" name='name' />
                                <p className='text-danger'></p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control type="text" placeholder="Enter Image Url" name='image' />
                            </Form.Group>
                            <button className='submit-btn' type="submit">
                                Save Changes
                            </button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;