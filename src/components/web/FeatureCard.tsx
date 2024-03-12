import Card from "react-bootstrap/Card";

export default function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <img src="../../public/web/lock-icon.png" alt="" />
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
