import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AboutCard from '../AboutCard/AboutCard';
import { Row, Container } from 'react-bootstrap';

const About = () => {


        // using state and seting the about section from a json 

    const [about, setAbout] = useState([]);

    useEffect(()=>{
        fetch('/aboutUs.json')
        .then(res => res.json())
        .then(data=> setAbout(data))
    }, [])
    return (
        <div>
            <Container>

                {/* about us section */}

            <h1 className="py-5">About Us</h1>
            <p>
                
Welcome to elearny, your number one source for all things [product]. We're dedicated to giving you the very best of , with a focus on learning.


Founded in 1999, elearny has come a long way from its beginnings in (starting location). When  first started out, their passion for [brand message - e.g. "eco-friendly cleaning products"] drove them to (action: quit day job, do tons of research, etc.) so that elearny can offer you (competitive differentiator - e.g. "the world's most advanced toothbrush"). We now serve customers all over [place - town, country, the world], and are thrilled that we're able to turn our passion into [my/our] own website.


We hope you enjoy  products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact [me/us].


Sincerely,
elearny


            </p>
            </Container>

                {/* all the team members card is added here dynamically  */}

                
                {/* Team section container  */}

            <Container className="py-5">

                <h1 className="py-5">Our Team Members</h1>

                {/* Card Container  */}

            <Row xs={1} md={2} lg={3} className="g-4">
            {
                about?.map((user)=>{
                    return (
                        <AboutCard key={user.id} about={user}></AboutCard>
                    )
                })
            }
            </Row>
            </Container>
        </div>
    );
};

export default About;