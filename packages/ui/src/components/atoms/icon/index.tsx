import { cloneElement } from "react";

import type { SVGElement } from "../../../types";

type Props = {
  icon: SVGElement;
  className?: string;
};

export const Icon = ({ icon, className = "" }: Props) => {
  return cloneElement(icon, {
    title: "",
    className,
  });
};
