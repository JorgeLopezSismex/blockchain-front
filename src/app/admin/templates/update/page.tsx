"use client";

import Link from "next/link";
import { Formik } from "formik";
import { useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState, useRef } from "react";
import axios from "axios";

import { Breadcrumb } from "react-bootstrap";

import ActionToast from "@/components/main/ActionToast";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import TemplatesForm from "../form";
import { apiFetch } from "@/helpers/api-fetch";
import { TemplateData } from "@/types/templates";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";

export default function UpdateTemplate() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [editorKey, setEditorKey] = useState(1);
  const emailEditorRef = useRef<EditorRef>(null);

  const [loadingForm, setLoadingForm] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingTemplate, setLoadingTemplate] = useState(true);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  const [template, setTemplate] = useState({} as TemplateData);

  const [design, setDesign] = useState({} as any);
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "TEMPLATES_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      console.log("Estos son los permisos", res);
      if (res.success) {
        if (!res.data.UPDATE_TEMPLATE) {
          return null;
        }

        getTemplate();

        if (emailEditorRef.current) {
          emailEditorRef.current.loadDesign(design);
        }
      }
    });
  }, [emailEditorRef]);

  const getTemplate = async () => {
    console.log("Se solicita el template");
    setLoadingTemplate(true);
    apiFetch(`templates/${id}`).then((res) => {
      console.log("Esto es el template", res);
      if (res.success) {
        const template = res.data as TemplateData;

        setInitialValues({
          name: template.name,
        });

        getDesign(template);
      }
    });
  };

  const getDesign = async (template: TemplateData) => {
    fetch(
      "http://68.178.207.49:8109/Files/Issuers/Mw==/Templates/bcWi1Q6kvGsIj4IxQb1vQCzbCTPZmNfvULWFOjyNmr1zBOIFUx/bcWi1Q6kvGsIj4IxQb1vQCzbCTPZmNfvULWFOjyNmr1zBOIFUx-design.json",
      {
        mode: "no-cors",
      }
    ).then((res) => {
      console.log("Estos son los datos", res);
    });

    // try {
    //   const response = await axios.get(
    //     "http://68.178.207.49:8109/Files/Issuers/Mw==/Templates/bcWi1Q6kvGsIj4IxQb1vQCzbCTPZmNfvULWFOjyNmr1zBOIFUx/bcWi1Q6kvGsIj4IxQb1vQCzbCTPZmNfvULWFOjyNmr1zBOIFUx-design.json"
    //   );
    //   return response.data;
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    //   return null;
    // }

    // fetch(
    //   "http://68.178.207.49:8109/Files/Issuers/Mw==/Templates/bcWi1Q6kvGsIj4IxQb1vQCzbCTPZmNfvULWFOjyNmr1zBOIFUx/bcWi1Q6kvGsIj4IxQb1vQCzbCTPZmNfvULWFOjyNmr1zBOIFUx-design.json"
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setDesign(data);
    //     loadDesign();
    //     setLoadingScreen(false);
    //   });
  };

  const updateTemplate = async (values: any) => {
    alert("Se ejecuta la actualizacion");
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data: any) => {
      const { design, html } = data;

      values.html = html;
      values.design = design;

      setLoadingForm(true);

      console.log("Esto es lo que envio", values);
      return;

      apiFetch(`templates/${id}`, "PUT", values).then((res) => {
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
    });
  };

  const loadDesign = async () => {
    console.log(initialValues, "Estos son los valores iniciales");
    if (emailEditorRef.current) {
      emailEditorRef.current.loadDesign(design);
    }
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Editar plantilla">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../../admin/templates"}>
            Plantillas
          </Link>
          <Breadcrumb.Item active>Editar</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        <Formik onSubmit={updateTemplate} initialValues={initialValues}>
          {({ values, errors, handleSubmit, handleChange, setFieldValue }) => (
            <TemplatesForm
              values={values}
              errors={errors}
              loading={loadingForm}
              editorKey={editorKey}
              loadDesign={loadDesign}
              setEditorKey={setEditorKey}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
              emailEditorRef={emailEditorRef}
            />
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
