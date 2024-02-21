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
import AuthReCaptcha from "@/components/auth/AuthReCaptcha";

import { SignUpData } from "@/types/auth";
import { apiFetch } from "@/helpers/api-fetch";
import { signUpSchema } from "@/validations/validation-schemas";

import styles from "../styles.module.css";

export default function SignUp() {
  const { Formik } = formik;
  const router = useRouter();
  const [recaptchaKey, setRecaptchaKey] = useState(1);

  const [loading, setLoading] = useState(false);
  const [loadignReCaptcha, setLoadingReCaptcha] = useState(true);

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

    localStorage.setItem("token", res.data);
    setTimeout(() => {
      router.replace("/admin");
    }, 1500);

    return;
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

      <div className={styles.authTitle}>
        <div className="d-flex justify-content-center">
          <h3>Crear cuenta</h3>
        </div>

        <Fragment>
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
              reCaptcha: "",
            }}
          >
            {({
              errors,
              values,
              touched,
              handleSubmit,
              handleChange,
              setFieldValue,
            }) => (
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

                <AuthReCaptcha
                  key={recaptchaKey}
                  errors={errors.reCaptcha}
                  setFieldValue={setFieldValue}
                  setLoadingReCaptcha={setLoadingReCaptcha}
                />

                <Row className="mb-3">
                  <AuthButton text={"Registrarse"} loading={loading} />
                </Row>
              </Form>
            )}
          </Formik>

          <AuthLink
            link={"forgot-password"}
            text={"¿Olvidaste tu contraseña?"}
          />
          <br />
          <AuthLink
            link={"sign-in"}
            text={"¿Ya tienes una cuenta? - Iniciar sesión"}
          />
        </Fragment>
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
