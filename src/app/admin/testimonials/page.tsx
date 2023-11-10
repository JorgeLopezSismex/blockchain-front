"use client";
//ABC clientes ᕦ(ò_óˇ)ᕤ
import moment from "moment";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminTable from "@/components/admin/AdminTable";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { apiFetch } from "@/helpers/api-fetch";
import { TestimonialsData } from "@/types/testimonials";
import { createColumnHelper } from "@tanstack/react-table";
import { faXmark, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const columnHelper = createColumnHelper<TestimonialsData>();

  useEffect(() => {
    loadRoles();

    getTestimonials();
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

  const getTestimonials = async () => {
    setDataLoading(true);
    const res = await apiFetch("success/lista");
    console.log(res);

    //No esta enviando success
    // setDataLoading(false);
    // setTestimonials(res.response);

    if (res.success) {
      setDataLoading(false);
      setTestimonials(res.data);
    }
  };

  const columns = [
    // columnHelper.accessor("id", {
    //   header: () => "Identificador",
    //   cell: (info) => info.getValue(),
    // }),
    columnHelper.accessor("name", {
      header: () => "Nombre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("user", {
      header: () => "Puesto",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("address", {
      header: () => "Ciudad",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("description", {
      header: () => "Contenido",
      cell: (info) => info.getValue(),
    }),
    // columnHelper.accessor("photo", {
    //   header: () => "Foto",
    //   cell: (info) => info.getValue(),
    // }),
    columnHelper.accessor("date", {
      header: () => "Fecha",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
    }), //Que no se te olvide volver a aparecer los botones de acciones
    // columnHelper.display({
    //   id: "actions",
    //   header: () => "Acciones",
    //   cell: (info) => {
    //     return (
    //       <ButtonGroup aria-label="Basic example">
    //         <AdminTableActionButton
    //           icon={faEdit}
    //           tooltip="Editar"
    //           onClick={null}
    //         />
    //         <AdminTableActionButton
    //           icon={faXmark}
    //           tooltip="Eliminar"
    //           onClick={null}
    //         />
    //       </ButtonGroup>
    //     );
    //   },
    // }),
  ];

  return (
    <Fragment>
      <AdminPageHeader title="Casos de exito">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Clientes</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        {dataLoading ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable columns={columns} defaultData={testimonials}>
            <Link href={"/admin/testimonials/add-testimonials"}>
              <Button variant="primary">Nuevo</Button>
            </Link>
          </AdminTable>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
