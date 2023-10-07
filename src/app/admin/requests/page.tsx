"use client";
//Página de solicitudes ☆⌒(*＾-゜)v

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Fragment } from "react";

import Card from "react-bootstrap/Card";
import AdminTable from "@/app/components/admin/AdminTable";
import { apiFetch } from "@/helpers/api-fetch";
import { Button } from "react-bootstrap";

import Accordion from "react-bootstrap/Accordion";

const columns = [
  {
    label: "Nombre",
    renderCell: (item: any) =>
      item.name == "" || item.name == null
        ? "Nombre no especificado"
        : item.name,
  },
  {
    label: "Correo electrónico",
    renderCell: (item: any) => item.email,
  },
  {
    label: "Teléfono",
    renderCell: (item: any) =>
      item.phone == "" || item.phone == null
        ? "Telefono sin especificar"
        : item.phone,
  },
  {
    label: "Dirección",
    renderCell: (item: any) =>
      item.address == "" || item.address == null
        ? "Dirección no especificada"
        : item.address,
  },
  {
    label: "Estado de verificación",
    renderCell: (item: any) => item.issuerVerificationStatusName,
  },
  {
    label: "Acciones",
    renderCell: (item: any) => {
      return (
        <div>
          <button>A</button>
          <button>A</button>
          <button>A</button>
        </div>
      );
    },
  },
];

export default function Requests() {
  const [issuers, setIssuers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getIssuers();
  }, []);

  const getIssuers = async () => {
    setLoading(true);
    const res = await apiFetch("issuers");

    if (res.success) {
      setLoading(false);
      setIssuers(res.data);
    }
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filtros</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

/* <Fragment>
{/* <Container fluid>
  <Row className="mb-2">
    <Col sm={6}>
      <h1 style={{ fontSize: "1.8rem", margin: 0 }}>Solicitudes</h1>
    </Col>
    <Col sm={6} className="d-flex justify-content-end">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>Documentos</Breadcrumb.Item>
      </Breadcrumb>
    </Col>
  </Row>
</Container> */

/* <section style={{ padding: "15px 0.5rem" }}>
  <Container
    fluid
    style={{
      width: "100%",
      paddingRight: 7.5,
      paddingLeft: 7.5,
      marginRight: "auto",
      marginLeft: "auto",
    }}
  >
    <Row className="mb-2">
      <Col sm={6}>
        <h1 style={{ fontSize: "1.8rem", margin: 0 }}>Solicitudes</h1>
      </Col>
      <Col sm={6} className="d-flex justify-content-end float-sm-right">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Documentos</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
  </Container>
</section>

<section style={{ padding: "0 0.5rem" }}>
  <Container fluid>
    <Row xs={12}>
      <Card style={{ marginBottom: "1 rem" }}>
        <Card.Body>
          <AdminTable columns={columns} nodes={issuers} />
        </Card.Body>
      </Card>
    </Row>
  </Container>
</section>
</Fragment> */
