import { MemberData } from "@/types/members";
import { createColumnHelper } from "@tanstack/react-table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { useRouter } from "next/navigation";

import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import { encrypt, decrypt } from "simply-encrypt";

export default function membersTableColumns(
  router: any,
  permissions: any,
  setSelectedMember: any,
  setShowDeleteModal: any
) {
  const columnHelper = createColumnHelper<MemberData>();

  return [
    columnHelper.accessor("issuerName", {
      header: () => "Emisor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("roleName", {
      header: () => "Rol",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Nombre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("lastName", {
      header: () => "Apellido",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Correo Electrónico",
      cell: (info) => info.getValue(),
    }),

    columnHelper.display({
      id: "actions",
      header: () => "Acciones",
      cell: (info) => {
        const member = info.row.original;

        return (
          <ButtonGroup aria-label="Basic example">
            {/* Botón de editar */}
            {!permissions.UPDATE_MEMBER ? null : (
              <AdminTableActionButton
                icon={faPencil}
                tooltip="Editar"
                disabled={false}
                onClick={() => {
                  router.push(`members/update?id=${member.memberId}`);
                }}
              />
            )}

            {/* Botón de eliminar */}
            {!permissions.DELETE_MEMBER ? null : (
              <AdminTableActionButton
                icon={faTrash}
                disabled={false}
                tooltip="Eliminar"
                onClick={() => {
                  setShowDeleteModal(true);
                  setSelectedMember(member);
                }}
              />
            )}
          </ButtonGroup>
        );
      },
    }),
  ];
}
