import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col";

export default function FormFile({
    label,
    sm,
    md,
    controlId,
    name,
    value,
    handleChange,
}){
    return(
        <Form.Group as={Col} sm={sm} md={md} className="mb-3" controlId={controlId}>
          <Form.Label>{label}</Form.Label>
            <InputGroup>
                <Form.Control 
                    type="file" 
                    name={name}
                    value={value}
                    onChange={handleChange}
                />
            </InputGroup>
        </Form.Group>
    );
}