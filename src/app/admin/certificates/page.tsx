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
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import AdminTable from "@/components/admin/AdminTable";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";
import AdminModalJorge from "@/components/admin/AdminModalJorge";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";
import AdminVerificationStep from "@/components/admin/AdminVerificationStep";
import AdminVerificationAlert from "@/components/admin/AdminVerificationAlert";

import { apiFetch } from "@/helpers/api-fetch";
import { CertificateData } from "@/types/certificates";
import { CertificatesPermissionsData } from "@/types/certificates";
import certificatesTableColums from "@/table-columns/certificates";
import { getIssuerOptionList } from "@/utils/select-options/issuers";
import { getTemplatesOptionList } from "@/utils/select-options/templates";

export default function CertificateList() {
  // const {
  //   Certificate,
  // } = require("@blockcerts/cert-verifier-js/dist/verifier-node/index");
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingCertificates, setLoadingCertificates] = useState(true);
  const [loadingVerification, setLoadingVerification] = useState(false);
  const [loadingCertificateData, setLoadingCertificateData] = useState(false);

  const [steps, setSteps] = useState([] as any);
  const [certificates, setCertificates] = useState([]);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const [permissions, setPermissions] = useState(
    {} as CertificatesPermissionsData
  );
  const [selectedCertificate, setSelectedCertificate] = useState(
    {} as CertificateData
  );

  const [certificateData, setCertificateData] = useState({} as Certificate);
  const [verificationData, setVerificationData] = useState({} as any);

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
    if (values.issuerId != null) {
      certificatesParams.append("issuerId", values.issuerId);
    }

    if (values.templateId != null) {
      certificatesParams.append("templateId", values.templateId);
    }

    if (values.createdAtFrom != null) {
      certificatesParams.append("createdAtFrom", values.createdAtFrom);
    }

    if (values.createdAtTo != null) {
      certificatesParams.append("createdAtTo", values.createdAtTo);
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

  const verifyCertificate = async () => {
    // setLoadingCertificateData(true);
    // setLoadingVerification(true);
    // fetch("http://localhost:3000/testing/certificate.json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then(async (data) => {
    //     let certificate = new Certificate(data, { locale: "es-ES" });

    //     await certificate.init();
    //     setSteps([]);

    //     const verification = await certificate.verify(
    //       ({
    //         code,
    //         label,
    //         status,
    //         errorMessage,
    //       }: {
    //         code: any;
    //         label: any;
    //         status: any;
    //         errorMessage: any;
    //       }) => {
    //         console.log("Sub step update:", code, label, status, errorMessage);
    //         setSteps((steps: any) => [
    //           ...steps,
    //           {
    //             code: code,
    //             label: label,
    //             status: status,
    //             errorMessage: errorMessage,
    //           },
    //         ]);
    //       }
    //     );
    //     setLoadingVerification(false);
    //     setLoadingCertificateData(false);
    //     setCertificateData(certificate);
    //     setVerificationData(verification);
    //   });
  };

  return loadingScreen ? (
    <AdminTableSpinner></AdminTableSpinner>
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
            issuerId: null,
            templateId: null,
            createdAtFrom: null,
            createdAtTo: null,
          }}
        >
          {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <FormAsyncSelect
                  md={6}
                  sm={12}
                  errors={null}
                  label="Emisor"
                  name="issuerId"
                  disabled={false}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un emisor"
                  getOptions={() => getIssuerOptionList()}
                />

                <FormAsyncSelect
                  md={6}
                  sm={12}
                  errors={null}
                  disabled={false}
                  label="Plantilla"
                  name="templateId"
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una plantilla"
                  getOptions={() => getTemplatesOptionList()}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="createdAtFrom"
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  maxDate={moment(values.createdAtTo)}
                  label="Fecha de creación del certificado mínima"
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="createdAtTo"
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  minDate={moment(values.createdAtFrom)}
                  label="Fecha de creación del certificado máxima"
                />

                <div className="d-flex justify-content-end">
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
              verifyCertificate,
              setSelectedCertificate,
              setShowVerifyModal
            )}
          >
            {!permissions.CREATE_CERTIFICATE ? null : (
              <Link href={"/admin/certificates/create"}>
                {/* <Button variant="primary">Nuevo</Button> */}
              </Link>
            )}
          </AdminTable>
        )}
      </AdminCardContainer>

      <AdminModalJorge
        title="Verificar"
        showButtons={true}
        modalLoading={false}
        show={showVerifyModal}
        handleClose={() => setShowVerifyModal(false)}
        handleSubmit={() => setShowVerifyModal(false)}
      >
        <Fragment>
          {Object.keys(certificateData).length === 0 ? (
            <AdminTableSpinner />
          ) : (
            <Fragment>
              <h5>
                Emitido en{" "}
                {moment(certificateData.issuedOn).format("MMMM D, YYYY")} por{" "}
                {certificateData.issuer.name}
              </h5>

              {steps.map((step: any, index: number) =>
                step.status == "starting" ? null : step.status == "failure" ? (
                  <AdminVerificationStep
                    key={index}
                    color="red"
                    label={step.label}
                    icon={faCircleXmark}
                  />
                ) : step.status == "success" ? (
                  <AdminVerificationStep
                    key={index}
                    color="green"
                    label={step.label}
                    icon={faCircleCheck}
                  />
                ) : null
              )}

              {Object.keys(verificationData).length === 0 ? (
                <Fragment>
                  <Row style={{ marginTop: 30, marginBottom: 30 }}>
                    <Col xs={12} className="d-flex justify-content-center">
                      <AdminTableSpinner />
                    </Col>
                    <Col
                      xs={12}
                      style={{ marginTop: 10 }}
                      className="d-flex justify-content-center"
                    >
                      <h5>Cargando...</h5>
                    </Col>
                  </Row>
                </Fragment>
              ) : loadingVerification ? (
                <Fragment>
                  <Row style={{ marginTop: 30, marginBottom: 30 }}>
                    <Col xs={12} className="d-flex justify-content-center">
                      <AdminTableSpinner />
                    </Col>
                    <Col
                      xs={12}
                      style={{ marginTop: 10 }}
                      className="d-flex justify-content-center"
                    >
                      <h5>Verificando certificado...</h5>
                    </Col>
                  </Row>
                </Fragment>
              ) : verificationData.status == "failure" ? (
                <AdminVerificationAlert
                  variant="danger"
                  description={verificationData.message}
                  message="Error al verificar certificado"
                />
              ) : (
                <AdminVerificationAlert
                  variant="success"
                  message="Certificado verificado"
                  description="Este es un certificado válido."
                />
              )}
            </Fragment>
          )}
        </Fragment>
      </AdminModalJorge>
    </Fragment>
  );
}
