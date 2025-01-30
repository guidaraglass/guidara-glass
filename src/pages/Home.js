import React from 'react';
import Header from '../components/Header';
import InstagramPosts from '../components/InstagramPosts';
import Button from '../components/Button';
import { config } from '../config';

const Home = () => {
    return (
        <div>
            <Header />
            <Button text="Pet Portrait Commission Form" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSefV3dCeSP-UiGSFJh0xFYVZTm00argXWDt-g425K-4r2tOFw/viewform?usp=sharing', '_blank')} />
       
            <Button text="Commission Form" onClick={() => window.open(config.commissionUrl, '_blank')} />
            <h2>Recent Work</h2>
            <InstagramPosts />
        </div>
    );
};

export default Home;