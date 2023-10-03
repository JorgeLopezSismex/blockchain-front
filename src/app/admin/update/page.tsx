"use client";
//Update
//Por el momento se usara para un Form de solicitud de validacion para registro.
import "bootstrap/dist/css/bootstrap.css";
import * as formik from "formik";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FormInput from "../../components/admin/FormInput";
import FormInputFile from "../../components/admin/FormInputFile";

export default function Update(){
  const { Formik } = formik;

  const handleSubmit = async (values: any) => {
    console.log(values);
    // To do: Enviar valores al servicio y esperar respuesta.
    // const res = await apiFetch("authorization/sign-in", "POST", values);
  };
    return(
        <div>
            <Container fluid className='px-5 pt-4'>
                <Row className='mb2'>
                    <Col className="pb-4">
                        <h1>Solicitud de validación</h1>
                    </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Card className='py-4 px-5' style={{marginBottom:50}}>
                      <Card.Body>
                        <Formik
                  onSubmit={handleSubmit}
                  validationSchema={handleSubmit}
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
                        <h4 className="text-muted">Informacion de la empresa</h4>
                        <p>Por favor llene el siguiente formulario con informacion general sobre su empresa para lograr la validación.</p>
                        <FormInput
                          md={6}
                          sm={12}
                          type={"text"}
                          name={"degree"}
                          value={values.degree}
                          errors={errors.degree}
                          label={"Razón social"}
                          controlId={"controlTitle"}
                          handleChange={handleChange}
                          placeholder={"Razón social de la empresa"}
                        />

                        <FormInput
                          md={6}
                          sm={12}
                          type="text"
                          name="description"
                          label="Direccion fisica"
                          value={values.description}
                          handleChange={handleChange}
                          errors={errors.description}
                          controlId="controlDescription"
                          placeholder="Direccion fisica de la empresa"
                        />
                      </Row>

                      <Row className="mb-3">
                        <FormInput
                          md={6}
                          sm={12}
                          type={"email"}
                          name={"degree"}
                          value={values.degree}
                          errors={errors.degree}
                          label={"Correo electronico"}
                          controlId={"controlTitle"}
                          handleChange={handleChange}
                          placeholder={"example@mail.com"}
                        />

                        <FormInput
                          md={6}
                          sm={12}
                          type="text"
                          name="description"
                          label="Teléfono de la empresa."
                          value={values.description}
                          handleChange={handleChange}
                          errors={errors.description}
                          controlId="controlDescription"
                          placeholder="00 0000 0000"
                        />
                      </Row>

                      <Row className="mb-3">
                        <FormInput
                          md={6}
                          sm={12}
                          type={"text"}
                          name={"degree"}
                          value={values.degree}
                          errors={errors.degree}
                          label={"Descripcion"}
                          controlId={"controlTitle"}
                          handleChange={handleChange}
                          placeholder={"Breve descripción de la actividad comercial de la empresa."}
                        />

                        <FormInput
                          md={6}
                          sm={12}
                          type="text"
                          name="description"
                          label="Cedula fiscal"
                          value={values.description}
                          handleChange={handleChange}
                          errors={errors.description}
                          controlId="controlDescription"
                          placeholder="Cedula fiscal"
                        />
                      </Row>

                      <Row className="mb-3">
                        <FormInput
                          md={6}
                          sm={12}
                          type={"text"}
                          name={"degree"}
                          value={values.degree}
                          errors={errors.degree}
                          label={"RFC"}
                          controlId={"controlTitle"}
                          handleChange={handleChange}
                          placeholder={"RFC de la empresa."}
                        />

                        {/* <FormInput
                          md={6}
                          sm={12}
                          type="text"
                          name="description"
                          label="Cedula fiscal"
                          value={values.description}
                          handleChange={handleChange}
                          errors={errors.description}
                          controlId="controlDescription"
                          placeholder="Cedula fiscal"
                        /> */}
                      </Row>

                      <Row className="mb-4">
                        <h5 className="text-muted">Documentos para validacion</h5>
                        <p>Por favor ingrese los documentos solicitados.</p>
                        <FormInputFile
                          md={6}
                          sm={12}
                          accept="*"
                          name="logo"
                          label="Acta constitutiva."
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
                          label="Estado de situación fisca"
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
                  </Col>
                </Row>
            </Container>
        </div>
    );
}