"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, Fragment } from "react";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthLink from "@/components/auth/AuthLink";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import ActionToast from "@/components/main/ActionToast";

import { SignUpData } from "@/types/auth";
import { apiFetch } from "@/helpers/api-fetch";
import { signUpSchema } from "@/validations/validation-schemas";

import styles from "../styles.module.css";

export default function SignUp() {
  const { Formik } = formik;
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  const signUp = async (values: SignUpData) => {
    values.name = "";
    values.phone = "";
    values.address = "";
    values.stateID = 0;

    setLoading(true);
    const res = await apiFetch("authorization/sign-up", "POST", values);

    if (!res.success) {
      setLoading(false);
      setShowToast(true);

      setToastVariant("danger");
      setToastTitle("Autenticación");
      setToastMessage(res.message);
      return;
    }

    setLoading(false);
    setShowToast(true);

    setToastVariant("success");
    setToastTitle("Autenticación");
    setToastMessage(res.message);

    setTimeout(() => {
      router.replace("/auth/sign-in");
    }, 6000);

    return;
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
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
            phone: "",
            address: "",
            stateID: 0,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <AuthInput
                  type={"text"}
                  name={"email"}
                  value={values.email}
                  errors={errors.email}
                  handleChange={handleChange}
                  label={"Correo electrónico"}
                  placeholder={"ejemplo@gmail.com"}
                />
              </Row>

              <Row className="mb-3">
                <AuthInput
                  type={"password"}
                  name={"password"}
                  label={"Contraseña"}
                  value={values.password}
                  errors={errors.password}
                  handleChange={handleChange}
                  placeholder={"Micontraseña123*"}
                />
              </Row>

              <Row className="mb-3">
                <AuthInput
                  type={"password"}
                  name={"repeatPassword"}
                  handleChange={handleChange}
                  label={"Repetir contraseña"}
                  value={values.repeatPassword}
                  errors={errors.repeatPassword}
                  placeholder={"Micontraseña123*"}
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

      <ActionToast
        delay={6000}
        show={showToast}
        title={toastTitle}
        variant={toastVariant}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />
    </Fragment>
  );
}
