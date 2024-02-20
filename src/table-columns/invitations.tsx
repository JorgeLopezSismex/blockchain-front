import moment from "moment";
import { createColumnHelper } from "@tanstack/react-table";
import { faEye, faBan, faRotateRight } from "@fortawesome/free-solid-svg-icons";

import ButtonGroup from "react-bootstrap/ButtonGroup";

import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { InvitationsData } from "@/types/invitation";

export default function invitationsTableColums(
  permissions: any,
  setSelectedInvitation: any,
  setShowDetailsModal: any,
  setShowResendModal: any,
  setShowCancelModal: any,
  showActions: boolean = true
) {
  const columnHelper = createColumnHelper<InvitationsData>();

  let columns = [
    columnHelper.accessor("issuerName", {
      header: () => "Emisor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Nombre del invit.",
      cell: (info) =>
        info.getValue() != null && info.getValue() != ""
          ? info.getValue()
          : "Nombre no disponible",
    }),
    columnHelper.accessor("lastName", {
      header: () => "Apellido del invit.",
      cell: (info) =>
        info.getValue() != null && info.getValue() != ""
          ? info.getValue()
          : "Apellido no disponible",
    }),
    columnHelper.accessor("email", {
      header: () => "Correo electrónico",
      cell: (info) =>
        info.getValue() != null && info.getValue() != ""
          ? info.getValue()
          : "Correo electrónico no disponible",
    }),
    columnHelper.accessor("invitationStatusName", {
      header: () => "Estado",
      cell: (info) =>
        info.getValue() != null && info.getValue() != ""
          ? info.getValue()
          : "Estado no disponible",
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Fecha-Hora de creación",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY hh:mm:ss"),
    }),
  ];

  if (showActions) {
    columns.push(
      columnHelper.display({
        id: "actions",
        header: () => "Acciones",
        cell: (info) => {
          const data = info.row.original;

          return (
            <ButtonGroup
              aria-label="Action button group"
              className="d-flex justify-content-end"
            >
              {/* Botón de detalles */}
              <AdminTableActionButton
                icon={faEye}
                tooltip="Detalles"
                disabled={!permissions.READ_INVITATION ? true : false}
                onClick={async () => {
                  setShowDetailsModal(true);
                  setSelectedInvitation(data);
                }}
              />

              {/* Botón de reenviar invitación */}
              <AdminTableActionButton
                tooltip="Reenviar"
                icon={faRotateRight}
                disabled={
                  !permissions.RESEND_INVITATION
                    ? true
                    : data.invitationStatusName == "Pendiente de respuesta"
                    ? false
                    : true
                }
                onClick={() => {
                  setShowResendModal(true);
                  setSelectedInvitation(data);
                }}
              />

              {/* Botón de cancelar */}
              <AdminTableActionButton
                icon={faBan}
                disabled={
                  !permissions.CANCEL_INVITATION
                    ? true
                    : data.invitationStatusName == "Pendiente de respuesta"
                    ? false
                    : true
                }
                tooltip="Cancelar"
                onClick={() => {
                  setShowCancelModal(true);
                  setSelectedInvitation(data);
                }}
              />
            </ButtonGroup>
          );
        },
      })
    );
  }

  return columns;
}
