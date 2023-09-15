import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PricingCard({ name, price, description }) {
  return (
    <Card className="mx-4 my-3 h-100">
      <Card.Header>{name}</Card.Header>
      <Card.Body className="d-flex flex-column">
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
        <a
          href=""
          data-target="#profileModal"
          data-toggle="modal"
          data-caption="Tammy"
          data-src="./assets/images/pr-sample2.jpg"
          class="btn btn-secondary btn-lg btn-block text-truncate mt-auto"
        >
          View Profile
        </a>
      </Card.Body>
    </Card>
  );
}
export default PricingCard;
