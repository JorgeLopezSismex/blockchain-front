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
// import RequestTable from "../../components/admin/RequestTable";
import AdminTable from "@/app/components/admin/AdminTable";
import { apiFetch } from "@/helpers/api-fetch";

const columns = [
  { label: "Nombre", renderCell: (item: any) => item.name },
  {
    label: "Correo electrónico",
    renderCell: (item: any) => item.email,
  },
  { label: "Teléfono", renderCell: (item: any) => item.phone },
  {
    label: "Dirección",
    renderCell: (item: any) => item.address,
  },
  {
    label: "Estado de verificación",
    renderCell: (item: any) => item.issuerVerificationStatusName,
  },
];

const nodes = [
  {
    emiterId: "1",
    name: "Jorge Alberto",
    mail: "jalopez@sismex.com",
    phone: "231231231",
    address: "asdasda",
    stateId: 1,
    verification: {
      id: 1,
      name: "sin verificar",
      description: "description",
    },
    profile: {
      id: 1,
      name: "emisor",
      description: "sdfsdfsfsdf",
    },
  },
  {
    emiterId: "2",
    name: "Brando Francisco",
    mail: "bfrancisco@sismex.com",
    phone: "0123456789",
    address: "su casa",
    stateId: 2,
    verification: {
      id: 2,
      name: "sin verificar",
      description: "description",
    },
    profile: {
      id: 2,
      name: "emisor",
      description: "sdfsdfsfsdf",
    },
  },
  {
    emiterId: "3",
    name: "Yadira Ayala",
    mail: "yayala@sismex.com",
    phone: "9876543210",
    address: "cachamia",
    stateId: 3,
    verification: {
      id: 3,
      name: "sin verificar",
      description: "description",
    },
    profile: {
      id: 3,
      name: "emisor",
      description: "sdfsdfsfsdf",
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
    <Fragment>
      <Container fluid>
        <Row className="mb-2">
          <Col sm={6}>
            <h1 style={{ fontSize: "1.8rem", margin: 0 }}>Solicitudes</h1>
          </Col>
          <Col sm={6}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item active>Documentos</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>

      <section>
        <Container fluid>
          <Row xs={12}>
            <Card style={{ marginBottom: 60 }}>
              <Card.Body>
                <div>
                  <AdminTable columns={columns} nodes={issuers} />
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}
