import moment from "moment";
import { createColumnHelper } from "@tanstack/react-table";
import { InvitationsData, CancelInvitation } from "@/types/invitation";

import {
  faEye,
  faTrash,
  faXmark,
  faMailReply,
  faBan,
} from "@fortawesome/free-solid-svg-icons";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminTableActionButton from "@/components/admin/AdminTableActionButton";
import { apiFetch } from "@/helpers/api-fetch";

const getInvitation = (invitationId: number) => {
  const res = apiFetch("");
};

export default function invitationsTableColums(
  setSelectedInvitation: any,
  setShowDetailsModal: any,
  setShowResendModal: any,
  setShowCancelModal: any
) {
  const columnHelper = createColumnHelper<InvitationsData>();

  return [
    columnHelper.accessor("addressee", {
      header: () => "Correo",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("nameUser", {
      header: () => "Nombre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("lastName", {
      header: () => "Apellido",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Fecha de creación",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
    }),
    columnHelper.accessor("name", {
      header: () => "Estado",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: () => "Acciones",
      cell: (info) => {
        const data = info.row.original;

        return (
          <ButtonGroup aria-label="Basic example">
            <AdminTableActionButton
              icon={faEye}
              disabled={false}
              tooltip="Detalles"
              onClick={async () => {
                setShowDetailsModal(true);
                setSelectedInvitation(data);
                console.log("Estos son los datos de la invitazción", data);
              }}
            />
            <AdminTableActionButton
              icon={faMailReply}
              disabled={false}
              tooltip="Reenviar"
              onClick={() => {
                setShowResendModal(true);
              }}
            />
            <AdminTableActionButton
              icon={faBan}
              disabled={false}
              tooltip="Cancelar"
              onClick={() => {
                setShowCancelModal(true);
              }}
            />
          </ButtonGroup>
        );
      },
    }),
  ];
}
