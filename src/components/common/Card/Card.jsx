// src/components/common/Card.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProgramCard = ({ title, description, image, onClick }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={onClick}>Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default ProgramCard;