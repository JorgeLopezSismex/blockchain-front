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
    <Col xs={12} sm={6} md={3} style={{ marginBottom: 40 }}>
      <Card className="h-100">
        <Card.Body className="">
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
