"use client";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Formik } from "formik";

import AdminPageHeader from "@/components/admin/AdminPageHeader";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import { createCertificate } from "@/validations/certificates-validation";
import CertificatesForm from "../form";
import { getTemplatesOptionList } from "@/utils/select-options/templates";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CertificateBatchForm from "../batchForm";
import { error } from "console";
import { apiFetch } from "@/helpers/api-fetch";

export default function CreateCertificate() {
  const [loadingScreen, setLoadingScreen] = useState(true);

  const [initialValues, setInitialValues] = useState({});
  const [batchInitialValues, setBatchInitialValues] = useState({});

  const createCertificate = async (values: any) => {};

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "CERTIFICATES_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        if (!res.data.CREATE_CERTIFICATE) {
          return null;
        }

        setInitialValues({
          templateId: null,
          roster: null,
        });

        setBatchInitialValues({
          templateId: null,
          roster: null,
          signatureDate: null,
        });
      }
    });
  });

  return (
    <Fragment>
      <AdminPageHeader title="Crear certificado">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../admin/certificates"}>
            Certificados
          </Link>
          <Breadcrumb.Item active>Crear</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        <Tabs
          className="mb-3"
          id="invitations-tab"
          defaultActiveKey="single-create"
        >
          <Tab eventKey="single-create" title="Certificado individual">
            <Formik
              onSubmit={createCertificate}
              initialValues={initialValues}
              validationSchema={createCertificate}
            >
              {({
                values,
                errors,
                handleSubmit,
                handleChange,
                setFieldValue,
              }) => (
                <CertificatesForm
                  values={values}
                  errors={errors}
                  loadingForm={loadingScreen}
                  handleSubmit={handleSubmit}
                  setFieldValue={setFieldValue}
                  getTemplates={getTemplatesOptionList}
                />
              )}
            </Formik>
          </Tab>
          <Tab eventKey="batch-create" title="Certificados por lote">
            <Formik
              onSubmit={createCertificate}
              initialValues={{
                templateId: null,
                roster: null,
                signatureDate: null,
              }}
              validationSchema={createCertificate}
            >
              {({
                values,
                errors,
                handleSubmit,
                handleChange,
                setFieldValue,
              }) => (
                <CertificateBatchForm
                  values={values}
                  errors={errors}
                  loadingForm={loadingScreen}
                  handleSubmit={handleSubmit}
                  setFieldValue={setFieldValue}
                  getTemplates={getTemplatesOptionList}
                />
              )}
            </Formik>
          </Tab>
        </Tabs>
      </AdminCardContainer>
    </Fragment>
  );
}

{
  /* <p>
          Aquí deberia mostrar las plantillas disponilbes para ser
          seleccionadas.
        </p>
        <p>El input para el archivo con los receptores.</p>
        <p>Y el preview del certificado.</p> */
}
