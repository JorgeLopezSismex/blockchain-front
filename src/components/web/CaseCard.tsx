import "../../app/globals.css";
import Image from "next/image";

import { Card, Col } from "react-bootstrap";

export default function CaseCard({
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
    <Col xs={12} md={4} className="feture-card-container">
      <Card className="h-100">
        <Card.Img variant="top" src={iconPath} />
        <Card.Body>
          <Card.Title className="case-card-title">{title}</Card.Title>
          <Card.Text className="case-card-text">{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
