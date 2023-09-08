"use client";
//Ventana de clientes (╯°□°）╯︵ ┻━┻

import { Col, Container, Row } from "react-bootstrap";
import ClientCarousel from '../../components/main/ClientCarousel';

export default function Clients() {
  return (
    <div>
      <Container>
        <Row>
          <Col><h1 style={{textAlign:'center'}}>Clientes</h1></Col>
        </Row>
        <Row>
          <ClientCarousel/>
        </Row>
      </Container>
    </div>
  );
}