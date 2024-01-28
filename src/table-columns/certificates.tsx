import moment from "moment";
import { createColumnHelper } from "@tanstack/react-table";
import {
  faEye,
  faBan,
  faRotateRight,
  faCircleDown,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

import ButtonGroup from "react-bootstrap/ButtonGroup";

import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { CertificateData } from "@/types/certificates";

export default function certificatesTableColums(
  permissions: any,
  verifyCertificate: any,
  setSelectedCertificate: any,
  setShowVerifyModal: any
) {
  const columnHelper = createColumnHelper<CertificateData>();

  return [
    columnHelper.accessor("issuerName", {
      header: () => "Emisor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("userEmail", {
      header: () => "Usuario",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("templateName", {
      header: () => "Plantilla",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("transactionHash", {
      header: () => "Hash de transacción",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("transactionStatus", {
      header: () => "Estado de transacción",
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
        const data = info.row.original;
        /* Añadir el negaod to disable porp on admin action buttons!!!! */

        return (
          <ButtonGroup
            aria-label="Action button group"
            className="d-flex justify-content-end"
          >
            {/* Botón de verificar */}
            <AdminTableActionButton
              icon={faEye}
              tooltip="Verificar"
              disabled={permissions.READ_INVITATION ? true : false}
              onClick={() => {
                verifyCertificate();
                setShowVerifyModal(true);
                setSelectedCertificate(data);
              }}
            />

            {/* Botón de eliminar */}
            <AdminTableActionButton
              tooltip="Eliminar"
              icon={faRotateRight}
              disabled={permissions.RESEND_INVITATION ? true : false}
              onClick={() => {
                // setShowResendModal(true);
                setSelectedCertificate(data);
              }}
            />

            {/* Botón de compartir */}
            <AdminTableActionButton
              tooltip="Compartir"
              icon={faShareNodes}
              disabled={permissions.RESEND_INVITATION ? true : false}
              onClick={() => {
                // setShowResendModal(true);
                setSelectedCertificate(data);
              }}
            />

            {/* Botón de descargar */}
            <AdminTableActionButton
              tooltip="Descargar"
              icon={faCircleDown}
              disabled={permissions.RESEND_INVITATION ? true : false}
              onClick={() => {
                // setShowResendModal(true);
                setSelectedCertificate(data);
              }}
            />

            {/* Botón de revocar */}
            <AdminTableActionButton
              tooltip="Revocar"
              icon={faRotateRight}
              disabled={permissions.RESEND_INVITATION ? true : false}
              onClick={() => {
                // setShowResendModal(true);
                setSelectedCertificate(data);
              }}
            />
          </ButtonGroup>
        );
      },
    }),
  ];
}
