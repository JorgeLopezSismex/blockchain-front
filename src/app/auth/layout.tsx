"use client";

import "bootstrap/dist/css/bootstrap.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function AuthLayout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col className="d-none d-md-block">Hola mundo1</Col>
        <Col md={8} lg={6}>
          <div className="login d-flex align-items-center py-5">
            <Container>
              <Row>
                <div className="col-md-9 col-lg-8 mx-auto">{children}</div>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
