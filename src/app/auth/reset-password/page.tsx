"use client";

import * as formik from "formik";
import { useState, Fragment } from "react";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import { resetPassword } from "@/validations/validation-schemas";

export default function ResetPassword() {
  const { Formik } = formik;
  const [loading, setLoading] = useState(false);

  return (
    <Fragment>
      <div style={{ paddingTop: 7, paddingBottom: 8 }}>
        <h1>Sismex - Blockchain</h1>
      </div>

      <div style={{ paddingTop: 24, paddingBottom: 24 }}>
        <h1>Nueva contraseña</h1>
        <Formik
          validationSchema={resetPassword}
          initialValues={{
            password: "",
            repeatPassword: "",
          }}
          onSubmit={() => alert("Hola mundo")}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
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
                <AuthInput
                  type={"password"}
                  label={"Repetir contraseña"}
                  name={"repeatPassword"}
                  value={values.repeatPassword}
                  handleChange={handleChange}
                  errors={errors.repeatPassword}
                />
              </Row>

              <Row className="mb-3">
                <AuthButton text={"Cambiar contraseña"} loading={loading} />
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}
