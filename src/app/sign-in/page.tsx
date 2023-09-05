"use client";

import "bootstrap/dist/css/bootstrap.css";

import * as formik from "formik";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import * as yup from "yup";
import { InputGroup } from "react-bootstrap";

import { apiFetch } from "../helpers/api-fetch";
import { signInSchema } from "../validations/validation-schemas";

export default function Page() {
  const { Formik } = formik;

  return (
    <Formik
      validationSchema={signInSchema}
      initialValues={{ email: "Mark", password: "Otto", remember_me: 1 }}
      onSubmit={(values) => {
        apiFetch("auth/sign-in", "POST", values);
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Correo electrónico</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Button type="submit">Iniciar sesión</Button>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
