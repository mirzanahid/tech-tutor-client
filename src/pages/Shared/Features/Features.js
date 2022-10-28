import React from 'react';
import {Container } from 'react-bootstrap';
import './Features.css';
import feature1 from '../../../assets/feature1.svg';
import feature2 from '../../../assets/feature2.svg';
import feature3 from '../../../assets/feature3.svg';
import feature4 from '../../../assets/feature4.svg';
const Features = () => {
    return (
        <div>
            <Container>
                <div className="feature">
                    <div className="feature-card bg-color">
                        <img className='feature-img' src={feature1} alt="" />
                        <h2 className='feature-heading sub-heading3 text-color2'>Online Class</h2>
                    </div>
                    <div className="feature-card bg-color">
                        <img className='feature-img' src={feature3} alt="" />
                        <h2 className='feature-heading sub-heading3 text-color2 '>Offline Download</h2>
                    </div>
                    <div className="feature-card bg-color">
                        <img className='feature-img' src={feature2} alt="" />
                        <h2 className='feature-heading sub-heading3 text-color2'>24/7 Support</h2>
                    </div>
                    <div className="feature-card bg-color">
                        <img className='feature-img' src={feature4} alt="" />
                        <h2 className='feature-heading sub-heading3 text-color2'>Life Support</h2>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Features;