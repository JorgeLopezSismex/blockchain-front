import moment from "moment";
import { createColumnHelper } from "@tanstack/react-table";
import { InvitationsData, CancelInvitation } from "@/types/invitation";

import {
  faEye,
  faTrash,
  faXmark,
  faMailReply,
} from "@fortawesome/free-solid-svg-icons";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

export default function invitationsTableColumButtons(setShowDetailsModal: any) {
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
        return (
          <ButtonGroup aria-label="Basic example">
            <AdminTableActionButton
              icon={faEye}
              disabled={false}
              tooltip="Detalles"
              //   onClick={() => openDetailsModal(info.row.original)}
              onClick={() => {
                setShowDetailsModal(true);
              }}
            />
            <AdminTableActionButton
              icon={faMailReply}
              disabled={true}
              tooltip="Reenviar"
              //   onClick={() => openSendModal(info.row.original)}
              onClick={() => {}}
            />
            {/* <AdminTableActionButton icon={faTrash} tooltip="Borrar" onClick={() => openDeleteModal(info.row.original)}/> */}
            <AdminTableActionButton
              icon={faXmark}
              disabled={true}
              tooltip="Cancelar"
              //   onClick={() => openCancelModal(info.row.original)}
              onClick={() => {}}
            />
          </ButtonGroup>
        );
      },
    }),
  ];
}
