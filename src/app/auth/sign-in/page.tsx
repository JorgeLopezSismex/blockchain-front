"use client";

import Link from "next/link";
import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { useState, Fragment } from "react";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthCheck from "../../components/auth/AuthCheck";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import { apiFetch } from "../../../helpers/api-fetch";
import { signInSchema } from "../../../validations/validation-schemas";

export default function Page() {
  const { Formik } = formik;
  const [loading, setLoading] = useState(false);

  const submitForm = async (values: object) => {
    // setLoading(true);
    // const res = await apiFetch("auth/sign-in", "POST", values);
    // console.log(res);
    // setLoading(false);
    console.log(values);
  };

  return (
    <Fragment>
      <div style={{ paddingTop: 7, paddingBottom: 8 }}>
        <h1>Sismex - Blockchain</h1>
      </div>

      <div style={{ paddingTop: 24, paddingBottom: 24 }}>
        <h1>Inicio de sesión</h1>
        <Formik
          onSubmit={submitForm}
          validationSchema={signInSchema}
          initialValues={{
            email: "jalopez@sismex.com",
            password: "Jalhsismex21*",
            rememberMe: false,
          }}
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

              <Row>
                <AuthCheck
                  text={"Recordarme"}
                  name={"rememberMe"}
                  handleChange={handleChange}
                  errors={errors}
                />
              </Row>

              <Row className="mb-3">
                <AuthButton text={"Iniciar sesión"} loading={loading} />
              </Row>
            </Form>
          )}
        </Formik>
        <Link href={"forgot-password"}>¿Olvidaste tu contraseña?</Link>
        <br />
        <Link href={"sign-up"}>¿No tienes cuenta? - Registrate</Link>
      </div>
    </Fragment>
  );
}
