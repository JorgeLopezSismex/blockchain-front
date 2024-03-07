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
import Breadcrumb from "react-bootstrap/Breadcrumb";

import AdminTable from "@/components/admin/AdminTable";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";
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

export default function CertificateList() {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingCertificates, setLoadingCertificates] = useState(true);
  const [loadingVerification, setLoadingVerification] = useState(true);

  const [steps, setSteps] = useState([] as any);
  const [certificate, setCertificate] = useState({} as any);
  const [verification, setVerification] = useState({} as any);

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

  const handleClose = () => setShowVerifyModal(false);

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

  const getCertificateData = async (path: String) => {
    setLoadingVerification(true);
    setShowVerifyModal(true);

    fetch("http://68.178.207.49:8113/certificate-verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        certificatePath:
          "https://raw.githubusercontent.com/JorgeLopezSismex/test-blockchain/main/certificateExterno.json",
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
              getCertificateData,
              setSelectedCertificate,
              setShowVerifyModal
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

      <ValidationModal
        steps={steps}
        show={showVerifyModal}
        handleClose={handleClose}
        certificate={certificate}
        verification={verification}
        loading={loadingVerification}
      />

      {/* <AdminModalJorge
        title="Verificar"
        showButtons={true}
        modalLoading={false}
        show={showVerifyModal}
        handleClose={() => setShowVerifyModal(false)}
        handleSubmit={() => setShowVerifyModal(false)}
      >
        <CertificateVerifier
          steps={steps}
          loading={loadingVerification}
          certificate={certificate}
          verification={verification}
        />
      </AdminModalJorge> */}
    </Fragment>
  );
}

/*

  const verifyCertificate = async () => {
    setLoadingCertificateData(true);
    setLoadingVerification(true);
    fetch("http://68.178.207.49:8113/certificate-verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        certificatePath:
          "https://raw.githubusercontent.com/JorgeLopezSismex/test-blockchain/main/certificateExterno.json",
      }),
    })
      .then((response) => {
        console.log("Esto es el response", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        if (!json.success) {
          return null;
        }

        setCertificate(json.data.certificate);
        setSteps(json.data.steps);
        setVerification(json.data.verification);

        setLoadingVerification(false);
        setLoadingCertificateData(false);
        setCertificateData(json.data.certificate);
        setVerificationData(json.data.verification);

        // setSteps([]);
        const steps = json.data.steps;
      });
  };


*/
