import { createColumnHelper } from "@tanstack/react-table";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import ButtonGroup from "react-bootstrap/ButtonGroup";

import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { ContactsData } from "@/types/contatcs";

export default function contactsTableColumns(
  router: any,
  permissions: any,
  setSelectedContact: any,
  setShowDeleteModal: any,
  showActions: boolean = true
) {
  const columnHelper = createColumnHelper<ContactsData>();

  let columns = [
    columnHelper.accessor("issuerName", {
      header: () => "Emisor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Nombre(s)",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("lastName", {
      header: () => "Apellido(s)",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Correo electrónico",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("position", {
      header: () => "Posición",
      cell: (info) =>
        info.getValue() == null ? "Sin posición" : info.getValue(),
    }),
  ];

  if (showActions) {
    columns.push(
      columnHelper.display({
        id: "actions",
        header: () => "Acciones",
        cell: (info) => {
          const contact = info.row.original;

          return (
            <ButtonGroup aria-label="Action button group">
              <AdminTableActionButton
                icon={faPencil}
                tooltip="Editar"
                disabled={!permissions.UPDATE_CONTACT ? true : false}
                onClick={() => {
                  router.push(`contacts/update?id=${contact.contactId}`);
                }}
              />

              <AdminTableActionButton
                icon={faTrash}
                tooltip="Eliminar"
                disabled={!permissions.DELETE_CONTACT ? true : false}
                onClick={async () => {
                  setShowDeleteModal(true);
                  setSelectedContact(contact);
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
