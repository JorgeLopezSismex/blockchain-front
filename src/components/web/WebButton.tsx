import { Button } from "react-bootstrap";
import "../../app/globals.css";

export default function WebButton({ label }: { label: string }) {
  return (
    <Button size="lg" className="web-button rounded-pill">
      {label}
    </Button>
  );
}
