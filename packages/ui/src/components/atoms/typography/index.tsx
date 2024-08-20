import { type ElementType, type PropsWithChildren } from "react";

type TypographyProps = PropsWithChildren & {
  id?: string;
  as?: ElementType;
  className?: string;
};

export const Typography = ({
  children,
  className = "",
  id,
  as: Component = "p",
}: TypographyProps) => {
  return (
    <Component id={id} className={className}>
      {children}
    </Component>
  );
};
