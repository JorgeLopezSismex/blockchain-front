import { Card, Col } from "react-bootstrap";
import SecondayButton from "./SecondaryButton";

export default function PriceCard({
  children,
  name,
  price,
  period,
}: {
  children: React.ReactNode;
  name: string;
  price: number;
  period: string;
}) {
  return (
    <Col xs={12} md={4}>
      <Card className="plan-card">
        <Card.Title className="d-flex justify-content-center plan-card-name">
          {name}
        </Card.Title>
        <div className="d-flex justify-content-center align-items-end plan-card-price-container">
          <h1 className="plan-card-price">${price}</h1>
          <p className="plan-card-period">/ {period}</p>
        </div>

        <div className="d-flex justify-content-center">
          <ul className="plan-card-feature-list">{children}</ul>
        </div>

        <div className="d-flex justify-content-center">
          <SecondayButton label="Comprar"></SecondayButton>
        </div>
      </Card>
    </Col>
  );
}
