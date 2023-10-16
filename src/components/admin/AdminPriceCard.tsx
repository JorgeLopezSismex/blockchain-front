import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Container } from "react-bootstrap";
import Link from "next/link";

export default function AdminPriceCard() {
  return (
    <Col xs={12} md={4}>
      <Card>
        <Card.Header>Nombre del plan</Card.Header>
        <Card.Body className="d-flex flex-column">
          <Card.Title>
            <h1>$12</h1>
          </Card.Title>
          <Card.Text>sdfsdfsd</Card.Text>
          <Link href={"plans/checkout"}>
            <Button className="btn-lg btn-block text-truncate mt-auto">
              Añadir al carrito
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
