import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormInput from "@/components/form/FormInput";

import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";

import FormAsyncSelect from "@/components/form/FormAsyncSelect";
import { MemberData } from "@/types/members";

export default function MembersForm({
  newMember,
  loading,
  member,
  getRoles,
  values,
  errors,
  handleSubmit,
  handleChange,
  setFieldValue,
}: {
  newMember: boolean;
  loading: boolean;
  member: MemberData;
  getRoles: any;
  values: any;
  errors: any;
  handleSubmit: any;
  handleChange: any;
  setFieldValue: any;
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
          disabled={!newMember ? true : false}
          controlId="email"
          value={values.email}
          errors={errors.email}
          label="Correo electrónico"
          handleChange={handleChange}
          placeholder="Correo electrónico del miembro"
        />

        <FormAsyncSelect
          sm={12}
          md={6}
          errors={errors.roleId}
          name="roleId"
          label="Rol"
          setFieldValue={setFieldValue}
          defaultValue={member.roleName}
          defaultValueId={member.roleId}
          placeholder="Selecciona un rol"
          getOptions={() => getRoles("MEMBERS")}
        />
      </Row>

      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <AdminFormSubmitButton loading={loading} />
        <AdminFormBackButton loading={loading} backUrl="../members" />
      </div>
    </Form>
  );
}
