"use client";
//Ventana de precios (ง •_•)ง
import PricingCard from "../../components/main/PricingCard";
import { Col, Container, Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import { apiFetch } from "@/helpers/api-fetch";

export default function Pricing() {
  let response = {
    data: [
      {
        membershipId: 0,
        membershipName: "Free",
        membershipDescription: "Free membership",
        membershipFeatureDescription: [
          {
            membershipFeatureDescription: "New feature",
          },
        ],
      },
      {
        membershipId: 1,
        membershipName: "Single",
        membershipDescription: "Single membership",
        membershipFeatureDescription: [],
      },
      {
        membershipId: 2,
        membershipName: "Tiered",
        membershipDescription: "E-commerce businesses can benefit",
        membershipFeatureDescription: [],
      },
      {
        membershipId: 3,
        membershipName: "Pay-As-You-Go",
        membershipDescription:
          "Cloud service providers often use a pay-as-you-go model. ",
        membershipFeatureDescription: [],
      },
      {
        membershipId: 4,
        membershipName: "Premium",
        membershipDescription: "Many mobile apps offer a freemium model",
        membershipFeatureDescription: [],
      },
    ],
    status: 200,
  };

  const [loading, setLoading] = useState(false);
  const [memberships, setMemberships] = useState([]);

  return (
    <Container>
      <Row className="py-1 px-1 mt-5 mb-2 mx-1" style={{ textAlign: "center" }}>
        <h1>Planes</h1>
        <p>
          Conoce nuestros planes. Nos adaptamos a tus necesidades. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam velit risus,
          dictum et nibh vel, pretium rhoncus est. Suspendisse id odio ac libero
          eleifend dapibus eget a leo. Sed aliquet metus nec est hendrerit, et
          viverra elit maximus.
        </p>
      </Row>
      <Row className="d-flex justify-content-center">
        {response.data.map((membership) => (
          <Col xs={12} md={6} lg={4} style={{ marginBottom: 30 }}>
            <PricingCard membership={membership} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
