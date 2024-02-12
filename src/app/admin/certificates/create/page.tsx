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

export default function CreateCertificate() {
  const [initialValues, setInitialValues] = useState({});
  const [loadingScreen, setLoadingScreen] = useState(true);

  const createCertificate = async (values: any) => {};

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
        <Formik
          onSubmit={createCertificate}
          initialValues={initialValues}
          validationSchema={createCertificate}
        >
          {({ values, errors, handleSubmit, handleChange, setFieldValue }) => (
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
