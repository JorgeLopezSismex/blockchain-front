import { Form, Row } from "react-bootstrap";

import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import FormInputFile from "@/components/form/FormInputFile";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";
import FormInputButtonAddon from "@/components/form/FormInputButtonAddon";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";
import { apiFetch } from "@/helpers/api-fetch";
import FormSelect from "@/components/form/FormSelect";

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
}) {
  console.log(errors);
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
          disbaleButton={disableSearchZipCode}
          placeholder={"12345"}
          value={values.zipCode}
          errors={errors.zipCode}
          label={"Código postal"}
          handleChange={(event: any) => {
            let value = event.target.value;
            setFieldValue("zipCode", value);
            if (value == undefined || value == "" || value == null) {
              setSuburbOptions([]);
              setDisableSearchZipCode(true);
              console.log("Se limpia y se descantiva");

              return;
            }

            setDisableSearchZipCode(false);
            return;
          }}
          handleClick={() => getSuburbs(values.zipCode, setFieldValue)}
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

        <FormSelect
          disabled={disableSuburbs}
          label={"Colonia"}
          options={suburbOptions}
          defaultText="Selecciona una colonia"
          defaultValue={
            values.suburb == null
              ? null
              : { value: values.suburb, label: values.suburb }
          }
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
          md={6}
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

        <FormInputFile
          md={6}
          sm={12}
          name="taxId"
          controlId="taxId"
          value={values.taxId}
          errors={errors.taxId}
          label="Cedula fiscal"
          accept="application/pdf"
          setFieldValue={setFieldValue}
        />

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
          name="constitutiveAct"
          accept="application/pdf"
          label="Acta constitutiva"
          controlId="constitutiveAct"
          setFieldValue={setFieldValue}
          value={values.constitutiveAct}
          errors={errors.constitutiveAct}
        />

        <FormInputFile
          sm={12}
          md={6}
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
