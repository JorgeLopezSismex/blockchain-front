import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormInput from "@/components/form/FormInput";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import { Fragment, useState, useEffect, useRef } from "react";

import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";

export default function TemplatesForm({
  values,
  errors,
  handleChange,
  handleSubmit,
  setFieldValue,
  loading,
  emailEditorRef,
  editorKey,
  setEditorKey,
  loadDesign,
}: {
  values: any;
  errors: any;
  handleChange: any;
  handleSubmit: any;
  setFieldValue: any;
  loading: any;
  emailEditorRef: any;
  editorKey: number;
  setEditorKey: any;
  loadDesign: any;
}) {
  return (
    <Form noValidate onSubmit={handleSubmit}>
      {values.name}
      <Row className="mb-3">
        <FormInput
          md={12}
          sm={12}
          type="text"
          name="name"
          label="Nombre"
          controlId="name"
          disabled={false}
          value={values.name}
          errors={errors.name}
          handleChange={handleChange}
          placeholder="Nombre de la plantilla"
        />

        <EmailEditor
          onReady={loadDesign}
          key={editorKey}
          ref={emailEditorRef}
          options={{ locale: "es-ES" }}
          tools={{
            button: {
              enabled: false,
            },
            menu: {
              enabled: false,
            },
          }}
        />

        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <AdminFormSubmitButton loading={loading} />
          <AdminFormBackButton loading={loading} backUrl="../templates" />
        </div>
      </Row>
    </Form>
  );
}

/*

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

*/
