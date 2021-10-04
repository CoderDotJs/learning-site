import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import Banner from '../Header/Banner/Banner';
import ServiceCard from '../Services/ServiceCard/ServiceCard';
import Become from './Become/Become';
import FindOut from './FindOut/FindOut';
import Trusted from './Trusted/Trusted';

const Home = () => {
    const [service, setService] = useState([]);

    useEffect(()=>{
        fetch('/teachers.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    return (
        <div>
            {/* banner section  */}

            <Banner></Banner>

            {/* home services section shoing only 4 services */}

            <Container className="py-5">
                <h1 className="py-5 text-center">Our Services</h1>
            <Row xs={1} md={3} lg={4} className="g-4">
            {
                service.splice(1, 4).map((card)=>{
                    return (
                        <ServiceCard key={card.id} card={card}></ServiceCard>
                    )
                })
            }
            </Row>
            </Container>

                {/* home another section  */}

            <Become></Become>


            {/* Trusted compnays  */}

            <Trusted></Trusted>


            {/* find out more */}


            <FindOut></FindOut>
            

        </div>
    );
};

export default Home;