import React from 'react';
import { Card, Col} from 'react-bootstrap';

const AboutCard = (props) => {
    const { full_name, img, post} = props.about;
    
    return (

            // aboutcard component for the about section 

        <div>
            
            <Col>
            <Card className="shadow">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{full_name}</Card.Title>
                <Card.Text>
                    {post}
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default AboutCard;