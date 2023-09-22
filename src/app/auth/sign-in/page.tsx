"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, Fragment } from "react";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthLink from "../../components/auth/AuthLink";
import AuthCheck from "../../components/auth/AuthCheck";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import ActionToast from "../../components/main/ActionToast";

import { apiFetch } from "@/helpers/api-fetch";
import { signInSchema } from "../../../validations/validation-schemas";

import styles from "../styles.module.css";

export default function SignIn() {
  const { Formik } = formik;
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    // To do: Verificar si hay una sesíon iniciada.
  }, []);

  const signIn = async (values: object) => {
    setLoading(true);
    const res = await apiFetch("authorization/sign-in", "POST", values);

    if (!res.success) {
      setLoading(false);
      setShowToast(true);

      setToastVariant("danger");
      setToastTitle("Autenticación");
      setToastMessage(res.message);
      return;
    }

    router.replace("/admin");
    return;
  };

  return (
    <Fragment>
      <div className={styles.authTitle}>
        <h2>Sismex - Blockchain</h2>
      </div>

      <div className={styles.authFormTitle}>
        <h3>Inicio de sesión</h3>
        <Formik
          onSubmit={signIn}
          validationSchema={signInSchema}
          initialValues={{
            email: "",
            password: "",
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

        <AuthLink link={"forgot-password"} text={"¿Olvidaste tu contraseña?"} />
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
        delay={3000}
      />
    </Fragment>
  );
}
