import moment from "moment";
import { IssuerData } from "@/types/issuers";
import { createColumnHelper } from "@tanstack/react-table";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { faEye, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const p = {
  LIST_ISSUER: true,
  CREATE_ISSUER: true,
  READ_ISSUER: true,
  UPDATE_ISSUER: false,
  DELETE_ISSUER: true,
  VERIFY_ISSUER: true,
  REJECT_ISSUER: true,
};

const openVerifyIssuerModal = (row: any) => {};

export default function issuersTableColumns(
  permissions: any,
  setSelectedIssuer: any,
  setShowDeleteModal: any,
  setShowVerifyModal: any,
  setShowRejectModal: any
) {
  const columnHelper = createColumnHelper<IssuerData>();

  return [
    columnHelper.accessor("name", {
      header: () => "Nombre",
      cell: (info) =>
        info.getValue() == null ? "Nombre no disponible" : info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Correo Electrónico",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("roleName", {
      header: () => "Rol",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Registro",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
    }),
    columnHelper.accessor("issuerVerificationStatusName", {
      header: () => "Verificación",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("lastValidationSubmit", {
      header: () => "Últ. solicitud de verif.",
      cell: (info) =>
        info.getValue() == null
          ? "Sin sol. de verificación"
          : moment(info.getValue()).format("DD/MM/YYYY"),
    }),
    columnHelper.display({
      id: "actions",
      header: () => "Acciones",
      cell: (info) => {
        const data = info.row.original;

        return (
          <ButtonGroup aria-label="Basic example">
            {/* Botón de detalles */}
            <AdminTableActionButton
              icon={faEye}
              disabled={!permissions.UPDATE_ISSUER ? true : false}
              tooltip="Detalles"
              onClick={() => {}}
            />

            {/* Botón de editar */}
            <AdminTableActionButton
              icon={faPencil}
              tooltip="Editar"
              disabled={!permissions.UPDATE_ISSUER ? true : false}
              onClick={() => {}}
            />

            {/* Botón de eliminar */}
            <AdminTableActionButton
              icon={faTrash}
              disabled={!permissions.DELETE_ISSUER ? true : false}
              tooltip="Eliminar"
              onClick={() => {
                setShowDeleteModal(true);
                setSelectedIssuer(data);
              }}
            />

            {/* Botón de veriricar */}
            <AdminTableActionButton
              icon={faCheck}
              tooltip="Verificar"
              disabled={
                !permissions.VERIFY_ISSUER
                  ? true
                  : data.issuerVerificationStatusKey != "UNVERIFIED"
                  ? true
                  : false
              }
              onClick={() => {
                setShowVerifyModal(true);
                setSelectedIssuer(data);
              }}
            />

            {/* Botón de rechazar */}
            <AdminTableActionButton
              icon={faXmark}
              tooltip="Rechazar"
              disabled={
                !permissions.REJECT_ISSUER
                  ? true
                  : data.issuerVerificationStatusKey != "UNVERIFIED"
                  ? true
                  : false
              }
              onClick={() => {
                setShowRejectModal(true);
                setSelectedIssuer(data);
              }}
            />
          </ButtonGroup>
        );
      },
    }),
  ];
}
