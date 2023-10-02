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

const columns = [
  { label: "Nombre", renderCell: (item: any) => item.name == "" || item.name == null ? "Nombre no especificado" : item.name },
  {
    label: "Correo electrónico",
    renderCell: (item: any) => item.email,
  },
  { label: "Teléfono", renderCell: (item: any) => item.phone == "" || item.phone == null ? "Telefono sin especificar" : item.phone },
  {
    label: "Dirección",
    renderCell: (item: any) => item.address == "" || item.address == null ? "Dirección no especificada" : item.address,
  },
  {
    label: "Estado de verificación",
    renderCell: (item: any) => item.issuerVerificationStatusName,
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
          <Col sm={6} className="d-flex justify-content-end">
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