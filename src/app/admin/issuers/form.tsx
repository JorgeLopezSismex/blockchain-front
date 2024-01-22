import { useState } from "react";

import { Form, Row } from "react-bootstrap";

import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import FormInputFile from "@/components/form/FormInputFile";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";
import FormInputButtonAddon from "@/components/form/FormInputButtonAddon";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";
import { apiFetch } from "@/helpers/api-fetch";
import FormSelect from "@/components/form/FormSelect";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";

import { getSuburbsOptionList } from "@/utils/select-options/suburbs";
import { getIssuerVerificationStatus } from "@/utils/select-options/issuerVerificationStatus";

export default function IssuersForm({
  values,
  errors,
  disbaleForm,
  handleSubmit,
  handleChange,
  setFieldValue,
  disableSearchZipCode,
  setDisableSearchZipCode,
  getSuburbs,
  suburbOptions,
  setSuburbOptions,
  disableSuburbs,
  setDisableSuburbs,
  countryKey,
  suburbsKey,
  setSuburbsKey,
}: {
  values: any;
  errors: any;
  disbaleForm: boolean;
  handleSubmit: any;
  handleChange: any;
  setFieldValue: any;
  disableSearchZipCode: boolean;
  setDisableSearchZipCode: any;
  getSuburbs: any;
  suburbOptions: any[];
  setSuburbOptions: any;
  disableSuburbs: boolean;
  setDisableSuburbs: any;
  countryKey: number;
  suburbsKey: number;
  setSuburbsKey: any;
}) {
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
        <FormInput
          md={12}
          sm={12}
          type="text"
          name="name"
          controlId="name"
          label="Nombre(s)"
          value={values.name}
          errors={errors.name}
          disabled={disbaleForm}
          handleChange={handleChange}
          placeholder="Nombre(s) del miembro"
        />

        <FormInput
          md={6}
          sm={12}
          type={"text"}
          name={"legalName"}
          label={"Razón social"}
          disabled={disbaleForm}
          controlId={"legalName"}
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
          btnId={"btnZipCode"}
          placeholder={"12345"}
          value={values.zipCode}
          errors={errors.zipCode}
          label={"Código postal"}
          disbaleButton={disableSearchZipCode}
          handleClick={() =>
            getSuburbsOptionList(
              values.zipCode,
              setDisableSuburbs,
              suburbsKey,
              setSuburbsKey,
              true
            )
          }
          handleChange={(event: any) => {
            let options: any[] = [];
            let value = event.target.value;

            setSuburbOptions(options);
            setFieldValue("zipCode", value);

            setFieldValue("country", "");
            setFieldValue("state", "");
            setFieldValue("city", "");

            if (value != undefined && value != "" && value != null) {
              setDisableSearchZipCode(false);
              // setDisableSuburbs(false);
              return;
            }

            setDisableSuburbs(true);
            setDisableSearchZipCode(true);
            return;
          }}
        />

        <FormInput
          key={countryKey}
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

        <FormAsyncSelect
          key={suburbsKey}
          md={6}
          sm={12}
          disabled={disableSuburbs}
          errors={null}
          name="suburb"
          label="Colonia"
          setFieldValue={setFieldValue}
          placeholder="Selecciona un estado de verificación"
          getOptions={async () => {
            let options = await getSuburbsOptionList(
              values.zipCode,
              setDisableSuburbs,
              suburbsKey,
              setSuburbsKey,
              false
            );

            console.log(options, "Estas son las opciones");

            if (options.length > 0) {
              console.log("Tiene opciones");
              setDisableSuburbs(false);
              // setSuburbsKey(suburbsKey + 1);
            }
          }}
        />

        <FormInput
          md={12}
          sm={12}
          type={"text"}
          name={"street"}
          label={"Calle"}
          controlId={"street"}
          placeholder={"Calle"}
          value={values.street}
          errors={errors.street}
          disabled={disbaleForm}
          handleChange={handleChange}
        />

        <FormInput
          md={6}
          sm={12}
          type={"text"}
          placeholder={"3342"}
          disabled={disbaleForm}
          name={"internalNumber"}
          label={"Número interior"}
          handleChange={handleChange}
          controlId={"internalNumber"}
          value={values.internalNumber}
          errors={errors.internalNumber}
        />

        <FormInput
          md={6}
          sm={12}
          type={"text"}
          placeholder={"9831"}
          disabled={disbaleForm}
          name={"externalNumber"}
          label={"Número exterior"}
          handleChange={handleChange}
          controlId={"externalNumber"}
          value={values.externalNumber}
          errors={errors.externalNumber}
        />

        <FormInput
          md={12}
          sm={12}
          type={"email"}
          name={"email"}
          disabled={true}
          controlId={"email"}
          value={values.email}
          errors={errors.email}
          handleChange={handleChange}
          label={"Correo electrónico"}
          placeholder={"ejemplo@mail.com"}
        />

        <FormInput
          md={6}
          sm={12}
          type="text"
          name="phone"
          controlId="phone"
          value={values.phone}
          errors={errors.phone}
          disabled={disbaleForm}
          placeholder="81 3425 3662"
          handleChange={handleChange}
          label="Teléfono de la empresa."
        />

        <FormInput
          md={6}
          sm={12}
          name={"rfc"}
          label={"RFC"}
          type={"text"}
          controlId={"rfc"}
          value={values.rfc}
          errors={errors.rfc}
          disabled={disbaleForm}
          handleChange={handleChange}
          placeholder={"RFC de la empresa."}
        />

        {/* <FormInputFile
          md={6}
          sm={12}
          name="taxId"
          controlId="taxId"
          value={values.taxId}
          errors={errors.taxId}
          label="Cédula fiscal"
          accept="application/pdf"
          setFieldValue={setFieldValue}
          required={true}
        /> */}

        <FormTextarea
          md={12}
          sm={12}
          id={"description"}
          name={"description"}
          label={"Descripción"}
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
          required={true}
          name="constitutiveAct"
          accept="application/pdf"
          label="Acta constitutiva"
          controlId="constitutiveAct"
          setFieldValue={setFieldValue}
          value={values.constitutiveAct}
          errors={errors.constitutiveAct}
        />

        <FormInputFile
          md={6}
          sm={12}
          required={true}
          accept="application/pdf"
          name="taxSituationStatement"
          setFieldValue={setFieldValue}
          controlId="taxSituationStatement"
          label="Estado de situación fiscal."
          value={values.taxSituationStatement}
          errors={errors.taxSituationStatement}
        />
        
        <FormInputFile
          md={6}
          sm={12}
          required={true}
          accept="application/pdf"
          name="taxSituationStatement"
          setFieldValue={setFieldValue}
          controlId="taxSituationStatement"
          label="Estado de situación fiscal."
          value={values.taxSituationStatement}
          errors={errors.taxSituationStatement}
        />
      </Row>

      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        {disbaleForm ? null : <AdminFormSubmitButton loading={false} />}
        <AdminFormBackButton loading={false} backUrl="../../admin/profile" />
      </div>
    </Form>
  );
}

{
  /* <FormSelect
              md={6}
              sm={12}
              name={"suburb"}
              disabled={false}
              options={suburbs}
              label={"Colonia"}
              defaultText={"fdfsd"}
            /> */
}
