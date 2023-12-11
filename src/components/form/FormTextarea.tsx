import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

export default function FormTextarea({
  sm,
  md,
  id,
  rows,
  label,
  name,
  value,
  errors,
  readOnly,
  handleChange,
  placeholder,
}: {
  sm: number;
  md: number;
  id: string;
  rows?: number;
  label: string;
  name: string;
  value: any;
  errors: any;
  readOnly?: boolean;
  handleChange: any;
  placeholder: string;
}) {
  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md} controlId={id}>
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <Form.Control
          as="textarea"
          name={name}
          value={value}
          readOnly={readOnly == null ? false : true}
          isInvalid={!!errors}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows == null ? 3 : rows}
        />
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}
