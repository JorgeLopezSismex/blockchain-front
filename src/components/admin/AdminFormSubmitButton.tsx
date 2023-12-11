import { Fragment } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

export default function AdminFormSubmitButton({
  loading,
  label,
}: {
  loading: boolean;
  label?: string;
}) {
  return (
    <Button type="submit" variant="primary" disabled={loading}>
      {!loading ? (
        label == null ? (
          "Guardar"
        ) : (
          label
        )
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
  );
}
