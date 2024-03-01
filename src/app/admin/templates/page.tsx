"use client";

import moment from "moment";
import Link from "next/link";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Fragment, useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import AdminTable from "@/components/admin/AdminTable";
import ActionToast from "@/components/main/ActionToast";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";
import AdminModalJorge from "@/components/admin/AdminModalJorge";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

import { apiFetch } from "@/helpers/api-fetch";
import templatesTableColums from "@/table-columns/templates";
import { getIssuerOptionList } from "@/utils/select-options/issuers";
import { TemplateData, TemplatesPermissionsData } from "@/types/templates";
import AdminCertificateViwer from "@/components/admin/AdminCertificateViwer";

export default function TemplateList() {
  const router = useRouter();
  const [modalLoading, setModalLoading] = useState(false);

  const [loadingHtml, setLoadingHtml] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingTemplates, setLoadingTemplates] = useState(false);

  const [permissions, setPermissions] = useState(
    {} as TemplatesPermissionsData
  );

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState({} as TemplateData);

  const [htmlString, setHtmlString] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "TEMPLATES_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (!res.success) {
        return alert("Ocurrió un error.");
      }

      setPermissions(res.data);
      if (!res.data.LIST_TEMPLATE) {
        return alert("No tienes permisos para entrar a esta pantalla.");
      }

      getTemplates();
    });
  }, []);

  const getTemplates = async () => {
    setLoadingTemplates(true);
    apiFetch("templates").then((res) => {
      if (!res.success) {
        alert("Ocurrió un error al cargar las plantillas");
        return;
      }

      setTemplates(res.data);
      setLoadingScreen(false);
      setLoadingTemplates(false);
    });
  };

  const getFilteredTemplates = async (values: any) => {
    const templatesParams = new URLSearchParams();
    if (values.issuerId != null) {
      templatesParams.append("issuerId", values.issuerId);
    }

    if (values.createdAtFrom != null) {
      templatesParams.append("createdAtFrom", values.createdAtFrom);
    }

    if (values.createdAtTo != null) {
      templatesParams.append("createdAtTo", values.createdAtTo);
    }

    setLoadingTemplates(true);
    apiFetch(`templates?${templatesParams.toString()}`).then((res) => {
      if (res.success) {
        setTemplates(res.data);
        setLoadingScreen(false);
        setLoadingTemplates(false);
      }
    });
  };

  const getTemplateHtml = async (htmlPath: string) => {
    setLoadingHtml(true);
    fetch(htmlPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((html) => {
        setHtmlString(html);
        setLoadingHtml(false);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  const deleteTemplate = async () => {
    setLoadingModal(true);
    apiFetch(`templates/${selectedTemplate.templateId}`, "DELETE").then(
      (res) => {
        setLoadingModal(false);
        setShowDeleteModal(false);

        if (res.success) {
          getTemplates();

          setShowToast(true);
          setToastVariant("success");
          setToastTitle("Plantillas");
          setToastMessage(res.message);

          return;
        }

        setShowToast(true);
        setToastVariant("danger");
        setToastTitle("Plantillas");
        setToastMessage(res.message);

        return;
      }
    );
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Plantillas">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Plantillas</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminFilterContainer>
        <Formik
          onSubmit={getFilteredTemplates}
          initialValues={{
            issuerId: null,
            createdAtFrom: null,
            createdAtTo: null,
          }}
        >
          {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <FormAsyncSelect
                  md={12}
                  sm={12}
                  errors={null}
                  label="Emisor"
                  name="issuerId"
                  disabled={false}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un emisor"
                  getOptions={() => getIssuerOptionList()}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="createdAtFrom"
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  maxDate={moment(values.createdAtTo)}
                  label="Fecha de creación de la plantilla mínima"
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="createdAtTo"
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  minDate={moment(values.createdAtFrom)}
                  label="Fecha de creación de la plantilla máxima"
                />

                <div className="d-flex justify-content-end">
                  <AdminFormSubmitButton
                    label="Filtrar"
                    loading={loadingTemplates}
                  />
                </div>
              </Row>
            </Form>
          )}
        </Formik>
      </AdminFilterContainer>

      <AdminCardContainer xs={12}>
        {loadingTemplates ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable
            defaultData={templates}
            columns={templatesTableColums(
              router,
              permissions,
              getTemplateHtml,
              setSelectedTemplate,
              setShowDetailsModal,
              setShowDeleteModal
            )}
          >
            {!permissions.CREATE_TEMPLATE ? null : (
              <Link href={"/admin/templates/create"}>
                <Button variant="primary">Nuevo</Button>
              </Link>
            )}
          </AdminTable>
        )}
      </AdminCardContainer>

      <AdminModalJorge
        size={"lg"}
        showButtons={true}
        show={showDetailsModal}
        title="Detalles de plantilla"
        primaryBtnVariant="danger"
        handleSubmit={deleteTemplate}
        modalLoading={modalLoading}
        noSecondaryButton={false}
        handleClose={() => setShowDetailsModal(false)}
      >
        {loadingHtml ? (
          <AdminTableSpinner />
        ) : (
          <AdminCertificateViwer htmlString={htmlString} />
        )}
      </AdminModalJorge>

      <AdminModalJorge
        showButtons={true}
        show={showDeleteModal}
        title="Eliminar plantilla"
        primaryBtnVariant="danger"
        handleSubmit={deleteTemplate}
        modalLoading={modalLoading}
        noSecondaryButton={false}
        handleClose={() => setShowDeleteModal(false)}
      >
        ¿Estás seguro de querer eliminar esta plantilla?
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
