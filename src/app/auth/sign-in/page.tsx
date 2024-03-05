"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, Fragment } from "react";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import { Col, Row, Form } from "react-bootstrap";

import AuthLink from "@/components/auth/AuthLink";
import AuthCheck from "@/components/auth/AuthCheck";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import ActionToast from "@/components/main/ActionToast";
import AuthReCaptcha from "@/components/auth/AuthReCaptcha";
import AuthPasswordInput from "@/components/auth/AuthPasswordInput";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import { apiFetch } from "@/helpers/api-fetch";
import { signInSchema } from "../../../validations/validation-schemas";

import styles from "../styles.module.css";

export default function SignIn() {
  const { Formik } = formik;
  const router = useRouter();
  const [recaptchaKey, setRecaptchaKey] = useState(1);

  const [loading, setLoading] = useState(false);
  const [loadingCheck, setLoadingCheck] = useState(true);
  const [loadignReCaptcha, setLoadingReCaptcha] = useState(true);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token != null) {
      checkSignIn(token);
    }

    return setLoadingCheck(false);
  }, []);

  const checkSignIn = async (token: string) => {
    const res = await apiFetch("authorization/check-sign-in", "POST", {
      token: token,
    });

    if (!res.success) {
      localStorage.removeItem("token");
      return;
    }

    router.replace("/admin");
    return;
  };

  const signIn = async (values: object) => {
    setLoading(true);
    const res = await apiFetch("authorization/sign-in", "POST", values);

    if (!res.success) {
      setLoading(false);
      setShowToast(true);

      setToastVariant("danger");
      setToastTitle("Autenticación");
      setToastMessage(res.message);

      setRecaptchaKey(recaptchaKey + 1);
      return;
    }

    localStorage.setItem("token", res.data);
    router.replace("/admin");
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

      <div className="d-flex justify-content-center">
        <h3>Iniciar sesión</h3>
      </div>

      <div className={styles.authFormTitle}>
        {loadingCheck ? (
          <Row style={{ marginTop: 30, marginBottom: 30 }}>
            <Col xs={12} className="d-flex justify-content-center">
              <AdminTableSpinner />
            </Col>
          </Row>
        ) : (
          <Fragment>
            <Formik
              onSubmit={signIn}
              validationSchema={signInSchema}
              initialValues={{
                email: "",
                password: "",
                rememberMe: false,
                reCaptcha: "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                setFieldValue,
                values,
                errors,
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
                    <AuthPasswordInput
                      type={"password"}
                      name={"password"}
                      label={"Contraseña"}
                      value={values.password}
                      errors={errors.password}
                      handleChange={handleChange}
                      placeholder={"Micontraseña123*"}
                    />
                  </Row>

                  <Row>
                    <AuthCheck
                      errors={errors}
                      text={"Recordarme"}
                      name={"rememberMe"}
                      handleChange={handleChange}
                    />
                  </Row>

                  <AuthReCaptcha
                    key={recaptchaKey}
                    errors={errors.reCaptcha}
                    setFieldValue={setFieldValue}
                    setLoadingReCaptcha={setLoadingReCaptcha}
                  />

                  <Row className="mb-3">
                    <AuthButton text={"Iniciar sesión"} loading={loading} />
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
              link={"sign-up"}
              text={"¿No tienes cuenta? - Regístrate aquí"}
            />
          </Fragment>
        )}
      </div>

      <ActionToast
        delay={3000}
        show={showToast}
        title={toastTitle}
        message={toastMessage}
        variant={toastVariant}
        onClose={() => setShowToast(false)}
      />
    </Fragment>
  );
}
