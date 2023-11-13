import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faTrash,
  faXmark,
  faMailReply,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export default function AdminOffcanvasItem({
  title,
  link,
  icon,
  show,
  setShow,
}: {
  title: string;
  link: string;
  icon: IconDefinition;
  show: boolean;
  setShow: any;
}) {
  return (
    <Link
      color="#53575a"
      href={link}
      style={{
        color: "white",
        paddingLeft: "1rem !important",
        fontSize: 18,
        margin: 5,
        textDecoration: "none",
      }}
      onClick={() => setShow(!show)}
    >
      <FontAwesomeIcon
        width={"1.5rem"}
        height={"1.5rem"}
        icon={icon}
        style={{ marginRight: 10 }}
      />
      {title}
    </Link>
  );
}
