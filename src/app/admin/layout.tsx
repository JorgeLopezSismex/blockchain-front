"use client";

import "bootstrap/dist/css/bootstrap.css";

import AdminNavBar from "../components/admin/AdminNavBar";
import Admin from "./page";

import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Fragment } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";

import Alert from "react-bootstrap/Alert";

export default function AdminLayout({ children }) {
  return (
    <Fragment>
      <AdminNavBar />

      <div>
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              <h1>Invitaciones para estudiantes</h1>
            </Col>
            <Col
              xs={12}
              md={6}
              style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>

          <Alert key="info" variant="info">
            This is a info alert—check it out!
          </Alert>

          <Row>
            <Col xs={12}>
              <Card style={{ padding: "1.25rem", marginBottom: "1rem" }}>
                <Row>
                  <Col xs={12} md={6} style={{ marginBottom: 10 }}>
                    <Button variant="primary">Nuevo</Button>
                  </Col>
                  <Col xs={12} md={6} style={{ marginBottom: 10 }}>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                    </Form>
                  </Col>
                </Row>
                <Card.Body>{children}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
