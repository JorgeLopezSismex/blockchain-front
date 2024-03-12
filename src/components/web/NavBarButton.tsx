import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

export default function NavBarButton({
  href,
  iconSrc,
  label,
}: {
  href: string;
  iconSrc: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      style={{ marginInline: 20 }}
      className="nav-bar-link-button-text"
    >
      <Image
        width="16"
        height="16"
        alt="sdfdfds"
        src={iconSrc}
        className="nav-bar-link-button-img"
      />
      {label}
    </Link>
  );
}
