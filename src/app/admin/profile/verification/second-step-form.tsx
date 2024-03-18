import * as formik from "formik";
import FormInput from "@/components/form/FormInput";
import { Form, Row, Col } from "react-bootstrap";
import FormTextarea from "@/components/form/FormTextarea";
import FormInputFile from "@/components/form/FormInputFile";

import AdminFormBackButton from "@/components/admin/AdminFormBackButton";
import FormInputButtonAddon from "@/components/form/FormInputButtonAddon";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

import Select from "react-select";
import { apiFetch } from "@/helpers/api-fetch";
import { verificationSecondsStepSchema } from "@/validations/verification-validation";

export default function VerificationSecondStepForm({
  loadingForm,
  setLoadingForm,
  initialValues,
  loadingSuburbs,
  suburbs,
  disbaleForm,
  disableSearchZipCode,
  setDisableSuburbs,
  setDisableSearchZipCode,
  setSuburbs,
  setLoadingSuburbs,
  setSuburbOptions,
  getSuburbsOptionList,
  setShowToast,
  setToastTitle,
  setToastVariant,
  setToastMessage,
  setShowModal,
  setModalTitle,
  setModalText,
}: {
  loadingForm: boolean;
  setLoadingForm: any;
  initialValues: any;
  loadingSuburbs: boolean;
  suburbs: any;
  disbaleForm: any;
  disableSearchZipCode: boolean;
  setDisableSuburbs: any;
  setDisableSearchZipCode: any;
  setSuburbs: any;
  setLoadingSuburbs: any;
  setSuburbOptions: any;
  getSuburbsOptionList: any;
  setShowToast: any;
  setToastTitle: any;
  setToastVariant: any;
  setToastMessage: any;
  setShowModal: any;
  setModalTitle: any;
  setModalText: any;
}) {
  const { Formik } = formik;

  const submitSecondStep = async (values: any) => {
    setLoadingForm(true);
    apiFetch("verification", "PUT", values, true).then((res) => {
      console.log("Esta es la respuesta de la verificacion", res);
      if (!res.success) {
        setToastVariant("danger");
        setToastMessage(res.message);
        setToastTitle("Verificación de emisor");

        setShowToast(true);
        setLoadingForm(false);
        return;
      }

      setModalTitle("Solicitud de verificación enviada");
      setModalText(
        "Tu solicitud de verificación fue enviada exitosamente. La administración de la plataforma revisará la información y recibirás un correo con la respuesta."
      );

      setShowModal(true);
      // window.location.reload();
    });

    console.log("Estos son los valores", values);
  };

  return (
    <Formik
      onSubmit={submitSecondStep}
      initialValues={initialValues}
      validationSchema={verificationSecondsStepSchema}
    >
      {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <FormInput
              md={6}
              sm={12}
              type={"text"}
              name={"legalName"}
              label={"Razón social"}
              disabled={false}
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
              handleClick={async () => {
                setLoadingSuburbs(true);
                let options = await getSuburbsOptionList(
                  values.zipCode,
                  suburbs,
                  setSuburbs,
                  setLoadingSuburbs
                );

                setFieldValue("country", options.country);
                setFieldValue("state", options.state);
                setFieldValue("city", options.city);
                setSuburbs(options.suburbs);

                setLoadingSuburbs(false);
              }}
              handleChange={(event: any) => {
                let options: any[] = [];
                let value = event.target.value;

                setSuburbOptions(options);
                setFieldValue("zipCode", value);

                setFieldValue("country", "");
                setFieldValue("state", "");
                setFieldValue("city", "");
                setFieldValue("suburbs", options);
                setSuburbs(options);

                if (value != undefined && value != "" && value != null) {
                  setDisableSearchZipCode(false);
                  setDisableSuburbs(false);
                  return;
                }

                setDisableSuburbs(true);
                setDisableSearchZipCode(true);
                return;
              }}
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

            <Form.Group
              className="mb-3"
              as={Col}
              sm={12}
              md={6}
              controlId={"suburb"}
            >
              <Form.Label>Colonia</Form.Label>
              <Select
                name="suburb"
                options={suburbs}
                isLoading={loadingSuburbs}
                isDisabled={loadingSuburbs}
                placeholder="Selecciona una colonia"
                noOptionsMessage={() =>
                  "No hay opciones disponibles, intenta buscar un nuevo código postal"
                }
                onChange={(e: any) => {
                  if (e == null) {
                    return setFieldValue("suburb", null);
                  }

                  return setFieldValue("suburb", e.value);
                }}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    boxShadow: "none",
                    borderColor:
                      //@ts-ignore
                      errors.suburb !== undefined && errors.suburb.trim()
                        ? "#dc3545"
                        : "#dee2e6",
                    "&:hover": {
                      borderColor:
                        //@ts-ignore
                        errors.suburb !== undefined && errors.suburb.trim()
                          ? "#dc3545"
                          : "#dee2e6",
                    },
                  }),
                }}
              />

              {
                // @ts-ignore
                <div className="validation-error">{errors.suburb}</div>
              }
            </Form.Group>

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
          </Row>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            {disbaleForm ? null : <AdminFormSubmitButton loading={false} />}
            <AdminFormBackButton
              loading={false}
              backUrl="../../admin/profile"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
