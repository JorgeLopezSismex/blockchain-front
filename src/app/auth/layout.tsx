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
              "https://media.licdn.com/dms/image/D4E22AQGkbIprz8KGXg/feedshare-shrink_800/0/1686639270349?e=2147483647&v=beta&t=tKD0ZE0U6R7thMOfgkAFqqgZtviQQ-0yArrOAqVeME8"
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
