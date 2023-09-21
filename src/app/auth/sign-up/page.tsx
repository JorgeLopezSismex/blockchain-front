"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, Fragment } from "react";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthLink from "../../components/auth/AuthLink";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import ActionToast from "../../components/main/ActionToast";

import { apiFetch } from "@/helpers/api-fetch";
import { signUpSchema } from "@/validations/validation-schemas";

import styles from "../styles.module.css";

export default function SignUp() {
  const { Formik } = formik;

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  const signUp = async (values: object) => {
    setLoading(true);
    const res = await apiFetch("authorization/register-user", "POST", values);

    setLoading(false);
    if (!res.success) {
      setLoading(false);
      setShowToast(true);

      setToastVariant("danger");
      setToastTitle("Autenticación");
      setToastMessage(res.message);
      return;
    }

    console.log(values);
  };

  return (
    <Fragment>
      <div className={styles.authTitle}>
        <h2>Sismex - Blockchain</h2>
      </div>

      <div className={styles.authFormTitle}>
        <h3>Crear cuenta</h3>
        <Formik
          onSubmit={signUp}
          validationSchema={signUpSchema}
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
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
                  placeholder={"ejemplo@gmail.com"}
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
                  placeholder={"Micontraseña123*"}
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
                  placeholder={"Micontraseña123*"}
                  handleChange={handleChange}
                  errors={errors.repeatPassword}
                />
              </Row>

              <Row className="mb-3">
                <AuthButton text={"Registrarse"} loading={loading} />
              </Row>
            </Form>
          )}
        </Formik>

        <AuthLink link={"forgot-password"} text={"¿Olvidaste tu contraseña?"} />
        <br />
        <AuthLink
          link={"sign-in"}
          text={"¿Ya tienes una cuenta? - Iniciar sesión"}
        />
      </div>
    </Fragment>
  );
}
