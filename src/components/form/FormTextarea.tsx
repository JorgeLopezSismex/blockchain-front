import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

export default function FormTextarea({
    sm,
    md, 
    id,
    label,
    name,
    value,
    errors,
    handleChange,
    placeholder,
}:any){
    return(
        <Form.Group className="mb-3" as={Col} sm={sm} md={md} controlId={id}>
          <Form.Label>{label}</Form.Label>
          <InputGroup hasValidation>
            <Form.Control 
                as="textarea" 
                rows={3} 
                name={name}
                value={value}
                isInvalid={!!errors}
                onChange={handleChange}
                placeholder={placeholder}
            />
            <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
    );
}