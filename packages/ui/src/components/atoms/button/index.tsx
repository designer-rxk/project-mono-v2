"use client";

import { type ElementType, forwardRef, type ReactNode } from "react";

import { SvgSpinner } from "../../../icons";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
  SVGElement,
} from "../../../types";
import { Icon, Typography } from "../..";

type Props<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    loading?: boolean;
    disabledAppearance?: boolean;
    iconLeft?: SVGElement;
    iconRight?: SVGElement;
    className?: string;
  }
>;

type ButtonComponent = <C extends ElementType = "button">(
  props: Props<C>,
  ref: PolymorphicRef<C>,
) => ReactNode;

export const Button: ButtonComponent = forwardRef(function Button<
  C extends ElementType = "button",
>(
  {
    as,
    iconLeft,
    iconRight,
    children,
    loading: isLoading,
    disabledAppearance = false,
    className = "",
    ...props
  }: Props<C>,
  ref: PolymorphicRef<C>,
) {
  const Component = as || "button";
  const { disabled: isDisabled } = props;
  const disabled = isDisabled || disabledAppearance || isLoading; // Add disabled prop as className where needed

  const iconNotProvided = !iconLeft && !iconRight;

  const LoadingSpinner = ({ className = "" }: { className?: string }) => (
    <SvgSpinner className={className} />
  );

  return (
    <Component className={className} {...props} ref={ref}>
      {iconNotProvided && isLoading && <LoadingSpinner />}
      {iconLeft &&
        (isLoading ? (
          <LoadingSpinner className={iconLeft.props.className} />
        ) : (
          <Icon icon={iconLeft} className={className} />
        ))}
      {children && (
        <Typography as="span" className="text-center">
          {children}
        </Typography>
      )}
      {iconRight &&
        (isLoading ? (
          <LoadingSpinner className={iconRight.props.className} />
        ) : (
          <Icon icon={iconRight} className={className} />
        ))}
    </Component>
  );
});
