"use client"
//Detalles de invitaciones ༼ つ ◕_◕ ༽つ
import Link from "next/link";
import Button from "react-bootstrap/Button";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

export default function InvitationDetails(){
  return(
    <>
      <AdminPageHeader title="Detalles de invitación">
        <Breadcrumb className="float-sm-right">
          <Breadcrumb.Item>
            <Link href={"/admin"} style={{textDecoration: "none"}}>
              Inicio
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Detalles</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        <h4>Detalles de la invitación</h4>
        <p><b>ID:</b> 02546689</p>
        <p><b>Correo:</b>example@email.com</p>
        <p><b>Fecha:</b> 12/10/2023</p>
        <p><b>Estado:</b> Sin aceptar</p>
        <Link href={"/admin/invitations"}>
          <Button variant="outline-secondary">Atras</Button>
        </Link>
        <Button className="mx-2">Reenviar</Button>
      </AdminCardContainer>
    </>
  );
}