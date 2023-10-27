"use client";
//Ventana para añadir casos de exito de los clientes. ◑﹏◐

import * as yup from 'yup';
import Link from "next/link";
import * as formik from "formik";
import { Fragment, useState } from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import {clientAddSchema} from "@/validations/validation_request";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import FormInputFile from "@/components/form/FormInputFile";

export default function AddClients(){
  const { Formik } = formik;

  const [formData, setFormData] = useState ({
    name: "",
    job: "",
    city: "",
    text: "",
    image: null,
  });

  const handleSubmit = (values :any) => { //Debe estar recibiendo los valores del Formik.
    // Aquí puedes realizar alguna acción con los datos guardados en formData
    // Por ejemplo, puedes enviarlos a través de una solicitud de red
    setFormData(values);//Guarda los datos de manera local
    console.log(values); // Esto imprime los datos en la consola
  };
  
  return(
    <Fragment>
      <AdminPageHeader title="Añadir casos de clientes">
        <Breadcrumb className="float-sm-right">
          <Breadcrumb.Item>
            {/* <Link href={"/admin"} style={{ textDecoration: "none" }}>
              Inicio
            </Link> */}
            {/* EL link esta marcando error */}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Añadir clientes</Breadcrumb.Item>
        </Breadcrumb>
        {/* El error tambien podria ser el Breadcrumb */}
      </AdminPageHeader>

      <Row>
        <Col sm={6} xs={12}>
          <AdminCardContainer xs={12}>
            <Formik 
              validationSchema={clientAddSchema}
              onSubmit={handleSubmit}
              initialValues={formData}
            >
              {({handleSubmit, handleChange, setFieldValue, values, errors}) => (
                <Form 
                  noValidate 
                  onSubmit={handleSubmit}
                >
                  <Row className="mb-3">
                    <FormInput
                      label={"Nombre"}
                      md={12}
                      sm={12}
                      name={"name"}
                      type={"text"}
                      disabled={false}
                      controlId={"name"}
                      value={values.name}
                      errors={errors.name}
                      handleChange={handleChange}
                      placeholder={"Juan Perez"}
                    />
                    <FormInput
                      label={"Puesto"}
                      md={12}
                      sm={12}
                      name={"job"}
                      type={"text"}
                      disabled={false}
                      controlId={"job"}          
                      value={values.job}
                      errors={errors.job}                  
                      handleChange={handleChange}
                      placeholder={"Director de Recursos"}
                    />
                    <FormInput
                      label={"Ciudad"}
                      md={12}
                      sm={12}
                      name={"city"}
                      type={"text"}
                      disabled={false}
                      controlId={"city"}                  
                      value={values.city}
                      errors={errors.city}                  
                      handleChange={handleChange}
                      placeholder={"Monterrey"}
                    />
                    <FormTextarea
                      label={"Contenido"}
                      md={12}
                      sm={12}                  
                      id={"text"}
                      name={"text"}
                      value={values.text}
                      errors={errors.text}   
                      handleChange={handleChange}
                      placeholder={"Blockcerts me ha ayudado en..."}
                    />

                    <FormInputFile
                      md={12}
                      sm={12}
                      accept="*"
                      name="image"
                      label="Imagen"
                      controlId="image"
                      value={values.image}
                      errors={errors.image}
                      setFieldValue={setFieldValue}
                    />
                  </Row>
              
                  <div>
                    <Button type="submit" variant="primary">
                      Guardar
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </AdminCardContainer>
        </Col>

        <Col sm={6} xs={12}>
          <Card style={{maxWidth:"400px"}} className="mx-auto my-auto">
            {formData.image && (
              <Card.Img
                variant="top"
                src={URL.createObjectURL(formData.image)}
                alt={`Imagen de ${formData.name}`}
                style={{maxWidth:"400px"}}
              />
            )}
            <Card.Body>
              <Card.Title>{formData.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{formData.job}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{formData.city}</Card.Subtitle>
              <Card.Text>{formData.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Fragment>
  );
}