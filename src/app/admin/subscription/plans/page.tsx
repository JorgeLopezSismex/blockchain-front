"use client";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { Fragment, useEffect, useState } from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminPriceCard from "@/components/admin/AdminPriceCard";
import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import { apiFetch } from "@/helpers/api-fetch";

export default function AdminSubscriptionPlans() {
  const [plans, setPlans] = useState([]);
  const [annualPlans, setAnnualPlans] = useState([]);
  const [monthlyPlans, setMonthlyPlans] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    getPlans();
  }, []);

  const getPlans = async () => {
    setLoadingData(true);
    const res = await apiFetch("plans");
    if (res.success) {
      setPlans(res.data);
      setMonthlyPlans(
        res.data.filter((item: any) => item.billingCycle === "Monthly")
      );

      setAnnualPlans(
        res.data.filter((item: any) => item.billingCycle === "Annual")
      );

      setLoadingData(false);
    }
  };

  return (
    <Fragment>
      <AdminPageHeader title="Nuestros planes">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../admin/profile"}>
            Perfil
          </Link>
          <Link className="breadcrumb-item" href={"../admin/subscription"}>
            Subscripción
          </Link>
          <Breadcrumb.Item active>Planes</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <Container fluid>
        <Row>
          <Col xs={12}>
            {loadingData ? (
              <AdminTableSpinner />
            ) : (
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="monthly-plans"
              >
                <Row style={{ marginBottom: 20 }}>
                  <Col sm={12} className="d-flex justify-content-center">
                    <Nav variant="pills" className="">
                      <Nav.Item>
                        <Nav.Link eventKey="monthly-plans">
                          Planes mensuales
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="annual-plans">
                          Planes anuales
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>

                <Tab.Content>
                  <Tab.Pane eventKey="monthly-plans">
                    <Row className="d-flex justify-content-center">
                      {monthlyPlans.map((plan: any) => {
                        return (
                          <Col key={plan.id} xs={12} md={4}>
                            <AdminPriceCard plan={plan} />
                          </Col>
                        );
                      })}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="annual-plans">
                    <Row className="d-flex justify-content-center">
                      {monthlyPlans.map((plan: any) => {
                        return (
                          <Col key={plan.id} xs={12} md={4}>
                            <AdminPriceCard plan={plan} />
                          </Col>
                        );
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
