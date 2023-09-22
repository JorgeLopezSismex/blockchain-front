"use client";
import { useState } from "react";
import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import { Fragment } from "react";

import styles from "../styles.module.css";

import Breadcrumb from "react-bootstrap/Breadcrumb";

import FormInput from "../../components/admin/FormInput";
import FormFile from "../../components/admin/FormFile";
import FormButton from "../../components/admin/FormButton";

import { documentScheme } from "../../../validations/documents-validation";

export default function Documents() {
  const { Formik } = formik;
  const [validated, setValidated] = useState(false);

  //Asi no es :v
  const createDocuments = async (values: any) => {
    console.log(values);
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);
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
                <h2>Titulo</h2>
                <p>Por favor llene los campos que se le indican</p>
                <Formik
                  onSubmit={createDocuments}
                  validationSchema={documentScheme}
                  initialValues={{
                    title: "",
                    description: "",
                    email: "",
                  }}
                >
                  {({ handleSubmit, handleChange, values, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row>
                        <h5 className="text-muted">Informacion general</h5>
                        <p>
                          Por favor ingrese la informacion pgeneral para el
                          certificado
                        </p>
                        <FormInput
                          label={"Titulo"}
                          type={"text"}
                          name={"title"}
                          placeholder={"Diplomado en negocios"}
                          controlId={"controlTitle"}
                          md={6}
                          sm={12}
                          value={values.title}
                          handleChange={handleChange}
                          errors={errors.title}
                        />
                        <FormInput
                          label={"Descripcion"}
                          type={"text"}
                          name={"description"}
                          placeholder={
                            "El siguiente certificado es otorgado por..."
                          }
                          controlId={"controlDescription"}
                          md={6}
                          sm={12}
                          value={values.description}
                          handleChange={handleChange}
                          errors={errors.description}
                        />
                      </Row>
                      <Row>
                        <h5 className="text-muted">Beneficiarios</h5>
                        <p>Utilice una de las siguientes dos opciones</p>
                        <FormInput
                          label={"Correo"}
                          type={"text"}
                          name={"email"}
                          placeholder={"example@email.com"}
                          controlId={"controlEmail"}
                          md={6}
                          sm={12}
                          value={values.email}
                          handleChange={handleChange}
                          errors={errors.email}
                        />
                        <FormFile
                          label={"Correos"}
                          md={6}
                          sm={12}
                          controlId={"controlFileEmail"}
                        />
                      </Row>
                      <Row>
                        <h5 className="text-muted">Multimedia</h5>
                        <p>
                          Por favor cargue la imagen del logo y firma para el
                          certificado
                        </p>
                        <FormFile
                          label={"Logo"}
                          md={6}
                          sm={12}
                          controlId={"controlFileLogo"}
                        />
                        <FormFile
                          label={"Firma"}
                          md={6}
                          sm={12}
                          controlId={"controlFileSign"}
                        />
                      </Row>
                      <Row
                        className="mb-3 mt-4"
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                      >
                        <FormButton label={"Crear"} type={"submit"} />
                      </Row>
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

{
  /* <Fragment>
      <Container fluid className="px-5 pt-4">
        <Row className="mb2">
          <Col className="pb-4">
            <h1>Carga de documentos</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card className="py-4 px-5" style={{ marginBottom: 50 }}>
              <Card.Body>
                <Row>
                  <h2>Titulo</h2>
                  <p>Por favor llene los campos que se le indican</p>
                  <Formik
                    onSubmit={handleSubmit}
                    validationSchema={documentScheme}
                    initialValues={{
                      title: "",
                      description: "",
                      email: "",
                    }}
                  >
                    {({ handleSubmit, handleChange, values, errors }) => (
                      <Form noValidate onSubmit={handleChange}>
                        <Row>
                          <h5 className="text-muted">Informacion general</h5>
                          <p>
                            Por favor ingrese la informacion pgeneral para el
                            certificado
                          </p>
                          <FormInput
                            label={"Titulo"}
                            type={"text"}
                            name={"title"}
                            placeholder={"Diplomado en negocios"}
                            controlId={"controlTitle"}
                            md={6}
                            sm={12}
                            value={values.title}
                            handleChange={handleChange}
                            errors={errors.title}
                          />
                          <FormInput
                            label={"Descripcion"}
                            type={"text"}
                            name={"description"}
                            placeholder={
                              "El siguiente certificado es otorgado por..."
                            }
                            controlId={"controlDescription"}
                            md={6}
                            sm={12}
                            value={values.description}
                            handleChange={handleChange}
                            errors={errors.description}
                          />
                        </Row>
                        <Row>
                          <h5 className="text-muted">Beneficiarios</h5>
                          <p>Utilice una de las siguientes dos opciones</p>
                          <FormInput
                            label={"Correo"}
                            type={"text"}
                            name={"email"}
                            placeholder={"example@email.com"}
                            controlId={"controlEmail"}
                            md={6}
                            sm={12}
                            value={values.email}
                            handleChange={handleChange}
                            errors={errors.email}
                          />
                          <FormFile
                            label={"Correos"}
                            md={6}
                            sm={12}
                            controlId={"controlFileEmail"}
                          />
                        </Row>
                        <Row>
                          <h5 className="text-muted">Multimedia</h5>
                          <p>
                            Por favor cargue la imagen del logo y firma para el
                            certificado
                          </p>
                          <FormFile
                            label={"Logo"}
                            md={6}
                            sm={12}
                            controlId={"controlFileLogo"}
                          />
                          <FormFile
                            label={"Firma"}
                            md={6}
                            sm={12}
                            controlId={"controlFileSign"}
                          />
                        </Row>
                        <Row className="mb-3 mt-4">
                          <FormButton label={"Crear"} />
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment> */
}
