import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MainCard(){
    return(
        <Card>
          <Card.Header>Plan</Card.Header>
          <Card.Body>
            <Card.Title> <h1>$20</h1></Card.Title>
            <Card.Text>
              Descripcion del plan y lo que se obtiene con el.
            </Card.Text>
            <Button variant="primary">Empieza ahora</Button>
          </Card.Body>
        </Card>
    );
}

export default MainCard;