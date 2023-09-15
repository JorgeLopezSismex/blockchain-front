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
        <Col
          md={4}
          lg={6}
          className="d-none d-md-flex d-md-block"
          style={{
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(
              "https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZSUyMG1vdW50YWlufGVufDB8fDB8fHww&w=1000&q=80"
            )`,
          }}
        ></Col>
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
