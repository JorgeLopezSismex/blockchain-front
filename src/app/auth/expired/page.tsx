"use client";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { useState, Fragment } from "react";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import AuthLink from "@/components/auth/AuthLink";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import ActionToast from "@/components/main/ActionToast";

import { apiFetch } from "@/helpers/api-fetch";

import styles from "../styles.module.css";

export default function Expired() {
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
        <h3>Enlace expirado</h3>
        <p>
          La dirrección a la que intenta acceder no es válida, ha expirado ó ya
          no esta disponible.
        </p>

        <AuthLink
          link={"sign-in"}
          text={"¿Ya tienes una cuenta? - Iniciar sesión"}
        />
        <br />
        <AuthLink
          link={"sign-up"}
          text={"¿No tienes cuenta? - Registrate aquí"}
        />
        <br />
        <AuthLink link={"forgot-password"} text={"¿Olvidaste tu contraseña?"} />
      </div>
    </Fragment>
  );
}
