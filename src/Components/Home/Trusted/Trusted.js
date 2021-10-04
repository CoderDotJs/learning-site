import React from 'react';
import { Container } from 'react-bootstrap';
import './Trusted.css';

const Trusted = () => {
    return (
        <div>
            <Container className="text-center py-5 trusted" fluid>
                <h1>Trusted by companies of all sizes</h1>
                <p>
                    <img src="https://s.udemycdn.com/partner-logos/v4/netflix-dark.svg" alt="" className="trusted-img"/>
                    <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="" className="trusted-img"/>
                    <img src="https://s.udemycdn.com/partner-logos/v4/apple-dark.svg" alt="" className="trusted-img"/>
                    <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="" className="trusted-img"/>
                    <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="" className="trusted-img"/>
                    
                </p>
            </Container>
        </div>
    );
};

export default Trusted;