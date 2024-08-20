"use client";

import type { PropsWithChildren } from "react";

import {
  SvgCheck,
  SvgCross,
  SvgCrossCircle,
  SvgInfoCircle,
  SvgWarningCircle,
} from "../../../icons";
import { Icon, Typography } from "../../atoms";
import { icon, wrapper, type WrapperVariant } from "./styles";

export type AlertProps = PropsWithChildren & {
  title: string;
  color?: WrapperVariant["color"];
  inline?: boolean;
  onClose?: () => void;
  hideClose?: boolean;
};

export const Alert = ({
  title,
  children,
  color = "success",
  inline = false,
  onClose,
  hideClose = false,
}: AlertProps) => {
  const getIcon = () => {
    switch (color) {
      case "success":
        return <SvgCheck />;
      case "info":
        return <SvgInfoCircle />;
      case "warning":
        return <SvgWarningCircle />;
      case "error":
        return <SvgCrossCircle />;
      default:
        return <SvgCheck />;
    }
  };

  return (
    <div className="flex w-full overflow-hidden rounded">
      <div className={wrapper({ color, inline })}>
        <Icon icon={getIcon()} className={icon({ color })} />
        <div className="flex flex-col gap-1 w-full">
          <Typography className="w-full">{title}</Typography>
          {children}
        </div>
        {!hideClose && (
          <button
            onClick={onClose}
            className="flex items-start size-fit focus-visible:focus-style-dark"
          >
            <SvgCross className="size-3 shrink-0 text-neutral-900" />
          </button>
        )}
      </div>
    </div>
  );
};
