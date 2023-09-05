"use client";

import * as formik from "formik";
import { useState, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import { apiFetch } from "../../../helpers/api-fetch";
import { signInSchema } from "../../../validations/validation-schemas";

import Image from "react-bootstrap/Image";

export default function Page() {
  const { Formik } = formik;
  const [loading, setLoading] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Notificación");
  const [toastMsg, setToastMsg] = useState("Mensage");

  return (
    <Row>
      <Col
        className="vh-100 padding-right-0"
        fluid
        style={{ backgroundColor: "orange" }}
      >
        <Formik
          validationSchema={signInSchema}
          initialValues={{ email: "Mark", password: "Otto", remember_me: 1 }}
          onSubmit={() => alert("Hola mundo")}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <AuthInput
                  type={"text"}
                  label={"Correo electrónico"}
                  name={"email"}
                  value={values.email}
                  handleChange={handleChange}
                  errors={errors.email}
                />
              </Row>

              <Row className="mb-3">
                <AuthInput
                  type={"password"}
                  label={"Contraseña"}
                  name={"password"}
                  value={values.password}
                  handleChange={handleChange}
                  errors={errors.password}
                />
              </Row>

              <Row className="mb-3">
                <AuthButton text={"Iniciar sesión"} loading={loading} />
              </Row>
            </Form>
          )}
        </Formik>
      </Col>
      <Col className="vh-100" fluid></Col>
    </Row>
  );
}
