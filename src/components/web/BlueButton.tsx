import { Button } from "react-bootstrap";
import "../../app/globals.css";

export default function BlueButton({ label }: { label: string }) {
  return (
    <Button size="lg" className="blue-button rounded-pill">
      {label}
    </Button>
  );
}
