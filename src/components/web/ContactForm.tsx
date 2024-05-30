import { useEffect, useState } from "react";

import { Formik } from "formik";
import Select from "react-select";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";

import { apiFetch } from "@/helpers/api-fetch";
import { contactSchema } from "@/validations/validation-schemas";

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
    { value: "Información general", label: "Información general" },
  ];

  const [loadingForm, setLoadingForm] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

  useEffect(() => {
    const loadScriptByUrl = (id: string, url: string, callback: any) => {
      const scriptExist = document.getElementById(id);

      if (!scriptExist) {
        var script = document.createElement("script");

        script.id = id;
        script.src = url;
        script.type = "text/javascript";

        script.onload = function () {
          if (callback) callback();
        };

        document.body.appendChild(script);
      }

      if (scriptExist && callback) callback();
    };

    loadScriptByUrl(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${siteKey}`,
      function () {
        console.log("Script loaded!");
      }
    );
  }, []);

  const submitForm = async (values: any) => {
    setLoadingForm(true);
    var currentWindow = window as any;

    currentWindow.grecaptcha.ready(() => {
      currentWindow.grecaptcha
        .execute(siteKey, { action: "submit" })
        .then((token?: string) => {
          if (token == undefined) {
            return console.error("Error en reCaptcha");
          }

          values.recaptcha = token;
          apiFetch("users/contact", "POST", values).then((res) => {
            if (res.success) {
              setLoadingForm(false);
              setShowToast(true);
              setToastVariant("success");
              setToastTitle("Contacto");
              setToastMessage("Mensaje enviado correctamente.");

              return;
            }

            setLoadingForm(false);
            setShowToast(true);
            setToastVariant("danger");
            setToastTitle("Contacto");
            setToastMessage("Ocurrió un error al enviar el mensaje.");

            return;
          });
        });
    });
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
        onSubmit={submitForm}
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
                      isSearchable={false}
                      defaultValue={null}
                      onChange={(e) => {
                        if (e == null) {
                          return setFieldValue("category", null);
                        }

                        return setFieldValue("category", e.value);
                      }}
                      isDisabled={false}
                      noOptionsMessage={() => "Sin opciones."}
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
