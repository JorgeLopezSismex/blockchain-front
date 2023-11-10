"use client";

import Link from "next/link";
import * as formik from "formik";
import { Fragment, useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import FormTextarea from "@/components/form/FormTextarea";
import FormInputFile from "@/components/form/FormInputFile";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import { IssuerData } from "@/types/issuers";

import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminAlert from "@/components/admin/AdminAlert";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import FormInputButtonAddon from "@/components/form/FormInputButtonAddon";
import { apiFetch } from "@/helpers/api-fetch";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

export default function Verification() {
  const [loadingData, setLoadingData] = useState(true);
  const [initialValues, setInitialValues] = useState({});
  const [issuer, setIssuer] = useState({} as IssuerData);

  const [alertTitle, setAlertTitle] = useState("");
  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const init = {
    name: "",
    legalName: "",
    zipCode: "",
    country: "",
    state: "",
    city: "",
    street: "",
    internalNumber: "",
    externalNumber: "",
    email: "",
    phone: "",
    rfc: "",
    taxId: "",
    description: "",
    constitutiveAct: "",
    taxSituationStatement: "",
  };

  useEffect(() => {
    getIssuer();
  }, []);

  const getIssuer = async () => {
    setLoadingData(true);
    const res = await apiFetch("issuers/3");

    console.log(res);

    if (res.success) {
      setLoadingData(false);
      setIssuer(res.data);

      const issuer: IssuerData = res.data;
      // El emisor fue verificado.
      if(issuer.validatedAt != null){

      }

      // El emisor fue rechazado.
      if(issuer.rejectedAt != null){

      }


      // Aún no envia los datos de verificación por primera vez.
      if (issuer.lastValidationSubmit == null) {
      }

      

      
      
      // Envió los datos de verificación y esta pendiente de respuesta.

      if (issuer.rejectedAt == null) {
      }
    }
  };

  const { Formik } = formik;

  return (
    <Fragment>
      <AdminPageHeader title="Verificación">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../admin/profile"}>
            Perfil
          </Link>
          <Breadcrumb.Item active>Verificación</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      {issuer.rejectedAt == null ? (
        <AdminAlert
          variant={"success"}
          title={"¡Verifiación completada!"}
          text={
            "Para poder emitir certificados necesitas estar verificado como emisor. " +
            "Para ello, completa el siguiente formulario y da clic en el botón Guardar " +
            "para solicitar una verificación por parte de la administración del sistema. " +
            "Una vez que tengamos una respuesta reciviras un correo electrónico."
          }
        />
      ) : (
        <p>HOLA</p>
      )}

      {/* {data.validatedAt != null ? (
        <AdminAlert
          variant={"success"}
          title={"¡Verifiación completada!"}
          text={
            "Para poder emitir certificados necesitas estar verificado como emisor. " +
            "Para ello, completa el siguiente formulario y da clic en el botón Guardar " +
            "para solicitar una verificación por parte de la administración del sistema. " +
            "Una vez que tengamos una respuesta reciviras un correo electrónico."
          }
        />
      ) : (
        <AdminAlert
          variant={"primary"}
          title={"¿Cómo funciona el proceso de verificación?"}
          text={
            "Para poder emitir certificados necesitas estar verificado como emisor. " +
            "Para ello, completa el siguiente formulario y da clic en el botón Guardar " +
            "para solicitar una verificación por parte de la administración del sistema. " +
            "Una vez que tengamos una respuesta reciviras un correo electrónico."
          }
        />
      )} */}

      <AdminCardContainer xs={12}>
        {loadingData ? (
          <AdminTableSpinner />
        ) : (
          <Formik onSubmit={() => {}} initialValues={init}>
            {({
              handleSubmit,
              handleChange,
              setFieldValue,
              values,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <FormInput
                    md={12}
                    sm={12}
                    type="text"
                    label="Nombre"
                    disabled={false}
                    name="legal_name"
                    value={values.name}
                    errors={errors.name}
                    controlId="legal_name"
                    handleChange={handleChange}
                    placeholder="Nombre de la empresa"
                  />

                  <FormInput
                    md={6}
                    sm={12}
                    type={"text"}
                    disabled={false}
                    name={"legal_name"}
                    label={"Razón social"}
                    controlId={"legal_name"}
                    value={values.legalName}
                    errors={errors.legalName}
                    handleChange={handleChange}
                    placeholder={"Razón social de la empresa"}
                  />

                  <FormInputButtonAddon
                    md={6}
                    sm={12}
                    id={"zipCode"}
                    name={"zipCode"}
                    btnText={"Buscar"}
                    placeholder={"12345"}
                    btnId={"btnZipCode"}
                    value={values.zipCode}
                    errors={errors.zipCode}
                    label={"Código postal"}
                    handleChange={handleChange}
                    handleClick={() => alert("Buscar zip code")}
                  />

                  <FormInput
                    md={6}
                    sm={12}
                    type={"text"}
                    label={"País"}
                    disabled={true}
                    name={"country"}
                    placeholder={"País"}
                    controlId={"country"}
                    value={values.country}
                    errors={errors.country}
                    handleChange={handleChange}
                  />

                  <FormInput
                    md={6}
                    sm={12}
                    type={"text"}
                    name={"state"}
                    disabled={true}
                    label={"Estado"}
                    controlId={"state"}
                    value={values.state}
                    errors={errors.state}
                    placeholder={"Estado"}
                    handleChange={handleChange}
                  />

                  <FormInput
                    md={6}
                    sm={12}
                    type={"text"}
                    name={"city"}
                    disabled={true}
                    label={"Ciudad"}
                    controlId={"city"}
                    value={values.city}
                    errors={errors.city}
                    placeholder={"Ciudad"}
                    handleChange={handleChange}
                  />

                  {/* <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Colonia"}
                  defaultText={"fdfsd"}
                /> */}

                  <FormInput
                    md={12}
                    sm={12}
                    type={"text"}
                    name={"street"}
                    value={values.street}
                    errors={errors.street}
                    label={"Calle"}
                    controlId={"street"}
                    handleChange={handleChange}
                    placeholder={"Calle"}
                    disabled={false}
                  />

                  <FormInput
                    md={6}
                    sm={12}
                    type={"text"}
                    name={"externalNumber"}
                    value={values.externalNumber}
                    errors={errors.externalNumber}
                    label={"Número exterior"}
                    controlId={"externalNumber"}
                    handleChange={handleChange}
                    placeholder={"123"}
                    disabled={false}
                  />

                  <FormInput
                    md={6}
                    sm={12}
                    type={"text"}
                    name={"internalNumber"}
                    value={values.internalNumber}
                    errors={errors.internalNumber}
                    label={"Número interior"}
                    controlId={"internalNumber"}
                    handleChange={handleChange}
                    placeholder={"321"}
                    disabled={false}
                  />

                  <FormInput
                    md={6}
                    sm={12}
                    type={"email"}
                    name={"email"}
                    value={values.email}
                    errors={errors.email}
                    label={"Correo electrónico"}
                    controlId={"email"}
                    handleChange={handleChange}
                    placeholder={"example@mail.com"}
                    disabled={false}
                  />

                  <FormInput
                    md={6}
                    sm={12}
                    type="text"
                    name="phone"
                    label="Teléfono de la empresa."
                    value={values.phone}
                    handleChange={handleChange}
                    errors={errors.phone}
                    controlId="phone"
                    placeholder="00 0000 0000"
                    disabled={false}
                  />

                  <FormInput
                    md={6}
                    sm={12}
                    type={"text"}
                    name={"rfc"}
                    value={values.rfc}
                    errors={errors.rfc}
                    label={"RFC"}
                    controlId={"rfc"}
                    handleChange={handleChange}
                    placeholder={"RFC de la empresa."}
                    disabled={false}
                  />

                  <FormInputFile
                    sm={12}
                    md={6}
                    accept="*"
                    name="tax_id"
                    controlId="tax_id"
                    label="Cedula fiscal"
                    value={values.taxId}
                    errors={errors.taxId}
                    setFieldValue={setFieldValue}
                  />

                  <FormTextarea
                    md={12}
                    sm={12}
                    label={"Descripción"}
                    id={"description"}
                    name={"description"}
                    value={values.description}
                    errors={errors.description}
                    handleChange={handleChange}
                    placeholder={
                      "Breve descripción de la actividad comercial de la empresa."
                    }
                  />

                  <FormInputFile
                    md={6}
                    sm={12}
                    accept="*"
                    name="constitutive_act"
                    label="Acta constitutiva."
                    controlId="constitutive_act"
                    value={values.constitutiveAct}
                    errors={errors.constitutiveAct}
                    setFieldValue={setFieldValue}
                  />

                  <FormInputFile
                    sm={12}
                    md={6}
                    accept="*"
                    name="tax_situation_statement"
                    controlId="tax_situation_statement"
                    label="Estado de situación fiscal."
                    value={values.taxSituationStatement}
                    errors={errors.taxSituationStatement}
                    setFieldValue={setFieldValue}
                  />
                </Row>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <Button type="submit" variant="primary">
                    Guardar
                  </Button>
                  <Button
                    variant="outline-secondary"
                    style={{ marginInline: 10 }}
                  >
                    Atrás
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
