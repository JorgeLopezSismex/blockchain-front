import moment from "moment";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import FormInputFile from "@/components/form/FormInputFile";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

export default function CertificateBatchForm({
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
          md={6}
          name="roster"
          required={true}
          controlId="file"
          value={values.file}
          errors={errors.file}
          label="Archivo de registros"
          setFieldValue={setFieldValue}
          accept="xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />

        <FormDatePicker
          md={6}
          sm={12}
          name="signatureDate"
          label="Fecha de firma"
          setFieldValue={setFieldValue}
          placeholder="Selecciona una fecha"
          minDate={moment().subtract(1, "days")}
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
