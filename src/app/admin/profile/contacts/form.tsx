import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormInput from "@/components/form/FormInput";

import AdminFormBackButton from "@/components/admin/AdminFormBackButton";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

export default function ContactsForm({
  loading,
  values,
  errors,
  handleSubmit,
  handleChange,
}: {
  loading: boolean;
  values: any;
  errors: any;
  handleSubmit: any;
  handleChange: any;
}) {
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
        <FormInput
          md={6}
          sm={12}
          type="text"
          name="name"
          controlId="name"
          disabled={false}
          label="Nombre(s)"
          value={values.name}
          errors={errors.name}
          handleChange={handleChange}
          placeholder="Nombre(s) del miembro"
        />

        <FormInput
          md={6}
          sm={12}
          type="text"
          name="lastName"
          disabled={false}
          label="Apellido(s)"
          controlId="lastName"
          value={values.lastName}
          errors={errors.lastName}
          handleChange={handleChange}
          placeholder="Apellido(s) del miembro"
        />

        <FormInput
          md={6}
          sm={12}
          type="text"
          name="email"
          disabled={false}
          label="Correo electrónico"
          controlId="email"
          value={values.email}
          errors={errors.email}
          handleChange={handleChange}
          placeholder="Apellido(s) del miembro"
        />

        <FormInput
          md={6}
          sm={12}
          type="text"
          name="position"
          disabled={false}
          label="Posición"
          controlId="position"
          value={values.position}
          errors={errors.position}
          handleChange={handleChange}
          placeholder="Apellido(s) del miembro"
        />
      </Row>

      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <AdminFormSubmitButton loading={loading} />
        <AdminFormBackButton loading={loading} backUrl="../contacts" />
      </div>
    </Form>
  );
}
