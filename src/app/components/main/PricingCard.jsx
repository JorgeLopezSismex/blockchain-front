import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PricingCard({ name, price, description }) {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>
          {" "}
          <h1>${price}</h1>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default PricingCard;
