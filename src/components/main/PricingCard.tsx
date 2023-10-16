import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PricingCard({ membership }:any) {
  return (
    <Card className="mx-4 my-3 h-100" style={{ margin: 10 }}>
      <Card.Header>{membership.membershipName}</Card.Header>
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <h1>$12</h1>
        </Card.Title>
        <Card.Text>
          {membership.membershipDescription}
          <ul>
            {membership.membershipFeatureDescription.map((fueature : any) => (
              <li>{fueature.membershipFeatureDescription}</li>
            ))}
          </ul>
        </Card.Text>
        <Button href="#" className="btn-lg btn-block text-truncate mt-auto">
          Añadir al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}
export default PricingCard;
