import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
            <h1>Always something new to learn</h1>
            <p>With courses added regularly to our catalog, you always get the latest skills. Sale from $13.99 ends today.</p>
            <Button variant="primary" className="btn-primary">Get Started</Button>
            </div>
        </div>
    );
};

export default Banner;