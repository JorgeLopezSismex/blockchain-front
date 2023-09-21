import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup";

export default function FormInput(props){
    return(
        <Form.Group as={Col} md="12" controlId="exampleForm.ControlInput1">
          <Form.Label>{props.label}</Form.Label>
          <Form.Control
            type={props.type}
            name={props.name}
            // value={props.value}
            placeholder={props.placeholder}
            // onChange={handleChange}
            // isInvalid={!!props.errors}
          />
          <Form.Control.Feedback type="invalid">{props.errors}</Form.Control.Feedback>
        </Form.Group>
    );
}