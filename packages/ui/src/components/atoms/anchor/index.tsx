import { type ElementType, forwardRef, type ReactNode } from "react";

import { SvgSpinner } from "../../../icons";
import {
  type PolymorphicComponentPropWithRef,
  type PolymorphicRef,
  type SVGElement,
} from "../../../types";
import { Icon } from "../icon";

export type AnchorProps<C extends ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      loading?: boolean;
      iconLeft?: SVGElement;
      iconRight?: SVGElement;
      className?: string;
    }
  >;

type AnchorComponent = <C extends ElementType = "a">(
  props: AnchorProps<C>,
  ref: PolymorphicRef<C>,
) => ReactNode;

export const Anchor: AnchorComponent = forwardRef(function Anchor<
  C extends ElementType = "a",
>(
  {
    as,
    iconLeft,
    iconRight,
    children,
    className = "",
    ...props
  }: AnchorProps<C>,
  ref: PolymorphicRef<C>,
) {
  const Component = as || "a";
  const { disabled, loading: isLoading = false, ...restProps } = props;

  const iconNotProvided = !iconLeft && !iconRight;
  const isDisabled = disabled || isLoading; // Add disabled prop as className where needed

  const LoadingSpinner = ({ className = "" }: { className?: string }) => (
    <SvgSpinner className={className} />
  );

  return (
    <Component ref={ref} {...restProps} className={className}>
      {iconNotProvided && isLoading && <LoadingSpinner />}
      {iconLeft &&
        (isLoading ? (
          <LoadingSpinner className={iconLeft.props.className} />
        ) : (
          <Icon icon={iconLeft} className={className} />
        ))}
      {children}
      {iconRight &&
        (isLoading ? (
          <LoadingSpinner className={iconRight.props.className} />
        ) : (
          <Icon icon={iconRight} className={className} />
        ))}
    </Component>
  );
});
