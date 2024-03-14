import { Button } from "react-bootstrap";
import "../../app/globals.css";

export default function SecondayButton({ label }: { label: string }) {
  return (
    <Button size="lg" className="secondary-button rounded-pill">
      {label}
    </Button>
  );
}
