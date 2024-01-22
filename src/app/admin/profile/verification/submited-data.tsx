import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

import AdminDownloadLink from "@/components/admin/AdminDownloadLink";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

export default function SubmitedData({
  submitedData,
  attachments,
}: {
  submitedData: any;
  attachments: any;
}) {
  return (
    <Fragment>
      <AdminCardContainer xs={12} marginBottom={10}>
        <Row>
          <h4 style={{ marginBottom: 20 }}>Información de identidad</h4>
          <Col xs={12} md={6} className="mb-3">
            <h6>Nombre comercial</h6>
            {submitedData.name}
          </Col>

          <Col xs={12} sm={6} className="mb-3">
            <h6>Razón social</h6>
            {submitedData.legalName}
          </Col>
        </Row>
      </AdminCardContainer>

      <AdminCardContainer xs={12} marginBottom={10}>
        <Row>
          <h4 style={{ marginBottom: 20 }}>Información de dirección</h4>
          <Col xs={12} sm={4} className="mb-3">
            <h6>Código postal</h6>
            {submitedData.zipCode}
          </Col>
          <Col xs={12} sm={4} className="mb-3">
            <h6>País</h6>
            {submitedData.country}
          </Col>
          <Col xs={12} sm={4} className="mb-3">
            <h6>Estado</h6>
            {submitedData.state}
          </Col>

          <Col xs={12} sm={4} className="mb-3">
            <h6>Ciudad</h6>
            {submitedData.city}
          </Col>
          <Col xs={12} sm={4} className="mb-3">
            <h6>Colonia</h6>
            {submitedData.suburb}
          </Col>
          <Col xs={12} sm={4} className="mb-3">
            <h6>Calle</h6>
            {submitedData.street}
          </Col>

          <Col xs={12} sm={4} className="mb-3">
            <h6>Número interior</h6>
            {submitedData.internalNumber == null
              ? "Sin número interno"
              : submitedData.internalNumber}
          </Col>
          <Col xs={12} sm={4} className="mb-3">
            <h6>Número exterior</h6>
            {submitedData.externalNumber}
          </Col>
        </Row>
      </AdminCardContainer>

      <AdminCardContainer xs={12} marginBottom={10}>
        <Row>
          <h4 style={{ marginBottom: 20 }}>Información de contacto</h4>
          <Col xs={12} md={6} className="mb-3">
            <h6>Correo electrónico</h6>
            {submitedData.email}
          </Col>
          <Col xs={12} sm={6} className="mb-3">
            <h6>Teléfono</h6>
            {submitedData.phone}
          </Col>
          <Col xs={12} sm={12} className="mb-3">
            <h6>Descripción</h6>
            {submitedData.description}
          </Col>
        </Row>
      </AdminCardContainer>

      <AdminCardContainer xs={12}>
        <Row>
          <h4 style={{ marginBottom: 20 }}>Información legal</h4>
          <Col xs={12} md={6} className="mb-3">
            <h6>Cédula fiscal</h6>
            {!("TAX_ID" in attachments) ? null : attachments.TAX_ID ==
              null ? null : (
              <AdminDownloadLink
                linkText="Descargar cédula fiscal"
                url={attachments.TAX_ID.downloadUrl}
                fileName={attachments.TAX_ID.originalFileName}
              />
            )}
          </Col>
          <Col xs={12} sm={6} className="mb-3">
            <h6>Acta constitutiva</h6>
            {!(
              "CONSTITUTIVE_ACT" in attachments
            ) ? null : attachments.CONSTITUTIVE_ACT == null ? null : (
              <AdminDownloadLink
                linkText="Descargar acta constitutiva"
                url={attachments.CONSTITUTIVE_ACT.downloadUrl}
                fileName={attachments.CONSTITUTIVE_ACT.originalFileName}
              />
            )}
          </Col>
          <Col xs={12} sm={12} className="mb-3">
            <h6>Estado de situación fiscal</h6>
            {!(
              "TAX_SITUATION_STATEMENT" in attachments
            ) ? null : attachments.TAX_SITUATION_STATEMENT == null ? null : (
              <AdminDownloadLink
                linkText="Descargar estado de situación fiscal"
                url={attachments.TAX_SITUATION_STATEMENT.downloadUrl}
                fileName={attachments.TAX_SITUATION_STATEMENT.originalFileName}
              />
            )}
          </Col>
        </Row>
      </AdminCardContainer>
    </Fragment>
  );
}
