"use client";

import { Fragment } from "react";
import * as formik from "formik";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import FormTextarea from "@/components/form/FormTextarea";
import FormInputFile from "@/components/form/FormInputFile";
import CardContainer from "@/components/admin/CardContainer";

import FormInputButtonAddon from "@/components/form/FormInputButtonAddon";

export default function Verification() {
  const { Formik } = formik;

  const suburbs = [
    { value: "colinia1", label: "Colonia 1" },
    { value: "colonia2", label: "Colonia 2" },
    { value: "colonia3", label: "Colonia 3" },
  ];

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

  return (
    <Fragment>
      <CardContainer>
        <Formik onSubmit={() => {}} initialValues={init}>
          {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <FormInput
                  md={12}
                  sm={12}
                  type={"text"}
                  disabled={false}
                  label={"Nombre"}
                  name={"legal_name"}
                  value={values.name}
                  errors={errors.name}
                  controlId={"legal_name"}
                  handleChange={handleChange}
                  placeholder={"Razón social de la empresa"}
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
                  placeholder={"Páis"}
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

                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Colonia"}
                  defaultText={"fdfsd"}
                />

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
                  label={"Correo electronico"}
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
                  label={"Descripcion"}
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
      </CardContainer>
    </Fragment>
  );
}
