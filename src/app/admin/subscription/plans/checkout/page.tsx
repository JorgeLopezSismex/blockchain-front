"use client";

import Link from "next/link";
import { Fragment } from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { Container, Row, Col } from "react-bootstrap";

export default function PlanCheckout() {
  return (
    <Fragment>
      <AdminPageHeader title="Resumen de compra">
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
          <Col md={6}>sfsdf1</Col>
          <Col md={6}>sfsdf2</Col>
        </Row>
      </Container>
    </Fragment>
  );
}
