import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export default function AdminVerificationStep({
  key,
  icon,
  label,
  color,
}: {
  key: number;
  icon: any;
  label: string;
  color: string;
}) {
  return (
    <div key={key} style={{ display: "block", marginRight: "10px" }}>
      <FontAwesomeIcon icon={icon} style={{ color: `${color}` }} />
      <p
        style={{
          display: "inline-block",
          marginLeft: "5px",
          marginBottom: "0",
        }}
      >
        {label}
      </p>
    </div>
  );
}
