"use client";

import AdminProfileCard from "@/components/admin/AdminProfileCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import { Fragment, useEffect, useState } from "react";

import Link from "next/link";
import { Row, Col, Container, Breadcrumb } from "react-bootstrap";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

export default function IssuerDetails() {
  const [loadingScreen, setLoadingScreen] = useState(false);

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Detalles de emisor">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../../admin/issuers"}>
            Emisores
          </Link>
          <Breadcrumb.Item active>Detalles de emisor</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>fsdfsdfdsfsdf</AdminCardContainer>

      <Container fluid>
        <Row>
          <Col xs={12}>
            <AdminProfileCard
              text1={"Estado: "}
              action={"Ver miembros"}
              title={"Miembros"}
              link={"/admin/issuers/details/members"}
              text2="Miembros asignados a este emisor."
            />

            <AdminProfileCard
              text1={"Estado: "}
              action={"Ver invitaciones"}
              title={"Invitaciones"}
              link={"/admin/issuers/details/invitations"}
              text2="Invitaciones creadas por este emisor."
            />

            <AdminProfileCard
              text1={"Estado: "}
              action={"Ver contactos"}
              title={"Contactos"}
              link={"/admin/issuers/details/contacts"}
              text2="Contactos añadidos por este emisor."
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
