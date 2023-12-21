import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import {
  faUser,
  faUsers,
  faBell,
  faUserGroup,
  faFileCircleCheck,
  faEnvelope,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

import {
  faHouse,
  faTrash,
  faXmark,
  faMailReply,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function AdminOffcanvasItem({
  title,
  link,
  icon,
  show,
  setShow,
}: {
  title: string;
  link: string;
  icon: string;
  show: boolean;
  setShow: any;
}) {
  let IconDefinition = null;
  if (icon.includes("faBell") || icon.includes("faFileCircleCheck")) {
    console.log(icon, "Este es el icono");
    IconDefinition = fas[icon.replace("fas-", "")];
    console.log(IconDefinition, "Este es el onsole log");
  } else {
    IconDefinition = fas[icon.replace("fa-", "")];
  }

  return (
    <Link
      color="#53575a"
      href={link}
      style={{
        margin: 5,
        fontSize: 18,
        color: "white",
        textDecoration: "none",
        paddingLeft: "1rem !important",
      }}
      onClick={() => setShow(!show)}
    >
      <FontAwesomeIcon
        width={"1.5rem"}
        height={"1.5rem"}
        icon={IconDefinition}
        style={{ marginRight: 10 }}
      />
      {title}
    </Link>
  );
}
