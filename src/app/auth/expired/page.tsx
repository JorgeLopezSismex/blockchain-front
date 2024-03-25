"use client";

import Image from "next/image";
import * as formik from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { useState, Fragment } from "react";

import AuthLink from "@/components/auth/AuthLink";

import { apiFetch } from "@/helpers/api-fetch";

export default function Expired() {
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

      <div className="d-flex justify-content-center">
        <h3>Enlace expirado</h3>
      </div>

      <p>
        La dirección a la que intenta acceder no es válida, ha expirado o ya no
        está disponible.
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
