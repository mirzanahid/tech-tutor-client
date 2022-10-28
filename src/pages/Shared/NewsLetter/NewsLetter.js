import React from 'react';
import { Container } from 'react-bootstrap';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className="news-letter bg-color3">
            <Container>
                <h2 className='sub-heading2 text-color2'>Join Thousand Of Happy Students!</h2>
                <p className='secondary-paragraph'>Subscribe our newsletter & get latest news and update!</p>
                <form>
                    <div className="news-letter-form">
                        <input className='news-letter-input primary-paragraph' type="text" name="name" placeholder='Your Email Address' />
                        <button className='secondary-button2 news-letter-btn' type='submit'>Subscribe</button>
                    </div>
                </form>

            </Container>
        </div>
    );
};

export default NewsLetter;