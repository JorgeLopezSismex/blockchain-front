import React from 'react';
import Card from 'react-bootstrap/Card';

export default function BenefitsCard(props) {
  return (
    <Card style={{backgroundColor:'#F8F9FA'}} className="h-100 py-3 px-3">
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text className='text-muted'>{props.contenido}</Card.Text>
      </Card.Body>
    </Card>
  );
}