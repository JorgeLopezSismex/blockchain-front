"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { Tab, Tabs } from "react-bootstrap";
import { Row, Col, Container, Breadcrumb } from "react-bootstrap";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminProfileCard from "@/components/admin/AdminProfileCard";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminDownloadLink from "@/components/admin/AdminDownloadLink";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";

import { apiFetch } from "@/helpers/api-fetch";
import { IssuerData } from "@/types/issuers";
import AdminFileDetail from "@/components/admin/AdminFileDetail";

export default function IssuerDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingIssuer, setLoadingIssuer] = useState(false);

  const [issuer, setIssuer] = useState({} as IssuerData);
  const [attachments, setAttachments] = useState({} as any);

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "ISSUERS_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        if (!res.data.DETAIL_ISSUER) {
          return;
        }

        getIssuer();
      }
    });
  }, []);

  const getIssuer = async () => {
    setLoadingIssuer(true);
    apiFetch(`issuers/${id}`).then((res) => {
      if (res.success) {
        setIssuer(res.data);
        setAttachments(res.attachments);

        setLoadingIssuer(false);
        setLoadingScreen(false);
      }
    });
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Detalles de emisor">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../admin/issuers"}>
            Emisores
          </Link>
          <Breadcrumb.Item active>Detalles</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <Tabs
              fill
              className="mb-3"
              id="fill-tab-example"
              defaultActiveKey="details"
            >
              {/* ----------------------- Tab de detalles del emisor ----------------------- */}
              <Tab eventKey="details" title="Detalles del emisor">
                <AdminCardContainer xs={12} marginBottom={10} noPadding={true}>
                  <Row>
                    <h4 style={{ marginBottom: 20 }}>
                      Información de identidad
                    </h4>
                    <Col xs={12} md={6} className="mb-3">
                      <h6>Nombre comercial</h6>
                      {issuer.name}
                    </Col>

                    <Col xs={12} sm={6} className="mb-3">
                      <h6>Razón social</h6>
                      {issuer.legalName}
                    </Col>
                  </Row>
                </AdminCardContainer>

                <AdminCardContainer xs={12} marginBottom={10} noPadding={true}>
                  <Row>
                    <h4 style={{ marginBottom: 20 }}>
                      Información de dirección
                    </h4>
                    <Col xs={12} sm={4} className="mb-3">
                      <h6>Código postal</h6>
                      {issuer.zipCode == null ? "Sin datos" : issuer.zipCode}
                    </Col>
                    <Col xs={12} sm={4} className="mb-3">
                      <h6>País</h6>
                      {issuer.country == null ? "Sin datos" : issuer.country}
                    </Col>
                    <Col xs={12} sm={4} className="mb-3">
                      <h6>Estado</h6>
                      {issuer.state == null ? "Sin datos" : issuer.state}
                    </Col>

                    <Col xs={12} sm={4} className="mb-3">
                      <h6>Ciudad</h6>
                      {issuer.city == null ? "Sin datos" : issuer.city}
                    </Col>
                    <Col xs={12} sm={4} className="mb-3">
                      <h6>Colonia</h6>
                      {issuer.suburb == null ? "Sin datos" : issuer.suburb}
                    </Col>
                    <Col xs={12} sm={4} className="mb-3">
                      <h6>Calle</h6>
                      {issuer.street == null ? "Sin datos" : issuer.street}
                    </Col>

                    <Col xs={12} sm={4} className="mb-3">
                      <h6>Número interior</h6>
                      {issuer.internalNumber == null
                        ? "Sin datos"
                        : issuer.internalNumber}
                    </Col>
                    <Col xs={12} sm={4} className="mb-3">
                      <h6>Número exterior</h6>
                      {issuer.externalNumber == null
                        ? "Sin datos"
                        : issuer.externalNumber}
                    </Col>
                  </Row>
                </AdminCardContainer>

                <AdminCardContainer xs={12} marginBottom={10} noPadding={true}>
                  <Row>
                    <h4 style={{ marginBottom: 20 }}>Información legal</h4>

                    <AdminFileDetail
                      label="Cédula fiscal"
                      downloadLabel="Descargar cédula fiscal"
                      attachment={
                        attachments.TAX_ID == undefined
                          ? null
                          : attachments.TAX_ID
                      }
                    />

                    <AdminFileDetail
                      label="Estado de situación fiscal"
                      downloadLabel="Descargar estado de situación fiscal"
                      attachment={
                        attachments.TAX_SITUATION_STATEMENT == undefined
                          ? null
                          : attachments.TAX_SITUATION_STATEMENT
                      }
                    />

                    <AdminFileDetail
                      label="Acta constitutiva"
                      downloadLabel="Descargar acta constitutiva"
                      attachment={
                        attachments.CONSTITUTIVE_ACT == undefined
                          ? null
                          : attachments.CONSTITUTIVE_ACT
                      }
                    />
                  </Row>
                </AdminCardContainer>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <AdminFormBackButton
                    loading={false}
                    backUrl="../../admin/issuers"
                  />
                </div>
              </Tab>

              {/* ----------------------- Tab de registros del emisor ---------------------- */}
              <Tab eventKey="logs" title="Registros del emisor">
                <Row>
                  <Col xs={12}>
                    <AdminProfileCard
                      text1={"Estado: "}
                      action={"Ver miembros"}
                      title={"Miembros"}
                      link={`/admin/members?id=${id}`}
                      text2="Miembros asignados a este emisor."
                    />

                    <AdminProfileCard
                      text1={"Estado: "}
                      action={"Ver invitaciones"}
                      title={"Invitaciones"}
                      link={`/admin/invitations?id=${id}`}
                      text2="Invitaciones creadas por este emisor."
                    />

                    <AdminProfileCard
                      text1={"Estado: "}
                      action={"Ver contactos"}
                      title={"Contactos"}
                      link={`../profile/contacts?id=${id}`}
                      text2="Contactos añadidos por este emisor."
                    />
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
