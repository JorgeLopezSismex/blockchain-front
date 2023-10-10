"use client";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Fragment } from "react";

import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminProfileCard from "@/components/admin/AdminProfileCard";
import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import Link from "next/link";

export default function Profile() {
  return (
    <Fragment>
      <AdminPageHeader title="Mi perfil">
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
          <Col xs={12}>
            <AdminProfileCard
              title={"Verificación"}
              text1={"Estado de verificación: "}
              text2={"Sin verificar"}
              action={"Gestionar"}
              link={"/admin/verification"}
            />

            <AdminProfileCard
              title={"Subscripción"}
              text1={"Activo desde: "}
              text2={"12/12/2023"}
              action={"Gestionar"}
              link={"/admin/subscription"}
            />

            <AdminProfileCard
              title={"user@mail.com"}
              text1={"Cuenta creada: "}
              text2={"12/12/2023"}
              action={"Cambiar contraseña"}
              link={"/admin/update"}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
