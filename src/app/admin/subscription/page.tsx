"use client";
import "bootstrap/dist/css/bootstrap.css";

import Link from "next/link";
import { Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import Accordion from "react-bootstrap/Accordion";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Badge from "react-bootstrap/Badge";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

export default function Subscription() {
  return (
    <Fragment>
      <AdminPageHeader title="Subscripción">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../admin/profile"}>
            Perfil
          </Link>
          <Breadcrumb.Item active>Subscripción</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <Tabs
              fill
              className="mb-3"
              id="fill-tab-example"
              defaultActiveKey="profile"
            >
              <Tab eventKey="profile" title="Subscripciones">
                <Row>
                  <Col xs={12} md={8}>
                    <Card style={{ marginBottom: 60 }}>
                      <Card.Body>
                        <AdminTableSpinner />

                        <Row>
                          <Col xs={12}>
                            <div className="d-flex justify-content-between">
                              <div>
                                <p>Nombre del plan</p>
                                <p>Sismex BlockChain</p>
                              </div>

                              <div>
                                <h5>
                                  <Badge pill bg="success">
                                    Activo
                                  </Badge>
                                </h5>
                              </div>
                            </div>

                            <hr></hr>

                            <Row>
                              <Col xs={12} md={4}>
                                Suscripción
                              </Col>
                              <Col xs={12} md={8}>
                                mes{" "}
                                <Link href={"subscription/plans"}>
                                  Cambiar plan
                                </Link>
                              </Col>
                            </Row>

                            <Row>
                              <Col xs={12} md={4}>
                                Autorenovación
                              </Col>
                              <Col xs={12} md={8}>
                                Activada{" "}
                                <Link href={"subscription/plans"}>Editar</Link>
                              </Col>
                            </Row>

                            <Row>
                              <Col xs={12} md={4}>
                                Se renueva el
                              </Col>
                              <Col xs={12} md={8}>
                                12 oct 2023
                              </Col>
                            </Row>

                            <Row>
                              <Col xs={12} md={4}>
                                Método de pago
                              </Col>
                              <Col xs={12} md={8}>
                                PayPal Actualizar
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={4}>
                    <h5>Preguntas frecuentes</h5>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          ¿Qué sucede si activo la renovación automática?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          ¿Cuándo se me cobrará la renovación automática?
                        </Accordion.Header>
                        <Accordion.Body>
                          Los servicios se basan en una suscripción y se
                          renovarán automáticamente hasta que los canceles.
                          Consulta los términos de suscripción y cancelación.
                          Los pagos se cobran en USD. Pueden aplicarse tarifas
                          de tu proveedor de pago. Serás redirigido al
                          procesador de pago Paddle para completar tu pago con
                          PayPal.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          ¿Qué pasa si mi renovación automática está
                          desactivada?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          ¿Qué pasa si contrato un nuevo plan antes de que
                          termine el que estoy usando?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="home" title="Historial de facturación">
                Historial de facturación
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
