"use client";

import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function AboutUs() {
  return (
    <section>
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <Image
              style={{ width: "100%" }}
              src="https://mobirise.com/extensions/carm4/assets/images/face8.jpg"
            ></Image>
          </Col>
          <Col xs={12} md={6} className="pl-5 pt-5 pt-lg0 pt-5">
            <div className="wrapper align-left">
              <h3>Secion de titulo</h3>
              <p>Texto de descritpcion de la seccion</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
