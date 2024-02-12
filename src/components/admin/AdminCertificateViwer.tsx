export default function AdminCertificateViwer({
  htmlString,
}: {
  htmlString: string;
}) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}
