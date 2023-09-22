"use client";
import { useState } from "react";
import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

import FormInput from '../../components/admin/FormInput';
import FormFile from '../../components/admin/FormFile';
import FormButton from '../../components/admin/FormButton';

import { documentScheme } from "../../../validations/documents-validation";

export default function Documents(){
  const { Formik } = formik;
  const [validated, setValidated] = useState(false);
  
  //Asi no es :v
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
 
    return(
        <>
          <Container fluid className='px-5 pt-4'>
            <Row className='mb2'>
              <Col className="pb-4">
                <h1>Carga de documentos</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Card className='py-4 px-5' style={{marginBottom:50}}>
                  <Card.Body>
                    <Row>
                      <h2>Titulo</h2>
                      <p>Por favor llene los campos que se le indican</p>
                      <Formik
                        onSubmit={handleSubmit}
                        validationSchema={documentScheme}
                        initialValues={{
                          title:"",
                          description:"",
                          email:"",
                        }}
                      >
                        {({handleSubmit, handleChange, values, errors}) => (
                          <Form noValidate onSubmit={handleChange}>
                            <Row>
                              <h5 className="text-muted">Informacion general</h5>
                              <p>Por favor ingrese la informacion pgeneral para el certificado</p>
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
                                placeholder={"El siguiente certificado es otorgado por..."}
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
                                <p>Por favor cargue la imagen del logo y firma para el certificado</p>
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
                              <FormButton label={"Crear"}/>
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
        </>
    );
}