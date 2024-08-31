import React from 'react';
import { useHref } from 'react-router-dom';
import Header from '../components/Header';
import InstagramPosts from '../components/InstagramPosts';
import Button from '../components/Button';
import { config } from '../config';

const Home = () => {
    const href = useHref();

    return (
        <div>
            <Header />
            <h1>Guidara Glass Designs</h1>
            <Button text="Commission Form" onClick={() => href(config.commissionUrl)} />
            <h2>Recent Work</h2>
            <InstagramPosts />
        </div>
    );
};

export default Home;