import moment from "moment";
import { createColumnHelper } from "@tanstack/react-table";
import {
  faEye,
  faTrash,
  faShareNodes,
  faCircleDown,
  faCircleXmark,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

import ButtonGroup from "react-bootstrap/ButtonGroup";

import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { CertificateData } from "@/types/certificates";

import { handleDownload } from "@/utils/dowload-file";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function certificatesTableColums(
  permissions: any,
  getCertificateData: any,
  setSelectedCertificate: any,
  setShowDetailsModal: any,
  setShowVerifyModal: any,
  setShowShareModal: any,
  setVerificationLink: any,
  setShowToast: any,
  setToastTitle: any,
  setToastMessage: any,
  setToastVariant: any
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
      cell: (info) => {
        if (info.getValue() == undefined) {
          return "Sin datos";
        }

        if (info.getValue()!?.length > 10) {
          return `${info.getValue()?.slice(0, 10)}...`;
        }

        return info.getValue();
      },
    }),
    // columnHelper.accessor("transactionStatus", {
    //   header: () => "Estado de transacción",
    //   cell: (info) => info.getValue(),
    // }),
    columnHelper.accessor("createdAt", {
      header: () => "Fecha-Hora de creación",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY hh:mm:ss"),
    }),
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
              disabled={permissions.READ_INVITATION ? true : false}
              onClick={() => {
                setShowDetailsModal(true);
                setSelectedCertificate(data);
              }}
            />

            {/* Botón de verificar */}
            <AdminTableActionButton
              icon={faShieldHalved}
              tooltip="Verificar"
              disabled={permissions.READ_INVITATION ? true : false}
              onClick={() => {
                setSelectedCertificate(data);
                console.log(data.jsonBody);
                getCertificateData(data.jsonBody);
              }}
            />

            {/* Botón de compartir */}
            <AdminTableActionButton
              icon={faShareNodes}
              tooltip="Compartir"
              disabled={permissions.READ_INVITATION ? true : false}
              onClick={() => {
                setVerificationLink(
                  `${process.env.NEXT_PUBLIC_FRONT_BASE_URL}${data.verificationId}`
                );

                setShowShareModal(true);
                // setSelectedCertificate(data);
                // console.log(data.jsonBody);
                // getCertificateData(data.jsonBody);
              }}
            />

            {/* Botón de descargar */}
            <AdminTableActionButton
              tooltip="Descargar"
              icon={faCircleDown}
              disabled={permissions.RESEND_INVITATION ? true : false}
              onClick={async () => {
                const download = await handleDownload(
                  data.jsonBody,
                  `${data.userEmail}-certificate-from-${data.issuerName
                    .replace(/\s/g, "-")
                    .toLowerCase()}.json`
                );

                if (!download) {
                  setToastVariant("danger");
                  setToastTitle("Certificados");
                  setToastMessage(
                    "Ocurrió un error al descargar el certificado."
                  );

                  setShowToast(true);
                  return;
                }

                setToastVariant("success");
                setToastTitle("Certificados");
                setToastMessage("Certificado descargado correctamente.");

                setShowToast(true);
                return;
              }}
            />

            {/* Botón de revocar */}
            <AdminTableActionButton
              icon={faCircleXmark}
              tooltip="Revocar"
              disabled={permissions.READ_INVITATION ? true : false}
              onClick={() => {
                setSelectedCertificate(data);
                console.log(data.jsonBody);
                getCertificateData(data.jsonBody);
              }}
            />

            {/* Botón de borrar */}
            <AdminTableActionButton
              icon={faTrash}
              tooltip="Borrar"
              disabled={permissions.READ_INVITATION ? true : false}
              onClick={() => {
                setSelectedCertificate(data);
                console.log(data.jsonBody);
                getCertificateData(data.jsonBody);
              }}
            />
          </ButtonGroup>
        );
      },
    }),
  ];
}
