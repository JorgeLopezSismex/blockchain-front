"use client";

import Link from "next/link";
import { Formik } from "formik";
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

export default function UpdateMember() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

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
        if (!res.data.UPDATE_MEMBER) {
          return null;
        }

        getMember();
        setLoadingScreen(false);
      }
    });
  }, []);

  const getMember = async () => {
    setLoadingMember(true);
    apiFetch(`members/${id}`).then((res) => {
      if (res.success) {
        const member = res.data as MemberData;
        setInitialValues({
          name: member.name,
          lastName: member.lastName,
          email: member.email,
          roleId: member.roleId,
        });

        setMember(res.data);
        setLoadingMember(false);
      }
    });
  };

  const updateMember = async (values: any) => {
    setLoadingForm(true);
    apiFetch(`members/${id}`, "PUT", values).then((res) => {
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
      <AdminPageHeader title="Editar miembro">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../admin/members"}>
            Miembros
          </Link>
          <Breadcrumb.Item active>Editar</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        {loadingMember ? (
          <AdminTableSpinner />
        ) : (
          <Formik
            onSubmit={updateMember}
            initialValues={initialValues}
            validationSchema={null}
          >
            {({
              values,
              errors,
              handleSubmit,
              handleChange,
              setFieldValue,
            }) => (
              <MembersForm
                values={values}
                errors={errors}
                member={member}
                newMember={false}
                getRoles={getRoles}
                loading={loadingForm}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
            )}
          </Formik>
        )}
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
