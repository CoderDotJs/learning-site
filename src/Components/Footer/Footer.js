import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (

            // footer section 

        <div>
            
    <footer className="w-100 py-4 flex-shrink-0 text-left">
        <Container className="py-4">
            <Row className="gx-5">
                <Col  lg={4} md={6}>
                    <h5 className="h1 text-white">elearny</h5>
                    <p className="small text-muted">Get unlimited access to 6,000+ of Udemy’s top courses for your team.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. </p>
                </Col>
                <Col lg={2} md={6}>
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/teachers">Teachers</NavLink></li>
                    </ul>
                </Col>
                <Col lg={2} md={6}>
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/teachers">Teachers</NavLink></li>
                    </ul>
                </Col>
                <Col lg={4} md={6}>
                    <h5 className="text-white mb-3">Newsletter</h5>
                    <p className="small text-muted">Get unlimited access to 6,000+ of Udemy’s top courses for your team.</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i>Subscribe</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </footer>
        </div>
    );
};

export default Footer;