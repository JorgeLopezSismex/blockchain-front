"use client";

import { useState, Fragment } from "react";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthLink from "@/components/auth/AuthLink";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import ActionToast from "@/components/main/ActionToast";

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
    const res = await apiFetch("authorization/forgot-password", "POST", values);

    if (res.success) {
      setLoading(false);
      setShowToast(true);

      setToastVariant("success");
      setToastTitle("Autenticación");
      setToastMessage(res.message);
      return true;
    }

    setLoading(false);
    setShowToast(true);

    setToastVariant("danger");
    setToastTitle("Autenticación");
    setToastMessage(res.message);

    return false;
  };

  return (
    <Fragment>
      <div className={styles.authTitle}>
        <h2>Sismex - Blockchain</h2>
      </div>

      <div className={styles.authFormTitle}>
        <h3>Olvide mi contraseña</h3>
        <Formik
          validationSchema={forgotPasswordSchema}
          initialValues={{
            email: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            let res = await forgotPassword(values);
            if (res) {
              resetForm({
                values: {
                  email: "",
                },
              });
            }
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
                <AuthButton
                  loading={loading}
                  text={"Solicitar cambiar contraseña"}
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
        delay={8000}
        show={showToast}
        title={toastTitle}
        message={toastMessage}
        variant={toastVariant}
        onClose={() => setShowToast(false)}
      />
    </Fragment>
  );
}
