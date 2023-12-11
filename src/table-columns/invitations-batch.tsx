import { createColumnHelper } from "@tanstack/react-table";

import { InvitationsBatchResultData } from "@/types/invitation";

export default function invitationsBatchTableColumns() {
  const columnHelper = createColumnHelper<InvitationsBatchResultData>();

  return [
    columnHelper.accessor("name", {
      header: () => "Nombre(s) del invitado",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("lastName", {
      header: () => "Apellido(s) del invitado",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Correo electrónico",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("result", {
      header: () => "Resultado",
      cell: (info) => info.getValue(),
    }),
  ];
}
