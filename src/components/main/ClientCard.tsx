import React from "react";
import Card from "react-bootstrap/Card";

function ClientCard({ item }:any) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={item.imagen}
        alt={`Imagen de ${item.nombre}`}
      />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.puesto}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{item.ciudad}</Card.Subtitle>
        <Card.Text>{item.opinion}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ClientCard;
