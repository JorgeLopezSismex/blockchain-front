import Link from "next/link";
import Image from "next/image";

export default function SocialMediaIcon({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Link href={"sdfs"}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
}
