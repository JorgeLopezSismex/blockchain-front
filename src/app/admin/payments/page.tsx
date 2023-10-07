"use client";

import { Fragment } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export default function Payments() {
  const customization = {
    texts: {
      action: "buy",
      valueProp: "security_details",
    },
  };

  initMercadoPago("APP_USR-3fa4aaea-fd91-455f-90bf-304046986f77");
  return (
    <Fragment>
      <Wallet
        locale="es-MX"
        customization={{
          texts: {
            action: "pay",
            valueProp: "security_safety",
          },
        }}
        initialization={{
          redirectMode: "modal",
          preferenceId: "199368358-041e17b7-bf89-4c4e-a738-d977f7926ca9",
        }}
      />
    </Fragment>
  );
}
