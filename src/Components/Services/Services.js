import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {

        // using state for service 

    const [service, setService] = useState([]);

    useEffect(()=>{
        fetch('/teachers.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])


    return (

            // service card dynamically adding 

        <div>
            <Container className="py-5">
                <h1 className="py-4">Our Services</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                service.map((course)=>{
                    return(
                        <ServiceCard key={course.id} card={course}></ServiceCard>
                    )
                })
            }
            </Row>
            </Container>
        </div>
    );
};

export default Services;