"use client";

import moment from "moment";
import Link from "next/link";
import { Formik } from "formik";
import { Fragment, useState, useEffect } from "react";
// import { Certificate, VerificationSubstep } from "@blockcerts/cert-verifier-js";
import { Certificate } from "@blockcerts/cert-verifier-js";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { InputGroup } from "react-bootstrap";

import AdminTable from "@/components/admin/AdminTable";
import ActionToast from "@/components/main/ActionToast";
import FilterDatePicker from "@/components/form/FilterDatePicker";
import FilterAsyncSelect from "@/components/form/FilterAsyncSelect";
import AdminModalJorge from "@/components/admin/AdminModalJorge";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";
import ValidationModal from "@/components/certificate/validation-modal";

import { apiFetch } from "@/helpers/api-fetch";
import { CertificateData } from "@/types/certificates";
import { CertificatesPermissionsData } from "@/types/certificates";
import certificatesTableColums from "@/table-columns/certificates";
import { getIssuerOptionList } from "@/utils/select-options/issuers";
import { getTemplatesOptionList } from "@/utils/select-options/templates";
import CertificateVerifier from "@/components/admin/AdminCertificateVerifier";
import ShareModal from "@/components/admin/AdminCertificateShare";
import FormInputButtonAddon from "@/components/form/FormInputButtonAddon";
import AuthPasswordInput from "@/components/auth/AuthPasswordInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function CertificateList() {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingCertificates, setLoadingCertificates] = useState(true);
  const [loadingVerification, setLoadingVerification] = useState(true);

  const [steps, setSteps] = useState([] as any);
  const [certificate, setCertificate] = useState({} as any);
  const [verification, setVerification] = useState({} as any);

  const [certificates, setCertificates] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const [verificationLink, setVerificationLink] = useState("123");

  const [permissions, setPermissions] = useState(
    {} as CertificatesPermissionsData
  );
  const [selectedCertificate, setSelectedCertificate] = useState(
    {} as CertificateData
  );

  const [certificateData, setCertificateData] = useState({} as Certificate);
  const [verificationData, setVerificationData] = useState({} as any);

  const handleClose = () => setShowVerifyModal(false);
  const handleShareClose = () => setShowShareModal(false);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "CERTIFICATES_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (!res.success) {
        return alert("Ocurrió un error.");
      }

      setPermissions(res.data);
      if (!res.data.LIST_CERTIFICATE) {
        return alert("No tienes permisos para entrar a esta pantalla.");
      }

      getCertificates();
    });
  }, []);

  const getCertificates = async () => {
    apiFetch("certificates").then((res) => {
      setLoadingCertificates(false);
      console.log("estos son los certificados", res);
      if (!res.success) {
        alert("Ocurrió un error al cargar los certificados");
        return;
      }

      setCertificates(res.data);
      setLoadingCertificates(false);
      setLoadingScreen(false);
    });
  };

  const getFilteredCertificates = async (values: any) => {
    const certificatesParams = new URLSearchParams();

    const filters = JSON.parse(JSON.stringify(values), (key, value) => {
      return value === "" ? null : value;
    });

    if (filters.issuerId != null) {
      certificatesParams.append("issuerId", filters.issuerId);
    }

    if (filters.templateId != null) {
      certificatesParams.append("templateId", filters.templateId);
    }

    if (values.createdAtFrom != null) {
      const date = moment(filters.createdAtFrom, "DD/MM/YYYY");

      const formattedDate = date.toISOString();
      certificatesParams.append("createdAtFrom", formattedDate);
    }

    if (values.createdAtTo != null) {
      const date = moment(filters.createdAtTo, "DD/MM/YYYY");

      const formattedDate = date.toISOString();
      certificatesParams.append("createdAtTo", formattedDate);
    }

    setLoadingCertificates(true);
    apiFetch(`certificates?${certificatesParams.toString()}`).then((res) => {
      if (res.success) {
        setCertificates(res.data);
        setLoadingScreen(false);
        setLoadingCertificates(false);
      }
    });
  };

  const getCertificateData = async (path: String) => {
    setLoadingVerification(true);
    setShowVerifyModal(true);

    fetch("http://68.178.207.49:8113/certificate-verification", {
      method: "POST",
      headers: {
        "Accept-Language": "es-MX",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        certificatePath: path,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        if (!json.success) {
          return null;
        }

        setSteps(json.data.steps);
        setCertificate(json.data.certificate);
        setVerification(json.data.verification);

        setLoadingVerification(false);
      });
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Certificados">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Certificados</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>
      <AdminFilterContainer>
        <Formik
          onSubmit={getFilteredCertificates}
          initialValues={{
            issuerId: "",
            templateId: "",
            createdAtFrom: "",
            createdAtTo: "",
          }}
        >
          {({
            values,
            errors,
            resetForm,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <FilterAsyncSelect
                  md={6}
                  sm={12}
                  errors={null}
                  label="Emisor"
                  name="issuerId"
                  disabled={false}
                  value={values.issuerId}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un emisor"
                  getOptions={() => getIssuerOptionList()}
                />

                <FilterAsyncSelect
                  md={6}
                  sm={12}
                  errors={null}
                  disabled={false}
                  label="Plantilla"
                  name="templateId"
                  value={values.templateId}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una plantilla"
                  getOptions={() => getTemplatesOptionList()}
                />

                <FilterDatePicker
                  md={6}
                  sm={12}
                  name="createdAtFrom"
                  value={values.createdAtFrom}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  maxDate={moment(values.createdAtTo)}
                  label="Fecha de creación del certificado mínima"
                />

                <FilterDatePicker
                  md={6}
                  sm={12}
                  name="createdAtTo"
                  value={values.createdAtTo}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  minDate={moment(values.createdAtFrom)}
                  label="Fecha de creación del certificado máxima"
                />

                <div className="d-flex justify-content-end">
                  <Button
                    variant="outline-secondary"
                    style={{ marginRight: 10 }}
                    onClick={() => {
                      resetForm({
                        values: {
                          issuerId: "",
                          templateId: "",
                          createdAtFrom: "",
                          createdAtTo: "",
                        },
                      });
                    }}
                  >
                    Limpiar
                  </Button>

                  <AdminFormSubmitButton
                    label="Filtrar"
                    loading={loadingCertificates}
                  />
                </div>
              </Row>
            </Form>
          )}
        </Formik>
      </AdminFilterContainer>
      <AdminCardContainer xs={12}>
        {loadingCertificates ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable
            defaultData={certificates}
            columns={certificatesTableColums(
              permissions,
              getCertificateData,
              setSelectedCertificate,
              setShowDetailsModal,
              setShowVerifyModal,
              setShowShareModal,
              setVerificationLink,
              setShowToast,
              setToastTitle,
              setToastMessage,
              setToastVariant
            )}
          >
            {!permissions.CREATE_CERTIFICATE ? null : (
              <Link href={"/admin/certificates/create"}>
                <Button variant="primary">Nuevo</Button>
              </Link>
            )}
          </AdminTable>
        )}
      </AdminCardContainer>

      <AdminModalJorge
        size="lg"
        modalLoading={false}
        show={showDetailsModal}
        title="Detalles del certificado"
        handleSubmit={() => setShowDetailsModal(false)}
        handleClose={() => setShowDetailsModal(false)}
      >
        <Container>
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <h6>
                <b>Emisor</b>
              </h6>
              {selectedCertificate.issuerName}
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <h6>
                <b>Destinatario</b>
              </h6>
              {selectedCertificate.userEmail}
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <h6>
                <b>Plantilla</b>
              </h6>
              {selectedCertificate.templateName}
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <h6>
                <b>Fecha-Hora de creación</b>
              </h6>
              {moment(selectedCertificate.createdAt).format(
                "DD/MM/YYYY hh:mm:ss"
              )}
            </Col>

            <Col xs={12} md={12} className="mb-3">
              <h6>
                <b>Id de verificación</b>
              </h6>
              {selectedCertificate.verificationId}
            </Col>

            <Col xs={12} md={12} className="mb-3">
              <h6>
                <b>Hash de transacción</b>
              </h6>
              {selectedCertificate.transactionHash}
            </Col>

            <Col xs={12} md={12} className="mb-3">
              <h6>
                <b>Enlace al archivo .json</b>
              </h6>
              <a target="_blank" href={selectedCertificate.jsonBody}>
                {selectedCertificate.jsonBody}
              </a>
            </Col>
          </Row>
        </Container>
      </AdminModalJorge>

      <ValidationModal
        steps={steps}
        show={showVerifyModal}
        handleClose={handleClose}
        certificate={certificate}
        verification={verification}
        loading={loadingVerification}
      />

      <AdminModalJorge
        size="lg"
        showButtons={false}
        modalLoading={false}
        show={showShareModal}
        title="Compartir certificado"
        handleSubmit={() => setShowShareModal(false)}
        handleClose={() => setShowShareModal(false)}
      >
        <Container>
          <Row>
            <Col xs={12} className="mb-3">
              <Form.Group as={Col} md="12" controlId="sf" className="mb-1">
                <Form.Label>Enlace de verificación</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    readOnly
                    disabled
                    name=""
                    type="text"
                    value={verificationLink}
                    placeholder="Enlace de verificación"
                    onChange={() => null}
                  />

                  <Button
                    variant="primary"
                    id="verification-link-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(verificationLink);
                      setShowShareModal(false);

                      setToastVariant("success");
                      setToastTitle("Certificados");
                      setToastMessage(
                        "Enlace de verificación copiado al portapales."
                      );
                      setShowToast(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </Button>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </AdminModalJorge>

      <ActionToast
        delay={3000}
        show={showToast}
        title={toastTitle}
        message={toastMessage}
        variant={toastVariant}
        onClose={() => setShowToast(false)}
      />
    </Fragment>
  );
}
