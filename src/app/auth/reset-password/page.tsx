"use client";

import * as formik from "formik";
import { useState, Fragment } from "react";

import styles from "../styles.module.css";
import "bootstrap/dist/css/bootstrap.css";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthLink from "../../components/auth/AuthLink";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import ActionToast from "../../components/main/ActionToast";

import { resetPassword } from "@/validations/validation-schemas";

export default function ResetPassword() {
  const { Formik } = formik;
  const [loading, setLoading] = useState(false);

  return (
    <Fragment>
      <div className={styles.authTitle}>
        <h2>Sismex - Blockchain</h2>
      </div>

      <div className={styles.authFormTitle}>
        <h3>Nueva contraseña</h3>
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
                  placeholder={"Micontraseña"}
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
                  placeholder={"Micontraseña123"}
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

        <AuthLink
          link={"sign-in"}
          text={"¿Ya tienes una cuenta? - Iniciar sesión"}
        />
        <br />
        <AuthLink
          link={"sign-up"}
          text={"¿No tienes cuenta? - Registrate aquí"}
        />
      </div>
    </Fragment>
  );
}
