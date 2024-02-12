import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";
import FormInputFile from "@/components/form/FormInputFile";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

export default function CertificatesForm({
  values,
  errors,
  loadingForm,
  handleSubmit,
  setFieldValue,
  getTemplates,
}: {
  values: any;
  errors: any;
  loadingForm: boolean;
  handleSubmit: any;
  setFieldValue: any;
  getTemplates: any;
}) {
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
        <FormAsyncSelect
          sm={12}
          md={12}
          disabled={false}
          name="templateId"
          label="Plantilla"
          defaultValue={null}
          defaultValueId={null}
          errors={errors.templateId}
          setFieldValue={setFieldValue}
          getOptions={() => getTemplates()}
          placeholder="Selecciona una plantilla"
        />

        <FormInputFile
          sm={12}
          md={12}
          name="file"
          label="Roster"
          required={true}
          controlId="file"
          value={values.file}
          errors={errors.file}
          setFieldValue={setFieldValue}
          accept="xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
      </Row>

      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <AdminFormSubmitButton loading={loadingForm} label="Validar" />
        <AdminFormBackButton loading={loadingForm} backUrl="../invitations" />
      </div>
    </Form>
  );
}
