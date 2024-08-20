import { type ElementType, forwardRef } from "react";

import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../../types";
import { container } from "./styles";

export type ContainerProps<C extends ElementType> =
  PolymorphicComponentPropWithRef<C, { isNarrow?: boolean }>;

export const Container = forwardRef(function Container<
  C extends ElementType = "div",
>(
  { as, isNarrow = false, children, className, ...props }: ContainerProps<C>,
  ref: PolymorphicRef<C>,
) {
  const Component = as || "div";

  return (
    <Component
      ref={ref}
      className={container({ isNarrow, className })}
      {...props}
    >
      {children}
    </Component>
  );
});
