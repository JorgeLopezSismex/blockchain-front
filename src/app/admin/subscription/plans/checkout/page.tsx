"use client";

import { useSearchParams } from "next/navigation";
import { Fragment, useState, useEffect } from "react";

import { Container, Row, Col, Card, Accordion, Button } from "react-bootstrap";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import { PlanData } from "@/types/plans";
import { FeatureData } from "@/types/plans";
import { apiFetch } from "@/helpers/api-fetch";

export default function PlanCheckout() {
  const searchParams = useSearchParams();
  const planKey = searchParams.get("plan");
  const [plan, setPlan] = useState({} as PlanData);
  const [loadingData, setLoadingData] = useState(true);

  const [mercadoPagoPreference, setMercadoPagoPreference] = useState(null);

  useEffect(() => {
    getPlan();
  }, []);

  const getPlan = async () => {
    setLoadingData(true);
    const res = await apiFetch(`plans/key/${planKey}`);
    if (res.status) {
      setPlan(res.data);
      setLoadingData(false);
    }
  };

  const newMercadoPagoPreference = async () => {
    if (mercadoPagoPreference == null) {
      const preferenceData = {
        items: [
          {
            title: `Plan ${plan.name}`,
            description: plan.description,
            picture_url:
              "https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg",
            quantity: 1,
            currency_id: "USD",
            unit_price: plan.price,
          },
        ],
      };

      console.log(preferenceData);
    }
  };

  return (
    <Fragment>
      <AdminPageHeader title="Resumen de compra">sds</AdminPageHeader>

      <Container fluid>
        {loadingData ? (
          <AdminTableSpinner />
        ) : (
          <Row>
            <Col xs={12} md={6} className="order-md-2">
              <h5>Resumen del pedido</h5>
              <Card style={{ marginBottom: 60 }}>
                <Card.Body>
                  <h5>Plan {plan.name}</h5>
                  <p>{plan.description}</p>

                  <ul>
                    {plan.features == null
                      ? null
                      : plan.features.map((feature: FeatureData) => (
                          <li key={feature.id}>{feature.description}</li>
                        ))}
                  </ul>

                  <hr></hr>
                  <h4 className="d-flex flex-row-reverse">
                    Total ${plan.price} USD
                  </h4>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} className="order-md-1">
              <h5>Seleccionar método de pago</h5>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <p style={{ margin: 0, padding: 0, fontWeight: "bold" }}>
                      Tarjeta de credito o debito
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <p style={{ margin: 0, padding: 0, fontWeight: "bold" }}>
                      Paypal
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" onClick={newMercadoPagoPreference}>
                  <Accordion.Header>
                    <p style={{ margin: 0, padding: 0, fontWeight: "bold" }}>
                      Mercado Pago
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <AdminTableSpinner />
                    <p>CARGANDO MERCAGO pAGO</p>

                    <p>
                      Los servicios se basan en una suscripción y se renovarán
                      automáticamente hasta que los canceles. Consulta los
                      términos de suscripción y cancelación. Los pagos se cobran
                      en USD. Pueden aplicarse tarifas de tu proveedor de pago.
                      Serás redirigido al procesador de pago Paddle para
                      completar tu pago con PayPal.
                    </p>
                    {/* <Wallet
                    customization={customization}
                    onSubmit={onSubmit}
                    onReady={onReady}
                    onError={onError}
                  /> */}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        )}
      </Container>
    </Fragment>
  );
}
