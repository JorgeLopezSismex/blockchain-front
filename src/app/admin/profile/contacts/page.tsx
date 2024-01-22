"use client";

import Link from "next/link";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { Breadcrumb, Button, Row, Form } from "react-bootstrap";

import AdminTable from "@/components/admin/AdminTable";
import contactsTableColumns from "@/table-columns/contacts";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminModalJorge from "@/components/admin/AdminModalJorge";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

import { apiFetch } from "@/helpers/api-fetch";
import { getIssuerOptionList } from "@/utils/select-options/issuers";
import { ContactsPermissionsData, ContactsData } from "@/types/contatcs";

export default function ContatcsList() {
  const router = useRouter();

  const [permissions, setPermissions] = useState({} as ContactsPermissionsData);

  const [loadingModal, setLoadingModal] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingContacts, setLoadingContacts] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({} as ContactsData);

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

        getContacts();
      }
    });
  }, []);

  const getContacts = async () => {
    setLoadingContacts(true);
    apiFetch("contacts").then((res) => {
      console.log("Estos son los contacots", res);
      if (res.success) {
        setContacts(res.data);
        setLoadingContacts(false);
        setLoadingScreen(false);
      }
    });
  };

  const getFilteredContacts = async (values: any) => {
    const contactsParams = new URLSearchParams();
    if (values.issuerId != null) {
      contactsParams.append("issuerId", values.issuerId);
    }

    setLoadingContacts(true);
    apiFetch(`contacts?${contactsParams.toString()}`).then((res) => {
      if (res.success) {
        setContacts(res.data);

        setLoadingContacts(false);
        setLoadingScreen(false);
      }
    });
  };

  const deleteContact = async () => {};

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Contactos">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../admin"}>
            Perfil
          </Link>
          <Breadcrumb.Item active>Contactos</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminFilterContainer>
        <Formik
          onSubmit={getFilteredContacts}
          initialValues={{ issuerId: null }}
        >
          {({ handleChange, handleSubmit, setFieldValue, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <FormAsyncSelect
                  sm={12}
                  md={12}
                  errors={null}
                  label="Emisor"
                  disabled={false}
                  name="issuerId"
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un emisor"
                  getOptions={() => getIssuerOptionList()}
                />
              </Row>

              <div className="d-flex justify-content-end">
                <AdminFormSubmitButton
                  label="Filtrar"
                  loading={loadingContacts}
                />
              </div>
            </Form>
          )}
        </Formik>
      </AdminFilterContainer>

      <AdminCardContainer xs={12}>
        {loadingContacts ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable
            defaultData={contacts}
            columns={contactsTableColumns(
              router,
              permissions,
              setSelectedContact,
              setShowDeleteModal
            )}
          >
            <Link href={"/admin/profile/contacts/create"}>
              <Button
                variant="primary"
                disabled={!permissions.CREATE_CONTACT ? true : false}
              >
                Nuevo
              </Button>
            </Link>
          </AdminTable>
        )}
      </AdminCardContainer>

      <AdminModalJorge
        showButtons={true}
        show={showDeleteModal}
        title="Eliminar contacto"
        primaryBtnVariant="danger"
        modalLoading={loadingModal}
        handleSubmit={deleteContact}
        handleClose={() => setShowDeleteModal(false)}
      >
        ¿Estás seguro de querer eliminar este contacto?
      </AdminModalJorge>
    </Fragment>
  );
}
