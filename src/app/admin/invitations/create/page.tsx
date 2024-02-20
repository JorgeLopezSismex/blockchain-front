"use client";

import Link from "next/link";
import { Fragment, useState, useEffect, useContext } from "react";

import AccordionContext from "react-bootstrap/AccordionContext";

import { apiFetch } from "@/helpers/api-fetch";
import { InvitationsPermissionsData } from "@/types/invitation";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import { Formik } from "formik";
import FormInputFile from "@/components/form/FormInputFile";

import { Breadcrumb } from "react-bootstrap";

import invitationsBatchTableColumns from "@/table-columns/invitations-batch";

import AdminAlert from "@/components/admin/AdminAlert";
import InvitationsForm from "../form";
import InvitationsBatchForm from "../batchForm";

import ActionToast from "@/components/main/ActionToast";

import { createInvitationScheme } from "@/validations/invitation-validations";

import { createInvitationBatchScheme } from "@/validations/invitation-validations";

export default function CreateInvitation() {
  const [permissions, setPermissions] = useState(
    {} as InvitationsPermissionsData
  );

  const [loadingForm, setLoadingForm] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  const [batchResultData, setBatchResultData] = useState([] as object[]);

  const { activeEventKey } = useContext(AccordionContext);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "INVITATIONS_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        setPermissions(res.data);
        if (!res.data.CREATE_INVITATION) {
          return null;
        }

        setLoadingScreen(false);
      }
    });
  }, []);

  const createInvitation = async (values: any) => {
    setLoadingForm(true);
    apiFetch("invitations", "POST", values).then((res) => {
      if (res.success) {
        setShowToast(true);
        setLoadingForm(false);

        setToastVariant("success");
        setToastMessage(res.message);
        setToastTitle("Invitaciones");

        return;
      }

      setShowToast(true);
      setLoadingForm(false);

      setToastVariant("danger");
      setToastMessage(res.message);
      setToastTitle("Invitaciones");

      return;
    });
  };

  const batchInvitation = async (values: any) => {
    setBatchResultData([]);
    setLoadingForm(true);

    apiFetch("invitations/batch", "POST", values, true).then((res) => {
      if (res.success) {
        setBatchResultData(res.data);
        setLoadingForm(false);
      }
    });
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Crear invitación">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../invitations"}>
            Invitaciones
          </Link>
          <Breadcrumb.Item active>Crear</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        <Tabs
          className="mb-3"
          id="invitations-tab"
          defaultActiveKey="single-create"
        >
          <Tab eventKey="single-create" title="Invitación Individual">
            <Formik
              onSubmit={createInvitation}
              validationSchema={createInvitationScheme}
              initialValues={{ name: "", lastName: "", email: "" }}
            >
              {({ values, errors, handleSubmit, handleChange }) => (
                <InvitationsForm
                  values={values}
                  errors={errors}
                  loadingForm={loadingForm}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              )}
            </Formik>
          </Tab>
          <Tab eventKey="batch-create" title="Invitaciones por lote">
            <AdminAlert
              noPadding={true}
              variant="primary"
              title="¿Cómo crear invitaciones por lote?"
              text='Descarga la plantilla en formato .xlsx, llena las columnas solicitadas (Nombre, Apellido y Correo electrónico). Tras lo anterior, carga el archivo en el formulario, da clic en "validar" y después de recibir el resultado de la validación da clic en enviar para procesar las invitaciones.'
            />
            <Formik
              onSubmit={batchInvitation}
              validationSchema={createInvitationBatchScheme}
              initialValues={{
                file: null,
              }}
            >
              {({ values, errors, handleSubmit, setFieldValue }) => (
                <InvitationsBatchForm
                  values={values}
                  errors={errors}
                  loadingForm={loadingForm}
                  handleSubmit={handleSubmit}
                  setFieldValue={setFieldValue}
                  batchResultData={batchResultData}
                  invitationsBatchTableColumns={invitationsBatchTableColumns}
                />
              )}
            </Formik>
          </Tab>
        </Tabs>
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
