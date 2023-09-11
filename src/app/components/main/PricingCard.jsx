import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PricingCard({ name, price, description }) {
  return (
    <Card className="mx-4 my-3">
      <Card.Header >{name}</Card.Header>
      <Card.Body>
        <Card.Title>
          <h1>${price}</h1>
        </Card.Title>
        <Card.Text>
          {description}
          <ul>
            <li>Something</li>
            <li>Something more</li>
            <li>Something else</li>
            <li>Something important</li>
          </ul>
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}
export default PricingCard;