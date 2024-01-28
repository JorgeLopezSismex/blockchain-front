import { Col } from "react-bootstrap";
import AdminDownloadLink from "./AdminDownloadLink";

export default function AdminFileDetail({
  attachment,
  label,
  downloadLabel,
}: {
  attachment: any | null;
  label: string;
  downloadLabel: string;
}) {
  return (
    <Col xs={12} md={6} className="mb-3">
      <h6>{label}</h6>
      {attachment == null ? (
        <p>Archivo no disponible</p>
      ) : (
        <AdminDownloadLink
          linkText={downloadLabel}
          url={attachment.downloadUrl}
          fileName={attachment.originalFileName}
        />
      )}
    </Col>
  );
}
