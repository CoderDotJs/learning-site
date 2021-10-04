import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Become = () => {
    return (
        <div>
            <Container className="py-5">
                <Row className="gx-5">
                    <Col className="d-flex justify-content-end">
                        <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="instructor" />
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-start">
                        <div >
                        <h1>Become an instructor</h1>
                        <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                        <Button className="btn-dark">Start Today</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Become;