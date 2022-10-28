import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Checkout.css'

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const course = useLoaderData();
    const { title } = course


    // console.log(user)
    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg="6">
                        <div className="checkout">
                            <h3 className='text-success'>Thank You for purchase premium access</h3>
                            <h2 className='checkout-customerinfo text-color4'>Course Information:</h2>
                            <h2 className='checkout-courseName text-color'>Course Name: {title}</h2>
                            <h2 className='checkout-customerinfo text-color4'>Customer Information:</h2>
                            <p className='text-color '>Your name:{user.displayName}</p>
                            <p className='text-color'>Your Email: {user.email}</p>

                            <Link to={'/courses'} className='checkout-purchase-btn secondary-button'>Purchase More</Link>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;