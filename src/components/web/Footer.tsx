import { Container, Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col md={6}>Logo</Col>
        <Col md={3}>Enlaces</Col>
        <Col md={3}>Contacto</Col>
      </Row>
    </Container>
  );
}
