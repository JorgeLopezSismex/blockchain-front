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
      <Row className="py-1 px-1 mt-5 mb-2 mx-1" style={{textAlign:"center"}}>
        <h1>Planes</h1>
        <p>Conoce nuestros planes. Nos adaptamos a tus necesidades. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam velit risus, dictum et nibh vel, pretium rhoncus est. Suspendisse id odio ac libero eleifend dapibus eget a leo. 
        Sed aliquet metus nec est hendrerit, et viverra elit maximus.
        </p>
      </Row>
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