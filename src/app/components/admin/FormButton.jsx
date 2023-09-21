import { Fragment } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";

export default function FormButton(props /*, loading*/){
    return(
        <Form.Group>
            <div className="d-grid gap-2">
                <Button type="submit" variant="primary" /*disabled={loading}*/ size="lg">
                    {props.text}
                    {/* {!loading ? (
                        text
                    ) : (
                        <Fragment>
                            <Spinner
                             as="span"
                             animation="border"
                             size="sm"
                             role="status"
                             aria-hidden="true"
                            />
                            <span>Cargando...</span>
                        </Fragment>
                    )} */}
                </Button>
            </div>
        </Form.Group>
    );
}