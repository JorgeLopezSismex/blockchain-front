import moment from "moment";
import { EventLogData } from "@/types/event-log";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { createColumnHelper } from "@tanstack/react-table";

import ButtonGroup from "react-bootstrap/ButtonGroup";

import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

export default function EventLogTableColumns(
  setSelectedEventLog: any,
  setShowDetailsModal: any
) {
  const columnHelper = createColumnHelper<EventLogData>();

  return [
    columnHelper.accessor("moduleName", {
      header: () => "Módulo",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("issuerName", {
      header: () => "Emisor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("memberEmail", {
      header: () => "Miembro",
      cell: (info) =>
        info.getValue() == null
          ? "Evento hecho por el emisor"
          : info.getValue(),
    }),
    columnHelper.accessor("eventLogTypeName", {
      header: () => "Tipo",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("eventLogLevelName", {
      header: () => "Nivel",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Fecha - Hora",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY hh:mm:ss"),
    }),
    columnHelper.accessor("description", {
      header: () => "Descripción",
      cell: (info) => {
        const ellipsis = "...";

        if (info.getValue().length <= 200) {
          return info.getValue();
        }

        return info.getValue().substring(0, 200 - ellipsis.length) + ellipsis;
      },
    }),

    columnHelper.display({
      id: "actions",
      header: () => "Acciones",
      cell: (info) => {
        const eventLog = info.row.original;
        return (
          <ButtonGroup
            aria-label="Action button group"
            className="d-flex justify-content-end"
          >
            <AdminTableActionButton
              icon={faEye}
              disabled={false}
              tooltip="Detalles"
              onClick={async () => {
                console.log("Datps del evento", eventLog);
                setShowDetailsModal(true);
                setSelectedEventLog(eventLog);
              }}
            />
          </ButtonGroup>
        );
      },
    }),
  ];
}
