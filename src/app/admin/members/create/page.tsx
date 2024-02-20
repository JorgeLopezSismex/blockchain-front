"use client";

import Link from "next/link";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { Breadcrumb, Row, Form } from "react-bootstrap";

import ActionToast from "@/components/main/ActionToast";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import MembersForm from "../form";
import { MemberData } from "@/types/members";
import { apiFetch } from "@/helpers/api-fetch";
import { getRoles } from "@/utils/select-options/roles";
import { createMemberScheme } from "@/validations/member-validations";

export default function CreateMember() {
  const [loadingForm, setLoadingForm] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingMember, setLoadingMember] = useState(true);

  const [initialValues, setInitialValues] = useState({});
  const [member, setMember] = useState({} as MemberData);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "MEMBERS_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        if (!res.data.CREATE_MEMBER) {
          return null;
        }

        setInitialValues({
          name: null,
          lastName: null,
          email: "",
          roleId: null,
        });

        setLoadingScreen(false);
      }
    });
  }, []);

  const createMember = async (values: any) => {

    setLoadingForm(true);
    apiFetch("members", "POST", values).then((res) => {
      if (res.success) {
        setShowToast(true);
        setLoadingForm(false);

        setToastTitle("Miembros");
        setToastVariant("success");
        setToastMessage(res.message);

        return;
      }

      setShowToast(true);
      setLoadingForm(false);

      setToastTitle("Miembros");
      setToastVariant("danger");
      setToastMessage(res.message);

      return;
    });
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Crear miembro">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../members"}>
            Miembros
          </Link>
          <Breadcrumb.Item active>Crear</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        <Formik
          onSubmit={createMember}
          initialValues={initialValues}
          validationSchema={createMemberScheme}
        >
          {({ values, errors, handleSubmit, handleChange, setFieldValue }) => (
            <MembersForm
              values={values}
              errors={errors}
              member={member}
              newMember={true}
              getRoles={getRoles}
              loading={loadingForm}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
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
