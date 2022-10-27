import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Checkout.css'

const Checkout = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg="6">
                        <div className="checkout">
                            <h3 className='text-success'>Thank You for purchase premium access</h3>
                            <p className='text-color'>Your name:{user.displayName}</p>
                            <p className='text-color'>Your Email: {user.email}</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;