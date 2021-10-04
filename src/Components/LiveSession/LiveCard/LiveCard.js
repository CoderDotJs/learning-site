import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const LiveCard = (props) => {

        // destructing the data from the props.card 

    const {id, img, course_name, teacher} = props.card;


    return (

            // this section will be added in the card section 

        <div>
            <Col className="text-center">
            <NavLink to={`/live/${id}`}>
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{course_name}</Card.Title>
            <Card.Text>
                By {teacher}
                <br />
                Click to watch
            </Card.Text>
            </Card.Body>
            </Card>
            </NavLink>
            </Col>
        </div>
    );
};

export default LiveCard;