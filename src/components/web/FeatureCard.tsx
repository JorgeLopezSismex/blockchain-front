import "../../app/globals.css";
import Image from "next/image";

import { Card, Col } from "react-bootstrap";

export default function FeatureCard({
  title,
  text,
  iconPath,
  iconAlt,
}: {
  title: string;
  text: string;
  iconPath: string;
  iconAlt: string;
}) {
  return (
    <Col xs={12} md={3} className="feture-card-container">
      <Card className="h-100 feature-card">
        <Card.Body className="feature-card-body">
          <Image
            width={108}
            height={107}
            alt={iconAlt}
            src={iconPath}
            className="feature-card-icon"
          />
          <Card.Title className="feature-card-title">{title}</Card.Title>
          <Card.Text className="feature-card-text">{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
