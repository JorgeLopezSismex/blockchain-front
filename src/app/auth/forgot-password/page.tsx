"use client";

import moment from "moment";
import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { useState, Fragment } from "react";

import { Col, Row, Form } from "react-bootstrap";

import AuthLink from "@/components/auth/AuthLink";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import ActionToast from "@/components/main/ActionToast";
import AuthCountdownTimer from "@/components/auth/AuthCountdownTimer";

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

  const [showTimer, setShowTimer] = useState(false);

  const forgotPassword = async (values: ForgotPasswordData) => {
    const now = moment(); // Get current date/time
    const futureTime = now.add(120, "seconds"); // Add 30 seconds to the current time
    const unixTimestamp = futureTime.unix(); // Convert the updated time to Unix timestamp

    console.log(now, "Esto es ahora");
    console.log(now.add(30, "seconds"), "esto es el futuro");

    setShowTimer(true);

    return;

    setLoading(true);

    apiFetch("authorization/forgot-password", "POST", values).then((res) => {
      if (res.success) {
        setLoading(false);
        setShowToast(true);

        setToastVariant("success");
        setToastMessage(res.message);
        setToastTitle("Autenticación");

        localStorage.setItem("test", res.data);

        return true;
      }

      setLoading(false);
      setShowToast(true);

      setToastVariant("danger");
      setToastTitle("Autenticación");
      setToastMessage(res.message);

      return false;
    });

    return false;
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <img
          alt="SingularDocs logo"
          src="/images/singulardocs_logo.png"
          style={{ width: "60%", marginBottom: 20 }}
        />
      </div>

      <div className={styles.authFormTitle}>
        <Fragment>
          <div className="d-flex justify-content-center">
            <h3>Olvidé mi contraseña</h3>
          </div>

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

                {!showTimer ? null : <AuthCountdownTimer />}
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
            text={"¿No tienes cuenta? - Regístrate aquí"}
          />
        </Fragment>
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
