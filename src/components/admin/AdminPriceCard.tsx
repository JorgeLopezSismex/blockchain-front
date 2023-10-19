import Link from "next/link";
import Card from "react-bootstrap/Card";

export default function AdminPriceCard({ plan }: { plan: any }) {
  return (
    <Card
      style={{
        width: "100%",
        minHeight: 360,
        marginBottom: 30,
        marginLeft: "0px !important",
        marginRight: "0px !important",
      }}
    >
      <Card.Header>{plan.name}</Card.Header>
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <h1>${plan.price}</h1>
        </Card.Title>
        <Card.Subtitle style={{ marginBottom: 20 }}>
          {plan.description}
        </Card.Subtitle>

        <ul>
          {plan.features.map((feature: any) => (
            <li key={feature.id}>{feature.description}</li>
          ))}
        </ul>
      </Card.Body>

      <Link
        href={"admin"}
        className="btn btn-primary"
        style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}
      >
        Conseguir plan {plan.name}
      </Link>
    </Card>
  );
}
