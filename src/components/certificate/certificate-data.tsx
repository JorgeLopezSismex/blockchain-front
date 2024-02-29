import moment from "moment";
import { Container } from "react-bootstrap";

export default function CertificateData({ certificate }: { certificate: any }) {
  return (
    <Container>
      <div
        style={{
          wordWrap: "break-word",
          paddingTop: 20,
          paddingBottom: 10,
        }}
      >
        <h6>FECHA DE EMISIÓN</h6>
        <p>{moment(certificate.signers[0].signingDate).format("DD/MM/YYYY")}</p>

        <h6>EMISOR</h6>
        <p>{certificate.signers[0].issuerName}</p>

        <h6>TIPO DE FIRMA DIGITAL</h6>
        <p>{`${certificate.signers[0].signatureSuiteType} (${certificate.signers[0].chain.name})`}</p>

        <h6>INFORMACIÓN DEL EMISOR</h6>
        <p>
          <a href={certificate.signers[0].issuerProfileUrl}>
            {certificate.signers[0].issuerProfileUrl}
          </a>
        </p>

        <h6>LLAVE PÚBLICA DEL EMISOR</h6>
        <p>{certificate.signers[0].issuerPublicKey}</p>

        <h6>ID DE TRANSACIÓN</h6>
        <p>{certificate.signers[0].transactionId}</p>
      </div>
    </Container>
  );
}
