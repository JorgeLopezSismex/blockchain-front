"use client";

import { Fragment } from "react";
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
    {
      id: 4,
      name: "Minecraft",
      price: 250,
      description: "For minecraft players",
    },
    {
      id: 5,
      name: "Drak souls",
      price: 500,
      description: "Very dificult plan, looking for a challenge?",
    },
  ];

  console.log(plans);

  console.log("Hola mundoasdadadas");

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

/*
"use client";

import { Main } from 'next/document';

import MainNav from '../../components/main/MainNav';
import MainFoot from '../../components/main/MainFoot';
import MainCard from '../../components/main/MainCards';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Prices(){
    return(
        <div>
            <Container fluid>
                <Row>
                    <MainNav/>
                </Row>
                <Row>
                    <Col className='mb-5 mt-5'>
                        <h1>Precios</h1>
                    </Col>
                </Row>
                <Row>
                    <p>Nos adaptamos a tus necesidades.</p>
                </Row>
                <Row>
                    <Col> <MainCard/> </Col>
                    <Col> <MainCard/> </Col>
                    <Col> <MainCard/> </Col>
                </Row>
                <Row>
                    <MainFoot/>
                </Row>
            </Container>
        </div>
    );
}


*/
