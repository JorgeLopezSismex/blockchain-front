import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function VerificationStep({
  key,
  step,
}: {
  key: number;
  step: any;
}) {
  let color = "red";
  let icon = faCircleXmark;

  if (step.status == "success") {
    color = "green";
    icon = faCircleCheck;
  } else {
    let color = "red";
    let icon = faCircleXmark;
  }

  return (
    <div key={key} style={{ display: "flex", marginRight: "10px" }}>
      <FontAwesomeIcon icon={icon} style={{ color: `${color}` }} />
      <p
        style={{
          marginLeft: "5px",
          marginBottom: "0",
          display: "inline-block",
        }}
      >
        {step.label}
      </p>
    </div>
  );
}
