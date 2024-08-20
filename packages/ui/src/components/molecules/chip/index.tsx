"use client";

import { ElementType, forwardRef, ReactNode } from "react";

import {
  type PolymorphicComponentPropWithRef,
  type PolymorphicRef,
  type SVGElement,
} from "../../../types";
import { Typography } from "../../atoms";
import { Icon as IconComponent } from "../../atoms";
import { chip, ChipVariant, icon } from "./styles";

type Props<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    color?: ChipVariant["color"];
    size?: ChipVariant["size"];
    iconLeft?: SVGElement;
    iconRight?: SVGElement;
    className?: string;
  }
>;

type ChipComponent = <C extends ElementType = "button">(
  props: Props<C>,
  ref: PolymorphicRef<C>,
) => ReactNode;

export const Chip: ChipComponent = forwardRef(function Button<
  C extends ElementType = "button",
>(
  {
    as,
    color,
    size,
    iconLeft,
    iconRight,
    children,
    className = "",
    ...props
  }: Props<C>,
  ref: PolymorphicRef<C>,
) {
  const Component = as || "button";
  const { disabled } = props;

  return (
    <Component
      className={chip({ color, className, disabled, size })}
      {...props}
      ref={ref}
    >
      {iconLeft && (
        <IconComponent
          icon={iconLeft}
          className={icon({
            size,
            color,
            disabled,
            className: iconLeft.props.className,
          })}
        />
      )}
      {children && (
        <Typography as="span" className="flex items-center text-center">
          {children}
        </Typography>
      )}
      {iconRight && (
        <IconComponent
          icon={iconRight}
          className={icon({
            size,
            color,
            disabled,
            className: iconRight.props.className,
          })}
        />
      )}
    </Component>
  );
});
