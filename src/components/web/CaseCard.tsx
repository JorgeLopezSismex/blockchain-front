import "../../app/globals.css";
import Image from "next/image";

import { Card, Col } from "react-bootstrap";

export default function CaseCard({
  title,
  text,
  imagePath,
  imageAlt,
}: {
  title: string;
  text: string;
  imagePath: string;
  imageAlt: string;
}) {
  return (
    <Col xs={12} md={4}>
      <Card className="case-card">
        <Card.Img variant="top" src={imagePath} />
        <Card.Body>
          <Card.Title className="case-card-title">{title}</Card.Title>
          <Card.Text className="case-card-text">{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
