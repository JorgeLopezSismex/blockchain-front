"use client";

import "bootstrap/dist/css/bootstrap.css";

import styles from "./styles.module.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container fluid>
      <Row>
        <Col md={4} lg={6} className={styles.authImage}></Col>
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
