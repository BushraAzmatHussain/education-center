import React from 'react';
import second from '/Web course/education-center/src/images/second.jpg'
import "./About.css"
import { Button, Card } from 'react-bootstrap';


const About = () => {
    return (
        <div>
            <Card className="mx-auto" style={{ width: '38rem' }}>
  <Card.Img variant="top" src={second} />
  <Card.Body className="bg-dark">
    <Card.Title>About Us</Card.Title>
    <Card.Text>
    We empower organizations by delivering innovative IT solutions and exceptional customer service grounded in accountability.At DYOPATH we pursue both purpose and success knowing one will ultimately lead to the other. Our core values foster a culture that promotes accountability, excellence, exceptional customer service and sustainability. We live out our values and put them into action every day through our relationships with our employees, clients, partners and families.
    </Card.Text>
    <Button className="bg-light text">Join with us</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default About;