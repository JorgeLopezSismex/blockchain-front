"use client";
//Ventana de precios (ง •_•)ง 
import PricingCard from "../../components/main/PricingCard";
import { Col, Container, Row } from "react-bootstrap";

export default function Pricing() {
  let plans = [
    {
      id: 1,
      name: "free",
      price: 10,
      description: "Free plan",
    },
    {
      id: 2,
      name: "Free Max",
      price: 25,
      description: "Max plan",
    },
    {
      id: 3,
      name: "Super plan",
      price: 50,
      description: "Newer plan for users",
    },
  ];

  console.log(plans);

  return (
    <Container>
      <Row>
        {plans.map((plan) => (
          <Col xs={12} md={4}>
            <PricingCard
              name={plan.name}
              price={plan.price}
              description={plan.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}