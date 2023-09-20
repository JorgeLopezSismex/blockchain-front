import Form from "react-bootstrap/Form"

export default function FormInput(props){
    return(
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{props.label}</Form.Label>
          <Form.Control placeholder="algo" />
        </Form.Group>
    );
}