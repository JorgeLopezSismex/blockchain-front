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
// import { apiFetch } from "@/helpers/api-fetch";

export default function Documents() {
  const { Formik } = formik;
  // const router = useRouter();

  const [validated, setValidated] = useState(false);
  // const [enterTitle, setEnterTitle]=useState("");
  // const [enterDescription, setEnterDescription]=useState("");
  // const [enterEmail, setEnterEmail]=useState("");
  // const [enterMails, setEnterMails]=useState(null);
  // const [enterLogo, setEnterLogo]=useState(null);
  // const [enterSign, setEnterSign]=useState(null);
  const [archivos, setArchivos] = useState(null);

  const subirArchivos = (e : any) => {
    setArchivos(e);
  }

  const insertarArchivos = async() => {
    const f = new FormData();
    console.log(f);
    // const res = await apiFetch("admin/algo", "POST", f);
    //⬆ hace fetch con la api
  }

  //Asi no es :v
  const createDocuments = async (values: any) => {
    console.log(values);
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
                  onSubmit={createDocuments} //Este deberia cambiar
                  validationSchema={documentScheme}
                  initialValues={{
                    title: "",
                    description: "",
                    email: "",
                    mails: "undefined",
                    logo: "undefined",
                    sign: "undefined",
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
                          name={"mails"}
                          value={values.mails}
                          handleChange={handleChange}
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
                          name={"logo"}
                          value={values.logo}
                          handleChange={handleChange}
                        />
                        <FormFile
                          label={"Firma"}
                          md={6}
                          sm={12}
                          controlId={"controlFileSign"}
                          name={"sign"}
                          value={values.sign}
                          handleChange={handleChange}
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
