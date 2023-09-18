import React from "react";
import Card from 'react-bootstrap/Card';

function ClientCard({name, image, description, date}) {
    return (
        <Card style={{ width: '15rem'}} className="h-100 mx-1 my-1" xs={12} md={4}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{date}</small>
          </Card.Footer>
        </Card>
    );
  }
  export default ClientCard;