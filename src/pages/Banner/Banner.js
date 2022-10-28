import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner1 from '../../assets/banner1.svg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Row className='banner-row'>
                    <Col lg="6" md="4">
                        <div className="banner-texts">
                            <h4 className='text-color banner-sub-heading'>Let's Learn</h4>
                            <h1 className='main-heading banner-heading'>For Bright Future</h1>
                            <p className='banner-paragraph primary-paragraph'>TechTutor teaches student in such a different way that the student learn everything in vary fun way. </p>
                            <Link className='primary-button banner-btn' to={'./courses'}>Explore Courses</Link>
                        </div>
                    </Col>
                    <Col lg="6" md="8">
                        <div className="banner-image">
                            <img className='banner-img' src={Banner1} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;