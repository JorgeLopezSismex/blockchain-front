import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

export default function FormInputFile({
  sm,
  md,
  name,
  label,
  value,
  accept,
  errors,
  controlId,
  setFieldValue,
}:any) {
  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <Form.Control
          type="file"
          name={name}
          accept={accept}
          isInvalid={!!errors}
          onChange={(e) => {
            if (!e.target.files) {
              return;
            }

            const file = e.target.files[0];
            if (file == undefined || file == null) {
              return;
            }

            setFieldValue(name, e.target.files[0]);
          }}
        />

        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}
