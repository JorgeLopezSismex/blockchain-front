"use client";

import moment from "moment";
import Image from "next/image";
import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { useState, Fragment, useEffect } from "react";

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
import { faSleigh } from "@fortawesome/free-solid-svg-icons";

export default function ForgotPassword() {
  const { Formik } = formik;

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  const [showTimer, setShowTimer] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    let disabledUntil = localStorage.getItem("disabledUntil");
    if (disabledUntil == "" || disabledUntil == null) {
      setShowTimer(false);
      setDisableButton(false);

      return;
    }

    const date = moment.unix(parseInt(disabledUntil));
    if (!date.isValid()) {
      setShowTimer(false);
      setDisableButton(false);
      localStorage.removeItem("disabledUntil");

      return;
    }

    const currentDate = moment();
    if (date.isBefore(currentDate)) {
      setShowTimer(false);
      setDisableButton(false);
      localStorage.removeItem("disabledUntil");

      return;
    }

    setShowTimer(true);
    setDisableButton(true);
    return;
  }, []);

  const forgotPassword = async (values: ForgotPasswordData) => {
    setLoading(true);

    apiFetch("authorization/forgot-password", "POST", values).then((res) => {
      if (res.success) {
        setLoading(false);
        setShowToast(true);

        setToastVariant("success");
        setToastMessage(res.message);
        setToastTitle("Autenticación");

        /* Se definen los 30 segundos de espera para volver a hacer una solicitud. */
        localStorage.setItem(
          "disabledUntil",
          moment().add(30, "seconds").unix().toString()
        );

        setShowTimer(true);
        setDisableButton(true);

        return;
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
        <Image
          width={235}
          height={62.5}
          alt="SingularDocs"
          style={{ marginBottom: 20 }}
          src="/images/singulardocs_logo.png"
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
                    disabled={disableButton}
                    text={"Solicitar cambiar contraseña"}
                  />
                </Row>

                {!showTimer ? null : (
                  <AuthCountdownTimer
                    setShowTimer={setShowTimer}
                    setDisableButton={setDisableButton}
                  />
                )}
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
