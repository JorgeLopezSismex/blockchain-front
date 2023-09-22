import { Fragment } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";

export default function FormButton({ label, type }) {
  return (
    <Form.Group>
      <div>
        <Button type={type} variant="primary" /*disabled={loading}*/ size="lg">
          {label}
        </Button>
      </div>
    </Form.Group>
  );
}
