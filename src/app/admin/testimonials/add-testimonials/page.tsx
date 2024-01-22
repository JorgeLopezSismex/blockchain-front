"use client";
//Ventana para añadir casos de exito de los clientes. ◑﹏◐

import Link from "next/link";
import * as formik from "formik";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FormInput from "@/components/form/FormInput";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ActionToast from "@/components/main/ActionToast";
import FormTextarea from "@/components/form/FormTextarea";
import FormInputFile from "@/components/form/FormInputFile";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import { apiFetch } from "@/helpers/api-fetch";
import { AddTestimonial } from "@/types/testimonials";
// import {clientAddSchema} from "@/validations/validation_request";

export default function AddTestimonials() {
  const router = useRouter();
  const { Formik } = formik;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: null,
    date: "",
    //job: "",
    address: "",
    user: "",
  });

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  const handleSubmit = (values: any) => {
    setFormData(values);
    console.log(values);
  };

  const addTestimonial = async (values: AddTestimonial) => {
    setFormData(values);

    const res = await apiFetch("success/registro", "POST", values);

    if (!res.success) {
      setLoading(false);
      setShowToast(true);
      setToastVariant("danger");
      setToastTitle("Error");
      setToastMessage(res.message);
    }

    setLoading(false);
    setShowToast(true);

    setToastVariant("success");
    setToastTitle("Restro");
    setToastMessage(res.message);

    setTimeout(() => {
      router.replace("success/registro");
    }, 6000);

    return;
  };

  return (
    <Fragment>
      <AdminPageHeader title="Añadir casos de clientes">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"/admin/testimonials"}>
            Clientes
          </Link>
          <Breadcrumb.Item active>Añadir clientes</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <Row>
        <Col sm={6} xs={12}>
          <AdminCardContainer xs={12}>
            <Formik
              validationSchema={null}
              onSubmit={handleSubmit}
              initialValues={formData}
            >
              {({
                handleSubmit,
                handleChange,
                setFieldValue,
                values,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
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
                      name={"user"}
                      type={"text"}
                      disabled={false}
                      controlId={"user"}
                      value={values.user}
                      errors={errors.user}
                      handleChange={handleChange}
                      placeholder={"Director de Recursos"}
                    />
                    <FormInput
                      label={"Ciudad"}
                      md={12}
                      sm={12}
                      name={"address"}
                      type={"text"}
                      disabled={false}
                      controlId={"address"}
                      value={values.address}
                      errors={errors.address}
                      handleChange={handleChange}
                      placeholder={"Monterrey"}
                    />
                    <FormTextarea
                      label={"Contenido"}
                      md={12}
                      sm={12}
                      id={"description"}
                      name={"description"}
                      value={values.description}
                      errors={errors.description}
                      handleChange={handleChange}
                      placeholder={"Blockcerts me ha ayudado en..."}
                    />

                    <FormInputFile
                      md={12}
                      sm={12}
                      accept="*"
                      name="photo"
                      required={true}
                      label="Imagen"
                      controlId="photo"
                      value={values.photo}
                      errors={errors.photo}
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
          <Card style={{ maxWidth: "400px" }} className="mx-auto my-auto">
            {formData.photo && (
              <Card.Img
                variant="top"
                src={URL.createObjectURL(formData.photo)}
                alt={`Imagen de ${formData.name}`}
                style={{ maxWidth: "400px" }}
              />
            )}
            <Card.Body>
              <Card.Title>{formData.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {formData.user}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {formData.address}
              </Card.Subtitle>
              <Card.Text>{formData.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
