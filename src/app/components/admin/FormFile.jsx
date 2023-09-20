import Form from "react-bootstrap/Form"

export default function FormFile(props){
    return(
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{props.label}</Form.Label>
            <Form.Control type="file" />
        </Form.Group>
    );
}