"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState, Fragment, useEffect } from "react";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import { Col, Row, Form } from "react-bootstrap";

import AuthLink from "@/components/auth/AuthLink";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import ActionToast from "@/components/main/ActionToast";
import AuthPasswordInput from "@/components/auth/AuthPasswordInput";

import { apiFetch } from "@/helpers/api-fetch";
import { ResetPasswordData } from "@/types/auth";
import { resetPasswordSchema } from "@/validations/validation-schemas";

import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import styles from "../styles.module.css";

export default function ResetPassword() {
  const { Formik } = formik;
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [loadingCheck, setLoadingCheck] = useState(true);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    validateToken(token);
  }, []);

  const validateToken = async (token: string | null) => {
    if (token == null || token == "" || token == undefined) {
      router.replace("expired");
      return;
    }
    const res = await apiFetch("authorization/validate-token", "POST", {
      token: token,
    });

    if (!res.success) {
      router.replace("expired");
      return;
    }

    setLoadingCheck(false);
  };

  const resetPassword = async (values: ResetPasswordData) => {
    if (token == null || token == "" || token == undefined) {
      router.replace("expired");
      return;
    }

    values.token = token;
    setLoading(true);
    const res = await apiFetch("authorization/reset-password", "POST", values);

    if (!res.success) {
      setLoading(false);
      setShowToast(true);

      setToastVariant("danger");
      setToastTitle("Cambiar contraseña");
      setToastMessage(res.message);
      return false;
    }

    setLoading(false);
    setShowToast(true);

    setToastVariant("success");
    setToastTitle("Cambiar contraseña");
    setToastMessage(res.message);

    return true;
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
        {loadingCheck ? (
          <Fragment>
            <Row style={{ marginTop: 30, marginBottom: 30 }}>
              <Col xs={12} className="d-flex justify-content-center">
                <AdminTableSpinner />
              </Col>
              <Col
                xs={12}
                style={{ marginTop: 10 }}
                className="d-flex justify-content-center"
              >
                <h5>Cargando...</h5>
              </Col>
            </Row>
          </Fragment>
        ) : (
          <Fragment>
            <div className="d-flex justify-content-center">
              <h3>Nueva contraseña</h3>
            </div>

            <Formik
              validationSchema={resetPasswordSchema}
              initialValues={{
                token: "",
                password: "",
                repeatPassword: "",
              }}
              onSubmit={async (values, { resetForm }) => {
                let res = await resetPassword(values);
                if (res) {
                  resetForm({
                    values: {
                      token: "",
                      password: "",
                      repeatPassword: "",
                    },
                  });

                  setTimeout(() => {
                    router.replace("/auth/sign-in");
                  }, 2500);
                }
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    {/* <AuthInput
                      name={"password"}
                      type={"password"}
                      label={"Contraseña"}
                      value={values.password}
                      errors={errors.password}
                      handleChange={handleChange}
                      placeholder={"MiNuevaContraseña1*"}
                    /> */}

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

                  <Row className="mb-3">
                    {/* <AuthInput
                      type={"password"}
                      name={"repeatPassword"}
                      handleChange={handleChange}
                      label={"Repetir contraseña"}
                      value={values.repeatPassword}
                      errors={errors.repeatPassword}
                      placeholder={"MiNuevaContraseña1*"}
                    /> */}

                    <AuthPasswordInput
                      type={"password"}
                      name={"repeatPassword"}
                      label={"Repetir contraseña"}
                      value={values.repeatPassword}
                      errors={errors.repeatPassword}
                      handleChange={handleChange}
                      placeholder={"Micontraseña123*"}
                    />
                  </Row>

                  <Row className="mb-3">
                    <AuthButton text={"Cambiar contraseña"} loading={loading} />
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
              text={"¿No tienes cuenta? - Regístrate aquí"}
            />
          </Fragment>
        )}
      </div>

      <ActionToast
        delay={8000}
        show={showToast}
        title={toastTitle}
        variant={toastVariant}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />
    </Fragment>
  );
}
