import Link from "next/link";
import Image from "next/image";

export default function SocialMediaIcon({
  src,
  alt,
  width,
  height,
  spacing,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  spacing?: boolean;
}) {
  return (
    <Link href={"/socials"}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={!spacing ? {} : { marginInline: 5 }}
      />
    </Link>
  );
}
