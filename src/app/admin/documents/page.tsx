"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, Fragment } from "react";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import FormInput from "../../components/admin/FormInput";
import FormInputFile from "../../components/admin/FormInputFile";

import { apiFetch } from "@/helpers/api-fetch";
import { uploadDocumentsSchema } from "../../../validations/documents-validation";

import styles from "../styles.module.css";

export default function Documents() {
  const { Formik } = formik;
  const router = useRouter();

  useEffect(() => {
    // To do: Consultar si hay docuementos cargados y llenar el formulario.
  }, []);

  const uploadDocuments = async (values: any) => {
    console.log(values);
    // To do: Enviar valores al servicio y esperar respuesta.
    // const res = await apiFetch("authorization/sign-in", "POST", values);
  };

  return (
    <Fragment>
      <Container fluid>
        <Row className="mb-2">
          <Col sm={6}>
            <h1 style={{ fontSize: "1.8rem", margin: 0 }}>Documentos</h1>
          </Col>
          <Col sm={6}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item active>Documentos</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>

      <section className={styles.contentMain}>
        <Container fluid>
          <Row xs={12}>
            <Card style={{ marginBottom: 60 }}>
              <Card.Body className={styles.cardBody}>
                <h2>Carga de documentos</h2>
                <p>Por favor llene los campos que se le indican</p>
                <Formik
                  onSubmit={uploadDocuments}
                  validationSchema={uploadDocumentsSchema}
                  initialValues={{
                    degree: "",
                    description: "",
                    emails: null,
                    signature: null,
                    logo: null,
                  }}
                >
                  {({
                    handleSubmit,
                    setFieldValue,
                    handleChange,
                    values,
                    errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row className="mb-3">
                        <FormInput
                          md={6}
                          sm={12}
                          type={"text"}
                          name={"degree"}
                          value={values.degree}
                          errors={errors.degree}
                          label={"Grado obtenido"}
                          controlId={"controlTitle"}
                          handleChange={handleChange}
                          placeholder={"Ingeniero en sistemas"}
                          disabled={false}
                        />

                        <FormInput
                          md={6}
                          sm={12}
                          type="text"
                          name="description"
                          label="Descripcion"
                          value={values.description}
                          handleChange={handleChange}
                          errors={errors.description}
                          controlId="controlDescription"
                          placeholder="El siguiente certificado es otorgado por..."
                          disabled={false}
                        />
                      </Row>

                      <Row>
                        <h5 className="text-muted">Beneficiarios</h5>
                        <p>Archivo con la lista de beneficiarios.</p>

                        <FormInputFile
                          md={12}
                          sm={12}
                          accept="*"
                          name="emails"
                          label="Correos"
                          controlId="emails"
                          value={values.emails}
                          errors={errors.emails}
                          setFieldValue={setFieldValue}
                        />
                      </Row>

                      <Row>
                        <h5 className="text-muted">Multimedia</h5>
                        <p>
                          Por favor cargue la imagen del logo y firma para el
                          certificado
                        </p>
                        <FormInputFile
                          md={6}
                          sm={12}
                          accept="*"
                          name="logo"
                          label="Logotipo"
                          controlId="logo"
                          value={values.logo}
                          errors={errors.logo}
                          setFieldValue={setFieldValue}
                        />

                        <FormInputFile
                          sm={12}
                          md={6}
                          accept="*"
                          name="signature"
                          controlId="signature"
                          label="Firma del emisor"
                          value={values.signature}
                          errors={errors.signature}
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
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}
