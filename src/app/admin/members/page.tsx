"use client";

import Link from "next/link";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { Breadcrumb, Button, Row, Form } from "react-bootstrap";

import AdminTable from "@/components/admin/AdminTable";
import ActionToast from "@/components/main/ActionToast";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminModalJorge from "@/components/admin/AdminModalJorge";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

import { apiFetch } from "@/helpers/api-fetch";
import { getRoles } from "@/utils/select-options/roles";
import { IssuersPermissionsData } from "@/types/issuers";
import membersTableColumns from "@/table-columns/members";
import { getIssuerOptionList } from "@/utils/select-options/issuers";
import { MemberData, MembersPermissionsData } from "@/types/members";

export default function MemberList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [isAdmin, setIsAdmin] = useState(false);
  const [actions, setActions] = useState(false);

  const [permissions, setPermissions] = useState({} as MembersPermissionsData);
  const [issuerPermissions, setIssuerPermissions] = useState(
    {} as IssuersPermissionsData
  );

  const [loadingModal, setLoadingModal] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  const [members, setMembers] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(true);
  const [selectedMember, setSelectedMember] = useState({} as MemberData);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    if (id == null || id == null || id == undefined) {
      // Permisos para miembros del usuario
      setActions(true);
      getMembersPermissions(getMembers());
      return;
    }

    // Permisos para miembros de un emisor
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "ISSUERS_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        setIssuerPermissions(res.data);

        if (res.data.LIST_ISSUER) {
          setIsAdmin(true);
        }

        if (!res.data.DETAIL_ISSUER) {
          return null;
        }

        // Miembros
        getMembersPermissions(getMembers(parseInt(id)));
      }
    });
  }, []);

  const getMembersPermissions = async (getMembers: any) => {
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "MEMBERS_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      console.log("Estos son los permisos del modulo de miembros", res);
      if (res.success) {
        setPermissions(res.data);
        if (!res.data.LIST_MEMBER) {
          return null;
        }

        getMembers();
      }
    });
  };

  const getMembers = async (issuerId: number | null = null) => {
    setLoadingMembers(true);

    const membersParams = new URLSearchParams();
    if (issuerId != null) {
      membersParams.append("issuerId", issuerId.toString());
    }

    const url =
      membersParams.toString() === ""
        ? "members"
        : `members?${membersParams.toString()}`;

    apiFetch(url).then((res) => {
      if (res.success) {
        setMembers(res.data);
        setLoadingScreen(false);
        setLoadingMembers(false);
      }
    });
  };

  const getFilteredMembers = async (values: any) => {
    const membersParams = new URLSearchParams();
    if (values.issuerId != null) {
      membersParams.append("issuerId", values.issuerId);
    }

    if (values.roleId != null) {
      membersParams.append("roleId", values.roleId);
    }

    setLoadingMembers(true);
    apiFetch(`members?${membersParams.toString()}`).then((res) => {
      if (res.success) {
        setMembers(res.data);
        setLoadingScreen(false);
        setLoadingMembers(false);
        console.log(res.data, "Estos son los miembros");
      }
    });
  };

  const deleteMember = async () => {
    setLoadingModal(true);
    apiFetch(`members/${selectedMember.memberId}`, "DELETE").then((res) => {
      setLoadingModal(false);
      setShowDeleteModal(false);

      if (res.success) {
        getMembers();

        setShowToast(true);
        setToastTitle("Miembros");
        setToastVariant("success");
        setToastMessage(res.message);

        return;
      }

      setShowToast(true);
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
      <AdminPageHeader title="Miembros">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Emisores</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      {!isAdmin ? null : (
        <AdminFilterContainer>
          <Formik
            onSubmit={getFilteredMembers}
            initialValues={{ issuerId: null, roleId: null }}
          >
            {({
              handleChange,
              handleSubmit,
              setFieldValue,
              values,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  {!isAdmin ? null : !actions ? null : (
                    <FormAsyncSelect
                      md={6}
                      sm={12}
                      errors={null}
                      label="Emisor"
                      name="issuerId"
                      disabled={false}
                      setFieldValue={setFieldValue}
                      placeholder="Selecciona un emisor"
                      getOptions={() => getIssuerOptionList()}
                    />
                  )}

                  <FormAsyncSelect
                    sm={12}
                    label="Rol"
                    name="roleId"
                    disabled={false}
                    md={!isAdmin ? 12 : !actions ? 12 : 6}
                    errors={errors.roleId}
                    setFieldValue={setFieldValue}
                    placeholder="Selecciona un rol"
                    getOptions={() => getRoles("MEMBERS")}
                  />
                </Row>

                <div className="d-flex justify-content-end">
                  <AdminFormSubmitButton
                    label="Filtrar"
                    loading={loadingMembers}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </AdminFilterContainer>
      )}

      <AdminCardContainer xs={12}>
        {loadingMembers ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable
            defaultData={members}
            columns={membersTableColumns(
              router,
              permissions,
              setSelectedMember,
              setShowDeleteModal,
              actions
            )}
          >
            {!permissions.CREATE_MEMBER ? null : !actions ? null : (
              <Button
                variant="primary"
                onClick={() => router.push("members/create")}
              >
                Nuevo
              </Button>
            )}
          </AdminTable>
        )}
      </AdminCardContainer>

      <AdminModalJorge
        showButtons={true}
        show={showDeleteModal}
        title="Eliminar miembro"
        primaryBtnVariant="danger"
        handleSubmit={deleteMember}
        modalLoading={loadingModal}
        handleClose={() => setShowDeleteModal(false)}
      >
        ¿Estás seguro de querer eliminar este miembro?
      </AdminModalJorge>

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
