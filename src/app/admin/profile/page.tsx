"use client";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Fragment, useEffect, useState } from "react";

import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminProfileCard from "@/components/admin/AdminProfileCard";
import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import moment from "moment";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import Link from "next/link";
import { apiFetch } from "@/helpers/api-fetch";

export default function Profile() {
  const [profile, setProfile]= useState({});
  const [dataLoading, setDataLoading] = useState(true);

  useEffect (() => {
    getProfile();
  },[]);

  const getProfile = async () =>{
    setDataLoading(true);
    const res = await apiFetch("authorization/profile?IssuerId=2");
    if(res.success){
      console.log(res);
      setProfile(res.data[0]);
      console.log(res.data[0]);
    }
  };
  return (
    <Fragment>
      <AdminPageHeader title="Mi perfil">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Perfil</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <AdminProfileCard
              title={"Verificación"}
              text1={"Estado de verificación: "}
              text2={profile.issuerVerificationStatusName}
              action={"Gestionar"}
              link={"/admin/verification"}
            />

            <AdminProfileCard
              title={"Subscripción"}
              text1={"Activo desde: "}
              text2={"12/12/2023"}
              action={"Gestionar"}
              link={"/admin/subscription"}
            />

            <AdminProfileCard
              title={"user@mail.com"}
              text1={"Cuenta creada: "}
              text2={moment(profile.createdAt).format("DD/MM/YYYY")}
              action={"Cambiar contraseña"}
              link={"/admin/update"}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
