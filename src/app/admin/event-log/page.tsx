"use client";
//Bitacora de acciones ᕦ(ò_óˇ)ᕤ
import moment from "moment";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminTable from "@/components/admin/AdminTable";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import { EventLogData } from "@/types/event-log";
import { apiFetch } from "@/helpers/api-fetch";
import { createColumnHelper } from "@tanstack/react-table";
import EventLogTableColumns from "@/table-columns/event-log";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
import AdminModalJorge from "@/components/admin/AdminModalJorge";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormTextarea from "@/components/form/FormTextarea";
import { Formik } from "formik";
import { Form } from "react-bootstrap";

import { getIssuerOptionList } from "@/utils/select-options/issuers";
import { getModulesOptionList } from "@/utils/select-options/modules";
import { getMembersOptionList } from "@/utils/select-options/members";
import { getEventLogTypesOptionList } from "@/utils/select-options/event-log-types";
import { getEventLogLevelsOptionList } from "@/utils/select-options/event-log-levels";

import FormDatePicker from "@/components/form/FormDatePicker";

import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

export default function StockLog() {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingEventLogs, setLoadingEventLogs] = useState(false);
  const [permissions, setPermissions] = useState({} as EventLogData);

  const [eventLogs, setEventLogs] = useState([]);
  const [selectedEventLog, setSelectedEventLog] = useState({} as EventLogData);

  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "EVENT_LOG_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        setPermissions(res.data);
        if (!res.data.LIST_EVENT_LOG) {
          return null;
        }

        // Registro de eventos
        getEventLog();
      }
    });
  }, []);

  const getEventLog = async () => {
    setLoadingEventLogs(true);
    apiFetch("event-log").then((res) => {
      if (res.success) {
        setEventLogs(res.data);

        setLoadingScreen(false);
        setLoadingEventLogs(false);
      }
    });
  };

  const getFilteredEventLog = async (values: any) => {
    const issuersParams = new URLSearchParams();
    if (values.moduleId != null) {
      issuersParams.append("moduleId", values.moduleId);
    }

    if (values.issuerId != null) {
      issuersParams.append("issuerId", values.issuerId);
    }

    if (values.memberId != null) {
      issuersParams.append("memberId", values.memberId);
    }

    if (values.eventLogTypeId != null) {
      issuersParams.append("eventLogTypeId", values.eventLogTypeId);
    }

    if (values.eventLogLevelId != null) {
      issuersParams.append("eventLogLevelId", values.eventLogLevelId);
    }

    if (values.createdAtFrom != null) {
      issuersParams.append("createdAtFrom", values.createdAtFrom);
    }

    if (values.createdAtTo != null) {
      issuersParams.append("createdAtTo", values.createdAtTo);
    }

    setLoadingEventLogs(true);
    apiFetch(`event-log?${issuersParams.toString()}`).then((res) => {
      console.log(res.data, "Estos son los emisores");
      if (res.success) {
        setEventLogs(res.data);

        setLoadingScreen(false);
        setLoadingEventLogs(false);
      }
    });
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Bitacora de eventos">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Bitácora de eventos</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminFilterContainer>
        <Formik
          onSubmit={(values: any) => getFilteredEventLog(values)}
          initialValues={{
            moduleId: null,
            issuerId: null,
            memberId: null,
            eventLogTypeId: null,
            eventLogLevelId: null,
            createdAtFrom: null,
            createdAtTo: null,
          }}
        >
          {({ handleChange, handleSubmit, setFieldValue, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <FormAsyncSelect
                  sm={12}
                  md={12}
                  label="Módulo"
                  name="moduleId"
                  errors={errors.moduleId}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un módulo"
                  getOptions={() => getModulesOptionList()}
                />

                <FormAsyncSelect
                  md={6}
                  sm={12}
                  label="Emisor"
                  name="issuerId"
                  errors={errors.moduleId}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un emisor"
                  getOptions={() => getIssuerOptionList()}
                />

                <FormAsyncSelect
                  md={6}
                  sm={12}
                  label="Miembro"
                  name="memberId"
                  errors={errors.moduleId}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un miembro"
                  getOptions={() => getMembersOptionList()}
                />

                <FormAsyncSelect
                  sm={12}
                  md={6}
                  name="eventLogTypeId"
                  label="Tipo de evento"
                  errors={errors.moduleId}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un tipo de evento"
                  getOptions={() => getEventLogTypesOptionList()}
                />

                <FormAsyncSelect
                  sm={12}
                  md={6}
                  name="eventLogLevelId"
                  label="Nivel de evento"
                  errors={errors.moduleId}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un nivel de evento"
                  getOptions={() => getEventLogLevelsOptionList()}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="createdAtFrom"
                  setFieldValue={setFieldValue}
                  label="Fecha de creación del registro mínima"
                  placeholder="Selecciona una fecha"
                  maxDate={moment(values.createdAtTo)}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="createdAtTo"
                  setFieldValue={setFieldValue}
                  label="Fecha de creación del registro máxima"
                  placeholder="Selecciona una fecha"
                  minDate={moment(values.createdAtFrom)}
                />
              </Row>

              <div className="d-flex justify-content-end">
                <AdminFormSubmitButton
                  label="Filtrar"
                  loading={loadingEventLogs}
                />
              </div>
            </Form>
          )}
        </Formik>
      </AdminFilterContainer>

      <AdminCardContainer xs={12}>
        {loadingEventLogs ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable
            columns={EventLogTableColumns(
              setSelectedEventLog,
              setShowDetailsModal
            )}
            defaultData={eventLogs}
          >
            {null}
          </AdminTable>
        )}
      </AdminCardContainer>

      <AdminModalJorge
        size="lg"
        showButtons={true}
        modalLoading={false}
        show={showDetailsModal}
        title="Detalles del evento"
        handleSubmit={() => setShowDetailsModal(false)}
        handleClose={() => setShowDetailsModal(false)}
      >
        <Container>
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <h6>Módulo</h6>
              {selectedEventLog.moduleName}
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <h6>Emisor</h6>
              {selectedEventLog.issuerName}
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <h6>Miembro</h6>
              {selectedEventLog.memberEmail == null
                ? "Evento hecho por el emisor"
                : selectedEventLog.memberEmail}
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <h6>Tipo</h6>
              {selectedEventLog.eventLogTypeName}
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <h6>Nivel</h6>
              {selectedEventLog.eventLogLevelName}
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <h6>Fecha y hora</h6>
              {moment(selectedEventLog.createdAt).format("DD/MM/YYYY hh:mm:ss")}
            </Col>

            <Col xs={12} md={12} className="mb-3">
              <h6>Descripción</h6>
              {selectedEventLog.description}
            </Col>

            {selectedEventLog.previousValue == null &&
            selectedEventLog.currentValue == null ? null : (
              <Container>
                <Row>
                  <h6>Valores</h6>
                  <Col xs={12} md={6} className="mb-3">
                    <FormTextarea
                      sm={12}
                      md={12}
                      rows={12}
                      errors={null}
                      readOnly={true}
                      id="previousValue"
                      name="previousValue"
                      handleChange={null}
                      label="Valor anterior"
                      placeholder="Sin valor anterior"
                      value={selectedEventLog.previousValue}
                    />
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <FormTextarea
                      sm={12}
                      md={12}
                      rows={12}
                      errors={null}
                      readOnly={true}
                      id="currentValue"
                      handleChange={null}
                      name="currentValue"
                      label="Valor actual"
                      placeholder="Sin valor actual"
                      value={selectedEventLog.currentValue}
                    />
                  </Col>
                </Row>
              </Container>
            )}
          </Row>
        </Container>
      </AdminModalJorge>
    </Fragment>
  );
}
