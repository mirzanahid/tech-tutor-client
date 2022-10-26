import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner1 from '../../assets/banner1.svg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="banner-texts">
                            <h4 className='text-color banner-sub-heading'>Let's Learn</h4>
                            <h1 className='text-color banner-heading'>For Bright Future</h1>
                            <p className='text-color banner-pragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                            <Link className='text-color3 bg-color banner-btn'>Exlplore Courses</Link>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="banner-image">
                            <img src={Banner1} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;