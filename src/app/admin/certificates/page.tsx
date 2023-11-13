"use client";
//Certificados ο(=•ω＜=)ρ⌒☆
import moment from "moment";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminModal from "@/components/admin/AdminModal";
import AdminTable from "@/components/admin/AdminTable";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { faEye, faXmark, faShare } from "@fortawesome/free-solid-svg-icons";

import { IssuerData } from "@/types/issuers";
import { apiFetch } from "@/helpers/api-fetch";
import { createColumnHelper } from "@tanstack/react-table";

export default function Certificate() {
  const [issuers, setIssuers] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const columnHelper = createColumnHelper<IssuerData>();

  const [shareModal, setShareModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);

  useEffect(() => {
    loadRoles();

    getIssuers();
  }, []);

  const openShareModal = () => {
    setShareModal(true);
  };

  const openDetailsModal = () => {
    setDetailsModal(true);
  };

  const openCancelModal = () => {
    setCancelModal(true);
  };

  const handleShare = () => {
    console.log("El certificado será compartido");
    setShareModal(false);
  };

  const handleDetails = () => {
    console.log("Detalles del certificado");
    setDetailsModal(false);
  };

  const handleCancel = () => {
    console.log("El certificado será cancelado.");
    setCancelModal(false);
  };

  const loadRoles = async () => {
    try {
      const res = await apiFetch("roles");
      if (res.data) {
        const data = res.data;

        const options = data.map((item: any) => ({
          value: item.roleId,
          label: item.name,
        }));

        return options;
      }

      return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const getIssuers = async () => {
    setDataLoading(true);
    const res = await apiFetch("issuers");
    // alert("Termino la peticion de datos");
    console.log(res);

    if (res.success) {
      setDataLoading(false);
      setIssuers(res.data);
    }
  };

  const columns = [
    columnHelper.accessor("issuerId", {
      header: () => "Id",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Receptor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Fecha",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
    }),
    columnHelper.accessor("issuerVerificationStatusName", {
      header: () => "Estado",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: () => "Acciones",
      cell: (info) => {
        return (
          <ButtonGroup aria-label="Basic example">
            {/* <AdminTableActionButton icon={faEye} tooltip="Ver" onClick={() => openDetailsModal()}/>
            <AdminTableActionButton icon={faShare} tooltip="Compartir" onClick={() => openShareModal()}/>
            <AdminTableActionButton icon={faXmark} tooltip="Cancelar" onClick={() => openCancelModal()}/> */}
          </ButtonGroup>
        );
      },
    }),
  ];

  return (
    <Fragment>
      <AdminPageHeader title="Certificados">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Certificados</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminModal
        show={detailsModal}
        onHide={() => setDetailsModal(false)}
        onClick={() => handleDetails()}
        title="Detalles"
        text="Detalles del certificado."
        buttonText="Algo"
      />

      <AdminModal
        show={shareModal}
        onHide={() => setShareModal(false)}
        onClick={() => handleShare()}
        title="Compartir"
        text="Compartir certificado."
        buttonText="Compartit"
      />

      <AdminModal
        show={cancelModal}
        onHide={() => setCancelModal(false)}
        onClick={() => handleCancel()}
        title="Cancelar"
        text="Certificado cancelado"
        buttonText="Cancelar"
      />

      <AdminCardContainer xs={12}>
        {dataLoading ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable columns={columns} defaultData={issuers}>
            <Link href={"/admin/certificates/create-certificate"}>
              <Button variant="primary">Nuevo</Button>
            </Link>
          </AdminTable>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
