"use client";
//Update
//Por el momento se usara para un Form de solicitud de validacion para registro.
import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import FormInput from "../../components/admin/FormInput";
import FormSelect from "../../components/admin/FormSelect";
import FormTextarea from "../../components/admin/FormTextarea";
import FormInputFile from "../../components/admin/FormInputFile";
import FormButtonAddon from "../../components/admin/FormButtonAddons";

import {validationRequestScheme} from "../../../validations/validation_request";

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
                          validationSchema={validationRequestScheme}
                          initialValues={{
                            legal_name: "",
                            zip_code: "",
                            country: "",
                            state: "",
                            city: "",
                            suburb: "",
                            street: "",
                            external_number: "",
                            internal_number: "",
                            email: "",
                            phone: "",
                            description: "",
                            tax_id: null,
                            rfc: "", 
                            constitutive_act: null, 
                            tax_situation_statement: null,
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
                                <p>Por favor llene el siguiente formulario con información general sobre su empresa para lograr la validación.</p>
                                <FormInput
                                  md={6}
                                  sm={12}
                                  type={"text"}
                                  name={"legal_name"}
                                  value={values.legal_name}
                                  errors={errors.legal_name}
                                  label={"Razón social"}
                                  controlId={"legal_name"}
                                  handleChange={handleChange}
                                  placeholder={"Razón social de la empresa"}
                                  disabled={false}
                                />

                                <FormButtonAddon
                                  sm={12}
                                  md={6}
                                  label={"Código postal"}
                                  btntext={"Buscar"}
                                  btnid={"btn_zip_code"}
                                  placeholder={"12345"}
                                  id={"zip_code"}
                                  name={"zip_code"}
                                  value={values.zip_code }
                                  handleChange={handleChange}
                                  errors={errors.zip_code }
                                />
                              </Row>

                              <Row>
                                <FormInput
                                  md={6}
                                  sm={12}
                                  type={"text"}
                                  name={"country"}
                                  value={values.country}
                                  errors={errors.country}
                                  label={"País"}
                                  controlId={"country"}
                                  handleChange={handleChange}
                                  placeholder={"Páis"}
                                  disabled={true}
                                />

                                <FormInput
                                  md={6}
                                  sm={12}
                                  type={"text"}
                                  name={"state"}
                                  value={values.state}
                                  errors={errors.state}
                                  label={"Estado"}
                                  controlId={"state"}
                                  handleChange={handleChange}
                                  placeholder={"Estado"}
                                  disabled={true}
                                />
                              </Row>

                              <Row>
                                <FormInput
                                  md={6}
                                  sm={12}
                                  type={"text"}
                                  name={"city"}
                                  value={values.city}
                                  errors={errors.city}
                                  label={"Ciudad"}
                                  controlId={"city"}
                                  handleChange={handleChange}
                                  placeholder={"Ciudad"}
                                  disabled={true}
                                />

                                <FormInput
                                  md={6}
                                  sm={12}
                                  type={"text"}
                                  name={"suburb"}
                                  value={values.suburb}
                                  errors={errors.suburb}
                                  label={"Colonia"}
                                  controlId={"suburb"}
                                  handleChange={handleChange}
                                  placeholder={"Colonia"}
                                  disabled={true}
                                />

                                <FormSelect
                                />
                              </Row>
                                
                              <Row>
                                <FormInput
                                  md={12}
                                  sm={12}
                                  type={"text"}
                                  name={"street"}
                                  value={values.street}
                                  errors={errors.street}
                                  label={"Calle"}
                                  controlId={"street"}
                                  handleChange={handleChange}
                                  placeholder={"Calle"}
                                  disabled={false}
                                />
                              </Row>

                              <Row>
                                <FormInput
                                  md={6}
                                  sm={12}
                                  type={"text"}
                                  name={"external_number"}
                                  value={values.external_number}
                                  errors={errors.external_number}
                                  label={"Número exterior"}
                                  controlId={"external_number"}
                                  handleChange={handleChange}
                                  placeholder={"123"}
                                  disabled={false}
                                />

                                <FormInput
                                  md={6}
                                  sm={12}
                                  type={"text"}
                                  name={"internal_number"}
                                  value={values.internal_number}
                                  errors={errors.internal_number}
                                  label={"Número interior"}
                                  controlId={"internal_number"}
                                  handleChange={handleChange}
                                  placeholder={"321"}
                                  disabled={false}
                                />
                              </Row>
                          
                              <Row className="mb-3">
                                <FormInput
                                  md={6}
                                  sm={12}
                                  type={"email"}
                                  name={"email"}
                                  value={values.email}
                                  errors={errors.email}
                                  label={"Correo electronico"}
                                  controlId={"email"}
                                  handleChange={handleChange}
                                  placeholder={"example@mail.com"}
                                  disabled={false}
                                />

                                <FormInput
                                  md={6}
                                  sm={12}
                                  type="text"
                                  name="phone"
                                  label="Teléfono de la empresa."
                                  value={values.phone}
                                  handleChange={handleChange}
                                  errors={errors.phone}
                                  controlId="phone"
                                  placeholder="00 0000 0000"
                                  disabled={false}
                                />
                              </Row>
                          
                              <Row className="mb-3">
                                <FormInput
                                  md={6}
                                  sm={12}
                                  type={"text"}
                                  name={"rfc"}
                                  value={values.rfc}
                                  errors={errors.rfc}
                                  label={"RFC"}
                                  controlId={"rfc"}
                                  handleChange={handleChange}
                                  placeholder={"RFC de la empresa."}
                                  disabled={false}
                                />        
                          
                                <FormInputFile
                                  sm={12}
                                  md={6}
                                  accept="*"
                                  name="tax_id"
                                  controlId="tax_id"
                                  label="Cedula fiscal"
                                  value={values.tax_id}
                                  errors={errors.tax_id}
                                  setFieldValue={setFieldValue}
                                />
                              </Row>
                          
                              <Row className="mb-3">
                                <FormTextarea
                                  md={12}
                                  sm={12}   
                                  label={"Descripcion"}
                                  id={"description"}
                                  name={"description"}
                                  value={values.description}
                                  errors={errors.description}
                                  handleChange={handleChange}
                                  placeholder={"Breve descripción de la actividad comercial de la empresa."}
                                />
                              </Row>
                          
                              <Row className="mb-4">
                                <FormInputFile
                                  md={6}
                                  sm={12}
                                  accept="*"
                                  name="constitutive_act"
                                  label="Acta constitutiva."
                                  controlId="constitutive_act"
                                  value={values.constitutive_act}
                                  errors={errors.constitutive_act}
                                  setFieldValue={setFieldValue}
                                />

                                <FormInputFile
                                  sm={12}
                                  md={6}
                                  accept="*"
                                  name="tax_situation_statement"
                                  controlId="tax_situation_statement"
                                  label="Estado de situación fiscal."
                                  value={values.tax_situation_statement}
                                  errors={errors.tax_situation_statement}
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