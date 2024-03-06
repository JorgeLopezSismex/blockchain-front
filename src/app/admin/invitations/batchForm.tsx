import { Form, Row, Col, Button } from "react-bootstrap";

import AdminTable from "@/components/admin/AdminTable";
import FormInputFile from "@/components/form/FormInputFile";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";
import { useEffect, useState } from "react";

export default function InvitationsBatchForm({
  values,
  errors,
  handleSubmit,
  setFieldValue,
  loadingForm,
  batchResultData,
  setBatchResultData,
  invitationsBatchTableColumns,
  batchFinished,
  setBatchFinished,
}: {
  values: any;
  errors: any;
  handleSubmit: any;
  setFieldValue: any;
  loadingForm: boolean;
  batchResultData: any[];
  setBatchResultData: any;
  invitationsBatchTableColumns: any;
  batchFinished: boolean;
  setBatchFinished: any;
}) {
  const [fieldKey, setFieldKey] = useState(0);

  const clearForm = () => {
    setBatchResultData([]);

    setFieldKey(fieldKey + 1);
    setFieldValue("file", null);

    setBatchFinished(false);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
        <FormInputFile
          sm={12}
          md={12}
          key={fieldKey}
          name="file"
          label="Excel"
          required={true}
          controlId="file"
          value={values.file}
          errors={errors.file}
          setFieldValue={setFieldValue}
          accept="xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
      </Row>

      {batchResultData.length == 0 ? null : (
        <Row className="mt-3 mb-3">
          <Col xs={12}>
            <h3>Resultados del envío de invitaciones</h3>
            <AdminTable
              defaultData={batchResultData}
              columns={invitationsBatchTableColumns()}
            >
              {null}
            </AdminTable>
          </Col>
        </Row>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        {batchFinished ? (
          <Button type="button" onClick={clearForm}>
            Enviar nuevo archivo
          </Button>
        ) : (
          <AdminFormSubmitButton loading={loadingForm} label="Guardar" />
        )}
        <AdminFormBackButton loading={loadingForm} backUrl="../invitations" />
      </div>
    </Form>
  );
}
