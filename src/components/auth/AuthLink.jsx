import Link from "next/link";

export default function AuthLink({ link, text }) {
  return (
    <Link
      href={link}
      style={{ fontSize: 14, color: "#888", textDecoration: "underline" }}
    >
      {text}
    </Link>
  );
}
