"use client";

import Link from "next/link";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { Breadcrumb, Row, Form } from "react-bootstrap";

import ActionToast from "@/components/main/ActionToast";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import { apiFetch } from "@/helpers/api-fetch";
import { ContactsPermissionsData, ContactsData } from "@/types/contatcs";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import FormInput from "@/components/form/FormInput";
import ContactsForm from "../form";

import { createContactScheme } from "@/validations/contacts-validation";

export default function CreateContact() {
  const router = useRouter();
  const [loadingForm, setLoadingForm] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  const [permissions, setPermissions] = useState({} as ContactsPermissionsData);

  const [initialValues, setInitialValues] = useState({});

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "CONTACTS_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        setPermissions(res.data);
        if (!res.data.LIST_CONTACTS) {
          return null;
        }

        setInitialValues({
          name: "",
          lastName: "",
          email: "",
          position: "",
        });

        setLoadingScreen(false);
      }
    });
  }, []);

  const createContact = async (values: any) => {
    setLoadingForm(true);
    apiFetch("contacts", "POST", values).then((res) => {
      if (res.success) {
        setShowToast(true);
        setLoadingForm(false);

        setToastTitle("Contactos");
        setToastVariant("success");
        setToastMessage(res.message);

        return setTimeout(() => {
          router.push("../contacts");
        }, 3000);
      }

      setShowToast(true);
      setLoadingForm(false);

      setToastTitle("Contactos");
      setToastVariant("danger");
      setToastMessage(res.message);

      return;
    });
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Crear contacto">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../admin/members"}>
            Perfil
          </Link>
          <Link className="breadcrumb-item" href={"../admin/members"}>
            Contactos
          </Link>
          <Breadcrumb.Item active>Crear</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        <Formik
          onSubmit={createContact}
          initialValues={initialValues}
          validationSchema={createContactScheme}
        >
          {({ values, errors, handleSubmit, handleChange, setFieldValue }) => (
            <ContactsForm
              values={values}
              errors={errors}
              loading={loadingForm}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
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
