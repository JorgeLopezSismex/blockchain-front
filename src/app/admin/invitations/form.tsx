import { Form, Row } from "react-bootstrap";

import FormInput from "@/components/form/FormInput";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

export default function InvitationsForm({
  values,
  errors,
  handleChange,
  handleSubmit,
  loadingForm,
}: {
  values: any;
  errors: any;
  handleChange: any;
  handleSubmit: any;
  loadingForm: boolean;
}) {
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row>
        <FormInput
          sm={12}
          md={6}
          type="text"
          name="name"
          label="Nombre"
          controlId="name"
          disabled={false}
          value={values.name}
          errors={errors.name}
          handleChange={handleChange}
          placeholder="Nombre(s) del invitado"
        />

        <FormInput
          sm={12}
          md={6}
          type="text"
          name="lastName"
          disabled={false}
          label="Apellido(s)"
          controlId="LastName"
          value={values.lastName}
          errors={errors.lastName}
          handleChange={handleChange}
          placeholder="Apellido(s) del invitado"
        />

        <FormInput
          sm={12}
          md={12}
          type="text"
          name="email"
          disabled={false}
          controlId="email"
          value={values.email}
          errors={errors.email}
          label="Correo electrónico"
          handleChange={handleChange}
          placeholder="Correo electrónico en donde se recibirá la invitación"
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <AdminFormSubmitButton loading={loadingForm} />
          <AdminFormBackButton loading={loadingForm} backUrl="../invitations" />
        </div>
      </Row>
    </Form>
  );
}
