"use client";

import Link from "next/link";
import { Fragment, useState, useEffect, useRef } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";

import { Formik } from "formik";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import ActionToast from "@/components/main/ActionToast";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import { apiFetch } from "@/helpers/api-fetch";
import { TemplateData, TemplatesPermissionsData } from "@/types/templates";

import TemplatesForm from "../form";

import { createTemplateScheme } from "@/validations/templates-validation";

export default function TemplateEditor() {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingForm, setLoadingForm] = useState(false);

  const [permissions, setPermissions] = useState(
    {} as TemplatesPermissionsData
  );

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  const emailEditorRef = useRef<EditorRef>(null);
  const [initialValues, setInitialValues] = useState({});

  const exportHtml = () => {
    alert("Se crea el string");
    const unlayer = emailEditorRef.current?.editor;
    console.log(emailEditorRef);

    unlayer?.exportHtml(function (data) {});

    unlayer?.exportHtml(
      (data: any) => {
        const { design, html } = data;
        // console.log("exportHtml", html);

        var json = {
          name: "hola",
          html: html,
          design: design,
        };

        console.log(json);
      },
      {
        cleanup: true,
        minify: true,
      }
    );
  };

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "TEMPLATES_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (!res.success) {
        return alert("Ocurrió un error.");
      }

      setPermissions(res.data);
      if (!res.data.CREATE_TEMPLATE) {
        return alert("No tienes permisos para entrar a esta pantalla.");
      }

      setInitialValues({
        name: null,
        html: null,
        design: null,
      });

      setLoadingScreen(false);
    });
  }, []);

  const createTemplate = async (values: any) => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(
      (data: any) => {
        const { design, html } = data;

        values.html = html;
        values.design = design;

        setLoadingForm(true);
        apiFetch("templates", "POST", values).then((res) => {
          if (res.success) {
            setShowToast(true);
            setLoadingForm(false);

            setToastTitle("Plantillas");
            setToastVariant("success");
            setToastMessage(res.message);

            return;
          }
          setShowToast(true);
          setLoadingForm(false);

          setToastTitle("Plantillas");
          setToastVariant("danger");
          setToastMessage(res.message);

          return;
        });
      },
      {
        cleanup: true,
        minify: true,
      }
    );
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Plantillas">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../../admin/templates"}>
            Plantillas
          </Link>
          <Breadcrumb.Item active>Crear</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        <Formik
          onSubmit={createTemplate}
          initialValues={initialValues}
          validationSchema={createTemplateScheme}
        >
          {({ values, errors, handleSubmit, handleChange, setFieldValue }) => (
            <Fragment>
              <TemplatesForm
                editorKey={1}
                values={values}
                errors={errors}
                setEditorKey={null}
                loading={loadingForm}
                loadDesign={() => null}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
                emailEditorRef={emailEditorRef}
              />
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
