import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";

export default function AdminFormBackButton({
  loading,
  backUrl,
}: {
  loading: boolean;
  backUrl: string;
}) {
  const router = useRouter();

  return (
    <Button
      disabled={loading}
      variant="outline-secondary"
      style={{ marginInline: 10 }}
      onClick={() => {
        router.push(backUrl);
      }}
    >
      Atrás
    </Button>
  );
}
