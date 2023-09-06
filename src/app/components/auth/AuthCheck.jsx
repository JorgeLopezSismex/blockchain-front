import Form from "react-bootstrap/Form";

export default function AuthCheck({ text, name, handleChange, errors }) {
  return (
    <Form.Group className="mb-3">
      <Form.Check
        name={name}
        label={text}
        onChange={handleChange}
        isInvalid={!!errors.terms}
        feedback={errors.terms}
        feedbackType="invalid"
      />
    </Form.Group>
  );
}
