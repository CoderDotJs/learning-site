import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import LiveCard from './LiveCard/LiveCard';

const LiveSession = () => {

    // setting state for teacher card 

    const [teachers, setTeachers] = useState([])

    useEffect(()=>{ 
        fetch('/teachers.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    }, [])

    return (
        <div>
            <Container className="py-5">

                    {/* all live sessions will be shown here  */}

                <h1 className="pt-5 text-center">All Live Sessions</h1>
                <h6 className="pb-5 text-center">Click on the cards to watch</h6>

                {/* adding sessinons dynamically  */}

            <Row lg={4} md={2} className="g-3">
           {
               teachers.slice(0, 6).map((live)=>{
                   return (
                       <LiveCard key={live.id} card={live}></LiveCard>
                   )
               })
           }
           </Row>
           </Container>
        </div>
    );
};

export default LiveSession;