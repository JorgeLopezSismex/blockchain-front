export default function AdminDownloadLink({
  url,
  fileName,
  linkText,
}: {
  url: string;
  fileName: string;
  linkText: string;
}) {
  const downloadLink = async (url: any, fileName: string) => {
    try {
      const response = await fetch(url);
      const file = await response.blob();
      const link = document.createElement("a");

      link.href = URL.createObjectURL(file);
      link.download = fileName;

      link.click();
    } catch (error) {
      alert("No se pudo descargar el archivo");
    }
  };

  return (
    <a
      type="button"
      onClick={() => downloadLink(url, fileName)}
      style={{ color: "#0d6efd", textDecoration: "underline" }}
    >
      {linkText}
    </a>
  );
}
