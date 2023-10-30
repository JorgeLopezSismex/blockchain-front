import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function AdminTableActionButton({
  tooltip,
  icon,
  onClick,
}: {
  tooltip: string;
  icon: IconProp;
  onClick: any;
}) {
  return (
    <OverlayTrigger overlay={<Tooltip>{tooltip}</Tooltip>}>
      <Button variant="primary" onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
      </Button>
    </OverlayTrigger>
  );
}
