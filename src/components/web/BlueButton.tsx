import { Button } from "react-bootstrap";
import "../../app/globals.css";

export default function BlueButton({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Button href={href} size="lg" className="blue-button rounded-pill">
      {label}
    </Button>
  );
}
