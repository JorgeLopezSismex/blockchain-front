"use client";

import Link from "next/link";
import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { useState, Fragment } from "react";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import { signUpSchema } from "@/validations/validation-schemas";

export default function ForgotPassword() {
  const { Formik } = formik;
  const [loading, setLoading] = useState(false);

  return (
    <Fragment>
      <div style={{ paddingTop: 7, paddingBottom: 8 }}>
        <h1>Sismex - Blockchain</h1>
      </div>

      <div style={{ paddingTop: 24, paddingBottom: 24 }}>
        <h1>Olvide mi contraseña</h1>
        <Formik
          validationSchema={signUpSchema}
          initialValues={{
            email: "Mark",
            password: "Otto",
            remember_me: 1,
          }}
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
                <AuthButton
                  text={"Solicitar cambiar contraseña"}
                  loading={loading}
                />
              </Row>
            </Form>
          )}
        </Formik>
        <Link href={"sign-in"}>¿Tienes una cuenta? - Iniciar sesión</Link>
        <br />
        <Link href={"sign-up"}>¿No tienes cuenta? - Registrate</Link>
      </div>
    </Fragment>
  );
}
