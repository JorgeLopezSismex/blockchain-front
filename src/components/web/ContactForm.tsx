import { Formik } from "formik";
import { Container, Col, Row, Form } from "react-bootstrap";
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import FormSelect from "../form/FormSelect";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Select from "react-select";

import { contactSchema } from "@/validations/validation-schemas";
import { error } from "console";

export default function ContactForm({
  setShowToast,
  setToastTitle,
  setToastMessage,
  setToastVariant,
}: {
  setShowToast: any;
  setToastTitle: any;
  setToastMessage: any;
  setToastVariant: any;
}) {
  const options = [
    { value: "Precios", label: "Precios" },
    { value: "Blockchain", label: "Blockchain" },
    { value: "Certificados", label: "Certificados" },
  ];

  const [loadingForm, setLoadingForm] = useState(false);

  const submitContactForm = async (values: any) => {
    setLoadingForm(true);
    setShowToast(true);
    setToastVariant("success");
    setToastTitle("Contacto");
    setToastMessage("Mensaje enviado correctamente.");
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <div className="flex-column align-items-center">
            <h4 className="section-title">Contacto</h4>
          </div>
        </Col>
      </Row>

      <Formik
        onSubmit={submitContactForm}
        validationSchema={contactSchema}
        initialValues={{ email: "", category: "", comments: "" }}
      >
        {({ values, errors, handleSubmit, handleChange, setFieldValue }) => (
          <Container>
            <Row className="d-flex justify-content-center">
              <Col xs={12} md={6}>
                <Form noValidate onSubmit={handleSubmit}>
                  <FormInput
                    md={12}
                    sm={12}
                    type="text"
                    name="email"
                    controlId="email"
                    disabled={false}
                    label="Correo electrónico"
                    value={values.email}
                    errors={errors.email}
                    handleChange={handleChange}
                    placeholder="Correo electrónico"
                  />

                  <Form.Group className="mb-3" as={Col} sm={12} md={12}>
                    <Form.Label>Categoría</Form.Label>
                    <Select
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          boxShadow: "none",
                          borderColor:
                            errors.category !== undefined &&
                            errors.category.trim()
                              ? "#dc3545"
                              : "#dee2e6",
                          "&:hover": {
                            borderColor:
                              errors.category !== undefined &&
                              errors.category.trim()
                                ? "#dc3545"
                                : "#dee2e6",
                          },
                        }),
                      }}
                      id={"category"}
                      name={"category"}
                      options={options}
                      isClearable={true}
                      isSearchable={true}
                      defaultValue={null}
                      onChange={(e) => {
                        if (e == null) {
                          return setFieldValue("category", null);
                        }

                        return setFieldValue("category", e.value);
                      }}
                      isDisabled={false}
                      classNamePrefix="Select"
                      placeholder="Selecciona una opción..."
                    />
                    <div className="validation-error">{errors.category}</div>
                  </Form.Group>

                  <FormTextarea
                    md={12}
                    sm={12}
                    id={"comments"}
                    name={"comments"}
                    label={"Comentarios"}
                    value={values.comments}
                    errors={errors.comments}
                    handleChange={handleChange}
                    placeholder={
                      "Breve comentario para concer más sobre el tema de interés."
                    }
                  />

                  <div className="d-flex justify-content-center">
                    <Button
                      size="lg"
                      type="submit"
                      className="blue-button rounded-pill"
                      disabled={loadingForm ? true : false}
                    >
                      {loadingForm ? "Espera un momento..." : "Enviar"}
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        )}
      </Formik>
    </Container>
  );
}
