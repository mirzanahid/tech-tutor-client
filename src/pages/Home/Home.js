import React from 'react';
import Banner from '../Banner/Banner';
import About from '../Shared/About/About';
import Features from '../Shared/Features/Features';
import NewsLetter from '../Shared/NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;