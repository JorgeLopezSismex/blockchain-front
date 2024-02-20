"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
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

import styles from "../styles.module.css";
import { apiFetch } from "@/helpers/api-fetch";

export default function SetPassword() {
  const { Formik } = formik;
  const router = useRouter();
  const [recaptchaKey, setRecaptchaKey] = useState(1);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(false);
  const [loadignReCaptcha, setLoadingReCaptcha] = useState(true);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  const setPassword = async (values: any) => {
    setLoading(true);
    const res = await apiFetch(
      "authorization/set-member-password",
      "POST",
      values
    );

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
    setToastMessage(res.message);
    setToastTitle("Autenticación");

    localStorage.setItem("token", res.data);
    setTimeout(() => {
      router.replace("/admin");
    }, 1000);

    return;
  };

  useEffect(() => {
    if (token == null || token == "" || token == undefined) {
      router.replace("expired");
      return;
    }

    apiFetch("authorization/validate-new-member-set-password-token", "POST", {
      token: token,
    }).then((res) => {
      console.log("Esta es la respueta del token", res);

      if (!res.success) {
        router.replace("expired");
        return;
      }

      setLoading(false);
    });
  }, []);

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
          <h3>Nueva contraseña</h3>
        </div>

        <Fragment>
          <Formik
            onSubmit={setPassword}
            validationSchema={null}
            initialValues={{
              password: "",
              repeatPassword: "",
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
                  <AuthButton text={"Asignar contraseña"} loading={loading} />
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
