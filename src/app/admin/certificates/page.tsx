"use client"
//Certificados ο(=•ω＜=)ρ⌒☆
import moment from "moment";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { createAlchemyWeb3 } from '@alch/alchemy-web3';

import Button from 'react-bootstrap/Button';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminModal from "@/components/admin/AdminModal";
import AdminTable from "@/components/admin/AdminTable";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { faEye, faXmark, faShare } from "@fortawesome/free-solid-svg-icons";

import { IssuerData } from "@/types/issuers";
import { apiFetch } from "@/helpers/api-fetch";
import { createColumnHelper } from "@tanstack/react-table";

const alchemyKey = 'E5vywOK-yRVjfzIhbu5hsusAcRPPvfPt';
const alchemyURL = 'https://eth-sepolia.g.alchemy.com/v2/E5vywOK-yRVjfzIhbu5hsusAcRPPvfPt';
const web3 = createAlchemyWeb3(alchemyURL);

interface TransactionStatus {
  status: string;
}

export default function Certificate(){
  const [issuers, setIssuers] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const columnHelper = createColumnHelper<IssuerData>();

  const [shareModal, setShareModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState (false);
  const [cancelModal, setCancelModal] = useState(false);

  //Ethereum------
  const [transactionHashes] = useState<string[]>([
    '0xa7382afb7ee642aced8afb04a2b882e79772e88bc9de809bd7eb3a65860756d0',
    '0x30ae256294b9772df0a08da3fde158899bc2f5a158b08c834421933e14c301b0',
    // ... Agrega más hashes según sea necesario
  ]);
  const [transactionStatuses, setTransactionStatuses] = useState<Record<string, TransactionStatus>>({});
  //--------------

  useEffect(() => {
    loadRoles();
    getIssuers();

    //Ethereum--------
    const obtenerEstadoTransaccion = async (txHash: string) => {
      try {
        const estado = await web3.eth.getTransactionReceipt(txHash);
        setTransactionStatuses((prevStatuses) => ({
          ...prevStatuses,
          [txHash]: { status: estado ? 'Completada' : 'Pendiente' },
        }));
      } catch (error) {
        console.error(`Error al obtener el estado de la transacción ${txHash}:`, error);
        setTransactionStatuses((prevStatuses) => ({
          ...prevStatuses,
          [txHash]: { status: 'Error al obtener el estado' },
        }));
      }
    };

    // Iterar sobre la lista de hashes y obtener el estado de cada transacción
    transactionHashes.forEach((txHash) => {
      obtenerEstadoTransaccion(txHash);
    });
    //----------------
  }, [transactionHashes]);

  const openShareModal = () => {
    setShareModal(true);
  };

  const openDetailsModal = () => {
    setDetailsModal(true);
  };

  const openCancelModal = () => {
    setCancelModal(true);
  };

  const handleShare = () => {
    console.log("El certificado será compartido");
    setShareModal(false);
  };

  const handleDetails = () => {
    console.log("Detalles del certificado");
    setDetailsModal(false);
  };

  const handleCancel = () => {
    console.log("El certificado será cancelado.");
    setCancelModal(false);
  };

  const loadRoles = async () => {
    try {
      const res = await apiFetch("roles");
      if (res.data) {
        const data = res.data;

        const options = data.map((item : any) => ({
          value: item.roleId,
          label: item.name,
        }));

        return options;
      }

      return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const getIssuers = async () => {
    setDataLoading(true);
    const res = await apiFetch("issuers");
    // alert("Termino la peticion de datos");
    console.log(res);

    if (res.success) {
      setDataLoading(false);
      setIssuers(res.data);
    }
  };

  const columns = [
    columnHelper.accessor("issuerId", {
      header: () => "Id",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Receptor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Fecha",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
    }),
    columnHelper.accessor("issuerVerificationStatusName", {
      header: () => "Estado",
      cell: (info) => info.getValue(),
    }),
    // columnHelper.display({
    //   id: "actions",
    //   header: () => "Acciones",
    //   cell: (info) => {
    //     return (
    //       <ButtonGroup aria-label="Basic example"> 
    //         <AdminTableActionButton icon={faEye} tooltip="Ver" onClick={() => openDetailsModal()}/>
    //         <AdminTableActionButton icon={faShare} tooltip="Compartir" onClick={() => openShareModal()}/>
    //         <AdminTableActionButton icon={faXmark} tooltip="Cancelar" onClick={() => openCancelModal()}/>
    //       </ButtonGroup>
    //     );
    //   },
    // }),
  ];

  return(
    <Fragment>
      <AdminPageHeader title="Certificados">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Certificados</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminModal
        show={detailsModal}
        onHide={() => setDetailsModal(false)}
        onClick={ () => handleDetails()}
        title="Detalles"
        text="Detalles del certificado."
        buttonText="Algo"
      />

      <AdminModal
        show={shareModal}
        onHide={() => setShareModal(false)}
        onClick={ () => handleShare()}
        title="Compartir"
        text="Compartir certificado."
        buttonText="Compartit"
      />

      <AdminModal
        show={cancelModal}
        onHide={() => setCancelModal(false)}
        onClick={ () => handleCancel()}
        title="Cancelar"
        text="Certificado cancelado"
        buttonText="Cancelar"
      />

      <AdminCardContainer xs={12}>
        {dataLoading ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable columns={columns} defaultData={issuers}>

        <Link href={"/admin/certificates/create-certificate"}>
          <Button variant="primary">
            Nuevo
          </Button>
        </Link>
          </AdminTable>
        )}
      </AdminCardContainer>

      <AdminCardContainer xs={12}>
      <div className="mx-3">
        <h1>Lista de Transacciones</h1> <hr />
        {transactionHashes.map((txHash) => (
          <div key={txHash}>
            <p>
              <strong>Hash:</strong> {txHash}
            </p>
            <p>
              <strong>Estado:</strong>{' '}
              {transactionStatuses[txHash] ? (
                <span>{transactionStatuses[txHash].status}</span>
              ) : (
                'Cargando...'
              )}
            </p>
          </div>
        ))}
      </div>
      </AdminCardContainer>


    </Fragment>
  );
}