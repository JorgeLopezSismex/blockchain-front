"use client";

import { useState, Fragment } from "react";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthLink from "../../components/auth/AuthLink";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import ActionToast from "../../components/main/ActionToast";

import { apiFetch } from "@/helpers/api-fetch";
import { ForgotPasswordData } from "@/types/auth";
import { forgotPasswordSchema } from "@/validations/validation-schemas";

import styles from "../styles.module.css";

export default function ForgotPassword() {
  const { Formik } = formik;

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  const forgotPassword = async (values: ForgotPasswordData) => {
    setLoading(true);
    const res = await apiFetch("authorization/reset-password", "POST", values);

    if (res.success) {
      setLoading(false);
      setShowToast(true);

      setToastVariant("success");
      setToastTitle("Autenticación");
      setToastMessage(res.message);
      return;
    }
  };

  return (
    <Fragment>
      <div className={styles.authTitle}>
        <h2>Sismex - Blockchain</h2>
      </div>

      <div className={styles.authFormTitle}>
        <h3>Olvide mi contraseña</h3>
        <Formik
          onSubmit={forgotPassword}
          validationSchema={forgotPasswordSchema}
          initialValues={{
            email: "",
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
                <AuthButton
                  text={"Solicitar cambiar contraseña"}
                  loading={loading}
                />
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

      <ActionToast
        variant={toastVariant}
        show={showToast}
        title={toastTitle}
        message={toastMessage}
        onClose={() => setShowToast(false)}
        delay={6000}
      />
    </Fragment>
  );
}
