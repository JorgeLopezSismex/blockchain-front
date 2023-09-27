"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState, Fragment, useEffect } from "react";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthLink from "../../components/auth/AuthLink";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import ActionToast from "../../components/main/ActionToast";

import { apiFetch } from "@/helpers/api-fetch";
import { ResetPasswordData } from "@/types/auth";
import { resetPasswordSchema } from "@/validations/validation-schemas";

import styles from "../styles.module.css";

export default function ResetPassword() {
  const { Formik } = formik;
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token == null || token == "" || token == undefined) {
      router.replace("no-token");
      return;
    }

    // Enviar peticion para validar token
  }, []);

  const resetPassword = async (values: ResetPasswordData) => {
    alert("Se resetea la contraseña");
  };

  return (
    <Fragment>
      <div className={styles.authTitle}>
        <p>Search: {token}</p>
        <h2>Sismex - Blockchain</h2>
      </div>

      <div className={styles.authFormTitle}>
        <h3>Nueva contraseña</h3>
        <Formik
          onSubmit={resetPassword}
          validationSchema={resetPasswordSchema}
          initialValues={{
            password: "",
            repeatPassword: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <AuthInput
                  type={"password"}
                  label={"Contraseña"}
                  name={"password"}
                  value={values.password}
                  placeholder={"Micontraseña"}
                  handleChange={handleChange}
                  errors={errors.password}
                />
              </Row>

              <Row className="mb-3">
                <AuthInput
                  type={"password"}
                  label={"Repetir contraseña"}
                  name={"repeatPassword"}
                  value={values.repeatPassword}
                  placeholder={"Micontraseña123"}
                  handleChange={handleChange}
                  errors={errors.repeatPassword}
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
          text={"¿No tienes cuenta? - Registrate aquí"}
        />
      </div>
    </Fragment>
  );
}
