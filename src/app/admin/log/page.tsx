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

import { LogsData } from "@/types/log";
import { apiFetch } from "@/helpers/api-fetch";
import { createColumnHelper } from "@tanstack/react-table";

export default function StockLog() {
  const [logs, setLogs] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const columnHelper = createColumnHelper<LogsData>();

  useEffect(() => {
    loadRoles();

    getLogs();
  }, []);

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

  const getLogs = async () => {
    setDataLoading(true);
    const res = await apiFetch("authorization/binnacle");
    console.log(res);

    if (res.success) {
      setDataLoading(false);
      setLogs(res.data);
    }
  };

  const columns = [
    columnHelper.accessor("id", {
      header: () => "Id",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date", {
      header: () => "Fecha",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
    }),
    columnHelper.accessor("description", {
      header: () => "Descripción",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("moduleId", {
      header: () => "Modulo",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("memberId", {
      header: () => "Miembro",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("action", {
      header: () => "Acción",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("function", {
      header: () => "Función",
      cell: (info) => info.getValue(),
    }),
  ];

  return (
    <Fragment>
      <AdminPageHeader title="Bitacora de acciones">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Bitacora de acciones</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        {dataLoading ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable columns={columns} defaultData={logs}></AdminTable>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
