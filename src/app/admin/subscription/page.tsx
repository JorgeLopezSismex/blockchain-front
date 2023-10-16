"use client";
import "bootstrap/dist/css/bootstrap.css";

import Link from "next/link";
import { Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import Accordion from "react-bootstrap/Accordion";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

export default function Subscription() {
  return (
    <Fragment>
      <AdminPageHeader title="Subscripción">
        <Breadcrumb className="float-sm-right">
          <Breadcrumb.Item>
            <Link href={"/admin"} style={{ textDecoration: "none" }}>
              Inicio
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Mi perfil</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <Container fluid>
        <Row>
          <Col xs={12} md={8}>
            <h5>Subscripción actual</h5>
            <Card style={{ marginBottom: 60 }}>
              <Card.Body>
                <Row></Row>
                <Row>
                  <Col xs={12}>
                    <p>
                      Suscripción mes{" "}
                      <Link href={"subscription/plans"}>Cambiar plan</Link>
                    </p>
                    <p>Autorenovación Activada Edita</p>
                    <p>Se renueva el 12 oct 2023</p>
                    <p>Método de pago PayPal Actualiza</p>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  ¿Cuándo se me cobrará la renovación automática?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Los servicios se basan en una suscripción y se renovarán
                    automáticamente hasta que los canceles. Consulta los
                    términos de suscripción y cancelación. Los pagos se cobran
                    en USD. Pueden aplicarse tarifas de tu proveedor de pago.
                    Serás redirigido al procesador de pago Paddle para completar
                    tu pago con PayPal.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  ¿Qué pasa si mi renovación automática está desactivada?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  ¿Qué pasa si contrato un nuevo plan antes de que termine el
                  que estoy usando?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
