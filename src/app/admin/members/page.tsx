"use client";

import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import Link from "next/link";

import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import Button from "react-bootstrap/Button";

import { createColumnHelper } from "@tanstack/react-table";

import { Fragment, useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { apiFetch } from "@/helpers/api-fetch";

import { MemberData } from "@/types/members";
import AdminTable from "@/components/admin/AdminTable";
import membersTableColumns from "@/tableColumns/membersTableColumns";
import AdminModalJorge from "@/components/admin/AdminModalJorge";

export default function Members() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState({} as MemberData);

  const [dataLoading, setDataLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    setDataLoading(true);

    const res = await apiFetch("members");

    if (res.success) {
      console.log(res);
      console.log(res.data);

      setDataLoading(false);
      setMembers(res.data);
    }
    console.log(res);
  };

  const deleteMember = async () => {
    setModalLoading(true);
    const res = await apiFetch(`members/${selectedMember.memberId}`);

    if (res.success) {
    }
  };

  return (
    <Fragment>
      <AdminModalJorge
        showButtons={true}
        show={showDeleteModal}
        title="Eliminar miembro"
        primaryBtnVariant="danger"
        modalLoading={modalLoading}
        handleSubmit={deleteMember}
        handleClose={() => setShowDeleteModal(false)}
      >
        ¿Estás seguro de querer eliminar este emisor?
      </AdminModalJorge>

      <AdminPageHeader title="Miembros">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Miembros</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        {dataLoading ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable
            columns={membersTableColumns(setSelectedMember, setShowDeleteModal)}
            defaultData={members}
          >
            <Button variant="primary">Nuevo</Button>
          </AdminTable>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
