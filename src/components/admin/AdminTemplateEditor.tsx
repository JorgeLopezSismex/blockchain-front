import { get } from "http";
import { useEffect, useState, useRef } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";

export default function AdminTemplateEditor({}: {}) {
  const emailEditorRef = useRef<EditorRef>(null);
  const [loadDesign, setLoadDesign] = useState(true);

  useEffect(() => {
    // getDesign();
  }, []);

  const getDesign = async () => {
    if (loadDesign) {
      fetch(
        "http://68.178.207.49:8109/Files/Issuers/Mw==/Templates/5zKqOWivlkxJxsV7bswisiaaZRgJadSxYurlFCmHdEjgPP9tyd/5zKqOWivlkxJxsV7bswisiaaZRgJadSxYurlFCmHdEjgPP9tyd-design.json"
      )
        .then((res) => res.json())
        .then((json) => {
          console.log("Esto es el json", json);

          if (emailEditorRef.current) {
            emailEditorRef.current.loadDesign(json);
            setLoadDesign(false);
            //   setLoadingEditor(false);
          }
        });
    }
  };

  return (
    <EmailEditor
      onReady={getDesign}
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
  );
}
