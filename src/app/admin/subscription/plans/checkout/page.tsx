"use client";

import Link from "next/link";
import { Fragment } from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

import AdminPaymentMethodCard from "@/components/admin/AdminPaymentMethodCard";

import { initMercadoPago } from "@mercadopago/sdk-react";
import { Wallet } from "@mercadopago/sdk-react";

initMercadoPago("TEST-ed1c9a26-e46a-4135-8690-6d234ed43e78");

function CustomToggle({
  children,
  eventKey,
}: {
  children: any;
  eventKey: any;
}) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function PlanCheckout() {
  const onSubmit = async () => {
    // callback llamado al hacer clic en Wallet Brick
    // esto es posible porque el Brick es un botón
    // en este momento del envío, debe crear la preferencia
    const yourRequestBodyHere = {
      items: [
        {
          id: "202809963",
          title: "Dummy title",
          description: "Dummy description",
          quantity: 1,
          unit_price: 10,
        },
      ],
      purpose: "wallet_purchase",
    };
    return new Promise((resolve, reject) => {
      fetch("/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(yourRequestBodyHere),
      })
        .then((response) => response.json())
        .then((response) => {
          // resolver la promesa con el ID de la preferencia
          resolve(response.preference_id);
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear preferencia
          reject();
        });
    });
  };

  const onError = async (error: any) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
  };

  const onReady = async () => {
    /*
            Callback llamado cuando Brick está listo.
            Aquí puedes ocultar loadings de su sitio, por ejemplo.
          */
  };

  const customization = {
    visual: {
      texts: {
        action: "buy",
        valueProp: "security_details",
      },
    },
  };

  return (
    <Fragment>
      <AdminPageHeader title="Resumen de compra">
        <Breadcrumb className="float-sm-right">
          <Breadcrumb.Item>
            <Link href={"/admin"} style={{ textDecoration: "none" }}>
              Inicio
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Mi perfil</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <Container fluid>
        <Row>
          <Col xs={12} md={6} className="order-md-2">
            <h5>Resumen del pedido</h5>
            <Card style={{ marginBottom: 60 }}>
              <Card.Body>Información de la compra</Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h5>Seleccionar método de pago</h5>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p style={{ margin: 0, padding: 0, fontWeight: "bold" }}>
                    Paypal
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p style={{ margin: 0, padding: 0, fontWeight: "bold" }}>
                    Mercado Pago
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Los servicios se basan en una suscripción y se renovarán
                    automáticamente hasta que los canceles. Consulta los
                    términos de suscripción y cancelación. Los pagos se cobran
                    en USD. Pueden aplicarse tarifas de tu proveedor de pago.
                    Serás redirigido al procesador de pago Paddle para completar
                    tu pago con PayPal.
                  </p>
                  <Wallet
                    customization={customization}
                    onSubmit={onSubmit}
                    onReady={onReady}
                    onError={onError}
                  />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <p style={{ margin: 0, padding: 0, fontWeight: "bold" }}>
                    Stripe
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
