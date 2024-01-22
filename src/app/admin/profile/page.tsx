"use client";

import moment from "moment";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import { Row, Col, Container, Breadcrumb } from "react-bootstrap";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminProfileCard from "@/components/admin/AdminProfileCard";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import { apiFetch } from "@/helpers/api-fetch";
import { ProfilePermissionsData, ProfileData } from "@/types/profile";

export default function Profile() {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [permissions, setPermissions] = useState({} as ProfilePermissionsData);

  const [profile, setProfile] = useState({} as ProfileData);
  const [attachments, setAttachments] = useState({});

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "PROFILE_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        setPermissions(res.data);
        if (!res.data.LIST_PROFILE) {
          return null;
        }

        // Perfil
        getProfile();
      }
    });
  }, []);

  const getProfile = async () => {
    setLoadingProfile(true);
    apiFetch("profile").then((res) => {
      if (res.success) {
        setProfile(res.data);

        setLoadingScreen(false);
        setLoadingProfile(false);
      }
    });
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Perfil">
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
              text1={"Estado: "}
              action={"Gestionar"}
              title={"Contactos"}
              link={"/admin/profile/contacts"}
              text2={profile.issuerVerificationStatusName}
            />

            {!permissions.UPDATE_VERIFY_DATA ? null : (
              <AdminProfileCard
                text1={"Estado: "}
                action={"Gestionar"}
                title={"Verificación"}
                link={"/admin/profile/verification"}
                text2={profile.issuerVerificationStatusName}
              />
            )}

            {!permissions.UPDATE_SUBSCRIPTION ? null : (
              <AdminProfileCard
                title={"Subscripción"}
                text1={"Activo desde: "}
                text2={"12/12/2023"}
                action={"Gestionar"}
                link={"/admin/subscription"}
              />
            )}

            {!permissions.UPDATE_PASSWORD ? null : (
              <AdminProfileCard
                title={profile.email}
                text1={"Creado el: "}
                text2={moment(profile.createdAt).format("DD/MM/YYYY")}
                action={"Cambiar contraseña"}
                link={"/admin/profile/change-password"}
              />
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
