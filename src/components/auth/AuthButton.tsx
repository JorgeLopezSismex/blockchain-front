import { Fragment } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import Form from "react-bootstrap/Form";

export default function AuthButton({
  text,
  loading,
  disabled,
}: {
  text: String;
  loading: boolean;
  disabled?: boolean;
}) {
  return (
    <Form.Group as={Col} md="12">
      <div className="d-grid gap-2">
        <Button
          type="submit"
          variant="primary"
          disabled={loading ? true : disabled ? true : false}
          size="lg"
        >
          {!loading ? (
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
              <span> Cargando...</span>
            </Fragment>
          )}
        </Button>
      </div>
    </Form.Group>
  );
}
