"use client";

import "bootstrap/dist/css/bootstrap.css";

import AdminNavBar from "../components/admin/AdminNavBar";
import Admin from "./page";

import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Fragment } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";

import Alert from "react-bootstrap/Alert";

import styles from "./styles.module.css";

import AdminTable from "../components/admin/AdminTable";

export default function AdminLayout({ children }) {
  return (
    <div className={styles.contentWrapper}>
      <AdminNavBar></AdminNavBar>
      <section className={styles.contentHeader}>
        <Container fluid>
          <Row className="mb-2">
            <Col sm={6}>
              <h1>Invitaciones</h1>
            </Col>

            <Col sm={6} className={styles.contentBreadcrumb}>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.contentMain}>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body className={styles.cardBody}>
                  <div>
                    {/* <Row>
                      <Col sm={12} md={6}>
                        <ButtonGroup
                          className={styles.tableButtons}
                          aria-label="Basic example"
                        >
                          <Button variant="primary">Nueva invitación</Button>
                        </ButtonGroup>
                      </Col>

                      <Col sm={12} md={6}>
                        <Form.Control
                          type="search"
                          placeholder="Buscar..."
                          className="me-2"
                          aria-label="Buscar..."
                        />
                      </Col>
                    </Row> */}

                    <AdminTable />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
