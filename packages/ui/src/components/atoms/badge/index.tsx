import { SVGElement } from "../../../types";
import { Icon } from "../icon";
import { Typography } from "../typography";

type Props = {
  text: string;
  iconLeft?: SVGElement;
  iconRight?: SVGElement;
  className?: string;
};

export const Badge = ({ text, iconLeft, iconRight, className = "" }: Props) => {
  return (
    <div className={className}>
      {iconLeft && <Icon icon={iconLeft} />}
      <Typography>{text}</Typography>
      {iconRight && <Icon icon={iconRight} />}
    </div>
  );
};
