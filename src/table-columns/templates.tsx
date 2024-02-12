import moment from "moment";
import { createColumnHelper } from "@tanstack/react-table";
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import ButtonGroup from "react-bootstrap/ButtonGroup";

import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { TemplateData } from "@/types/templates";

export default function templatesTableColums(
  router: any,
  permissions: any,
  setSelectedTemplate: any,
  setShowDetailsModal: any,
  setShowDeleteModal: any
) {
  const columnHelper = createColumnHelper<TemplateData>();

  return [
    columnHelper.accessor("issuerName", {
      header: () => "Emisor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Nombre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Identificador",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Fecha-Hora de creación",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY hh:mm:ss"),
    }),
    columnHelper.display({
      id: "actions",
      header: () => "Acciones",
      cell: (info) => {
        const template = info.row.original;
        /* Añadir el negaod to disable porp on admin action buttons!!!! */

        return (
          <ButtonGroup
            aria-label="Action button group"
            className="d-flex justify-content-end"
          >
            {/* Botón de detalles */}
            <AdminTableActionButton
              icon={faEye}
              tooltip="Detalles"
              disabled={permissions.READ_INVITATION ? true : false}
              onClick={async () => {
                setShowDetailsModal(true);

                setSelectedTemplate(template);
              }}
            />

            {/* Botón de editar */}
            <AdminTableActionButton
              icon={faPencil}
              tooltip="Editar"
              disabled={!permissions.UPDATE_TEMPLATE ? true : false}
              onClick={() => {
                router.push(`templates/update?id=${template.templateId}`);
              }}
            />

            {/* Botón de eliminar */}
            <AdminTableActionButton
              icon={faTrash}
              disabled={!permissions.DELETE_TEMPLATE ? true : false}
              tooltip="Eliminar"
              onClick={() => {
                setShowDeleteModal(true);
                setSelectedTemplate(template);
              }}
            />
          </ButtonGroup>
        );
      },
    }),
  ];
}
