"use client";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { useState, Fragment } from "react";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthLink from "../../components/auth/AuthLink";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import ActionToast from "../../components/main/ActionToast";

import { apiFetch } from "../../../helpers/api-fetch";
import { securityCode } from "../../../validations/validation-schemas";

import styles from "../styles.module.css";

export default function SecurityCode() {
  const { Formik } = formik;
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje");
  const [toastVariant, setToastVariant] = useState("success");

  const submitForm = async (values: object) => {
    setLoading(true);
    const res = await apiFetch("auth/sign-in", "POST", values);

    if (res.data == null) {
      setShowToast(true);
      setToastVariant("danger");
      setToastTitle("Autenticación");
      setToastMessage(res.message);
    }

    setLoading(false);
  };

  return (
    <Fragment>
      <div className={styles.authTitle}>
        <h2>Sismex - Blockchain</h2>
      </div>

      <div className={styles.authFormTitle}>
        <h3>Código de seguridad</h3>
        <Formik
          onSubmit={submitForm}
          validationSchema={securityCode}
          initialValues={{
            securityCode: "123",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <AuthInput
                  type={"text"}
                  label={"Código para cambio de contraseña"}
                  name={"securityCode"}
                  value={values.securityCode}
                  handleChange={handleChange}
                  errors={errors.securityCode}
                />
              </Row>

              <Row className="mb-3">
                <AuthButton text={"Verificar código"} loading={loading} />
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
      />
    </Fragment>
  );
}
