import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { NavLink } from 'react-router-dom';

const ServiceCard = (props) => {

        // destructing the object from props.card 

    const { img, course_name, teacher, review, cost} = props.card;

    // normal style object for navlink 

    const style ={
        "color": "white",
        "backgroundColor": "#6200EE",
        "padding": "5px 10px",
        "borderRadius": "2px",
        "fontSize": "18px",
        "marginTop": "10px"
    }

    return (

            // service card component 

        <div>
            <Col className="text-left shadow">
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{course_name}</Card.Title>
            <Card.Text>
                {teacher}
                <br/>
                {
                    <ReactStars
                    count={5}
                    value={review}
                    size={24}
                    activeColor="#ffd700"
                  />
                }
                <p className="fw-semibold">${cost}</p>
                
            </Card.Text>
            <NavLink to="/home" style={style}>Start Learning</NavLink>
            </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default ServiceCard;