import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const FindOut = () => {
    return (
        <div>
            <Container className="py-5">
                <Row className="gx-5">
                    <Col className="d-flex flex-column justify-content-center align-items-end">
                        <div >
                        <h1>Transform your life through education</h1>
                        <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                        <Button className="btn-dark">Find Out More</Button>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-start">
                        <img src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg" alt="instructor" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FindOut;