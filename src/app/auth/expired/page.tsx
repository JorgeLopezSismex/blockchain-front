"use client";

import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { useState, Fragment } from "react";

import AuthLink from "@/components/auth/AuthLink";

import { apiFetch } from "@/helpers/api-fetch";

export default function Expired() {
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
        <h3>Enlace expirado</h3>
      </div>

      <p>
        La dirección a la que intenta acceder no es válida, ha expirado ó ya no
        esta disponible.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <AuthLink
          link={"sign-in"}
          text={"¿Ya tienes una cuenta? - Iniciar sesión"}
        />

        <AuthLink
          link={"sign-up"}
          text={"¿No tienes cuenta? - Regístrate aquí"}
        />

        <AuthLink link={"forgot-password"} text={"¿Olvidaste tu contraseña?"} />
      </div>
    </Fragment>
  );
}
