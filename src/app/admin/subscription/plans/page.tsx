"use client";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { Fragment, useEffect } from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminPriceCard from "@/components/admin/AdminPriceCard";
import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AdminSubscriptionPlans() {
  useEffect(() => {});

  return (
    <Fragment>
      <AdminPageHeader title="Planes de pago">
        <Breadcrumb className="float-sm-right">
          <Breadcrumb.Item>
            <Link href={"/admin"} style={{ textDecoration: "none" }}>
              Inicio
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              href={"/admin/subscription"}
              style={{ textDecoration: "none" }}
            >
              Subscripciones
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Planes de pago</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <Container fluid>
        <Row>
          <AdminPriceCard />
          <AdminPriceCard />
          <AdminPriceCard />
          <AdminPriceCard />
        </Row>
      </Container>
    </Fragment>
  );
}
