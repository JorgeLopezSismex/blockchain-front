"use client";

import Link from "next/link";
import { Formik } from "formik";
import { Fragment, useEffect, useState } from "react";
import { ChangePasswordPermissionsData } from "@/types/auth";

import { Breadcrumb, Button, Row, Form } from "react-bootstrap";

import { apiFetch } from "@/helpers/api-fetch";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import FormInput from "@/components/form/FormInput";

import ActionToast from "@/components/main/ActionToast";
import AuthPasswordInput from "@/components/auth/AuthPasswordInput";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";

import { changePasswordSchema } from "@/validations/validation-schemas";

export default function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  const [permissions, setPermissions] = useState(
    {} as ChangePasswordPermissionsData
  );

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "AUTH_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        setPermissions(res.data);
        if (!res.data.UPDATE_PASSWORD) {
          return null;
        }

        setLoadingScreen(false);
      }
    });
  }, []);

  const changePassword = async (values: any) => {
    setLoading(true);
    apiFetch("authorization/change-password", "POST", values).then((res) => {
      if (!res.success) {
        setLoading(false);
        setShowToast(true);

        setToastVariant("danger");
        setToastMessage(res.message);
        setToastTitle("Cambiar contraseña");

        return;
      }

      setLoading(false);
      setShowToast(true);

      setToastVariant("success");
      setToastMessage(res.message);
      setToastTitle("Cambiar contraseña");

      return;
    });
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Cambiar contraseña">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../admin"}>
            Perfil
          </Link>
          <Breadcrumb.Item active>Cambiar contraseña</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        <Formik
          onSubmit={changePassword}
          validationSchema={changePasswordSchema}
          initialValues={{
            currentPassword: "",
            newPassword: "",
            repeatNewPassword: "",
          }}
        >
          {({ handleChange, handleSubmit, setFieldValue, values, errors }) => (
            <Fragment>
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  {/* <FormInput
                    md={12}
                    sm={12}
                    type="password"
                    disabled={false}
                    name="currentPassword"
                    label="Contraseña actual"
                    controlId="currentPassword"
                    handleChange={handleChange}
                    value={values.currentPassword}
                    errors={errors.currentPassword}
                    placeholder="Ingresa tu contraseña actual"
                  /> */}

                  <AuthPasswordInput
                    type="password"
                    name="currentPassword"
                    label="Contraseña actual"
                    value={values.currentPassword}
                    errors={errors.currentPassword}
                    handleChange={handleChange}
                    placeholder="Ingresa tu contraseña actual"
                  />

                  {/* <FormInput
                    md={12}
                    sm={12}
                    type="password"
                    disabled={false}
                    name="newPassword"
                    controlId="newPassword"
                    label="Nueva contraseña"
                    value={values.newPassword}
                    errors={errors.newPassword}
                    handleChange={handleChange}
                    placeholder="Ingresa tu nueva contraseña"
                  /> */}

                  <AuthPasswordInput
                    type="password"
                    name="newPassword"
                    label="Nueva contraseña"
                    value={values.newPassword}
                    errors={errors.newPassword}
                    handleChange={handleChange}
                    placeholder="Ingresa tu nueva contraseña"
                  />

                  {/* <FormInput
                    md={12}
                    sm={12}
                    type="password"
                    disabled={false}
                    name="repeatNewPassword"
                    handleChange={handleChange}
                    controlId="repeatNewPassword"
                    label="Repetir nueva contraseña"
                    value={values.repeatNewPassword}
                    errors={errors.repeatNewPassword}
                    placeholder="Repite tu nueva contraseña"
                  /> */}

                  <AuthPasswordInput
                    type="password"
                    name="repeatNewPassword"
                    label="Repetir nueva contraseña"
                    value={values.repeatNewPassword}
                    errors={errors.repeatNewPassword}
                    handleChange={handleChange}
                    placeholder="Repite tu nueva contraseña"
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <AdminFormSubmitButton loading={loading} />
                    <AdminFormBackButton
                      loading={loading}
                      backUrl="../profile"
                    />
                  </div>
                </Row>
              </Form>
            </Fragment>
          )}
        </Formik>
      </AdminCardContainer>

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
