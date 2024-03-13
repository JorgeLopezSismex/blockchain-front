import { Container, Col, Row, Button } from "react-bootstrap";
import BlueButton from "./BlueButton";

export default function WebStart() {
  return (
    <div className="background-about-us d-flex align-items-center">
      <Container>
        <Row className="d-flex justify-content-start">
          <Col md={10}>
            <h5>Innovate Technology</h5>
            <h1>¿Quienes somos?</h1>
            <p>
              Somos una empresa confiable que ofrece una plataforma tecnológica
              basada en blockchain con Etherium con la cual las empresas pueden
              generar información segura y accesible, garantizando su
              integridad.
            </p>
            <BlueButton label="Contacto" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
