import * as formik from "formik";

import { Form, Row } from "react-bootstrap";

import FormInput from "@/components/form/FormInput";
import FormInputFile from "@/components/form/FormInputFile";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

import { verificationFirstStepSchema } from "@/validations/verification-validation";
import { apiFetch } from "@/helpers/api-fetch";

export default function VerificationFirstStepForm({
  loadingForm,
  setLoadingForm,
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
  setShowToast: any;
  setToastTitle: any;
  setToastVariant: any;
  setToastMessage: any;
  setShowModal: any;
  setModalTitle: any;
  setModalText: any;
}) {
  const { Formik } = formik;

  const submitFirstStep = async (values: any) => {
    setLoadingForm(true);
    apiFetch("verification/ownership-verification", "POST", values, true).then(
      (res) => {
        console.log("Esta es la respuesta de la verificacion", res);
        if (!res.success) {
          setToastVariant("danger");
          setToastMessage(res.message);
          setToastTitle("Verificación de propiedad");

          setShowToast(true);
          setLoadingForm(false);
          return;
        }

        setModalTitle("Verificación de propiedad");
        setModalText(
          `Hemos enviado un enlace de verificación de propiedad al correo ${res.data.legalEmail} el cual, es señalado en la cédula fiscal enviada.`
        );

        setShowModal(true);
      }
    );
  };

  return (
    <Formik
      onSubmit={submitFirstStep}
      initialValues={{ name: "", taxId: null }}
      validationSchema={verificationFirstStepSchema}
    >
      {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <FormInput
              md={6}
              sm={12}
              type="text"
              name="name"
              disabled={false}
              controlId="name"
              value={values.name}
              errors={errors.name}
              label="Nombre comercial"
              handleChange={handleChange}
              placeholder="Nombre comercial"
            />

            <FormInputFile
              md={6}
              sm={12}
              name="taxId"
              required={true}
              controlId="taxId"
              value={values.taxId}
              errors={errors.taxId}
              label="Cédula fiscal"
              accept="application/pdf"
              setFieldValue={setFieldValue}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <AdminFormSubmitButton loading={loadingForm} />
              <AdminFormBackButton
                loading={loadingForm}
                backUrl="../../admin/profile"
              />
            </div>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
