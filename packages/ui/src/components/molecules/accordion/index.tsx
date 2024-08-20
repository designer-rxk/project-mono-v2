"use client";

import { type PropsWithChildren, useId, useState } from "react";

import { SvgAngleDown } from "../../../icons";
import { Container, Typography } from "../..";
import {
  type AccordionVariant,
  childContainer,
  container,
  content,
  icon,
  text,
  wrapper,
  type WrapperVariant,
} from "./styles";

type Props = PropsWithChildren & {
  title: string;
  id?: string;
  isOpen?: boolean;
  color?: WrapperVariant["color"];
  size?: AccordionVariant["size"];
  alignment?: AccordionVariant["alignment"];
  className?: string;
};

export const Accordion = ({
  id,
  title,
  children,
  size = "sm",
  className = "",
  color = "white",
  alignment = "center",
  isOpen: initialOpen = false,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  const panelId = useId();
  const buttonId = useId();

  return (
    <div id={id} className={wrapper({ isOpen, size, className, color })}>
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen(!isOpen)}
        className="focus-visible:focus-style-dark"
      >
        <Container className={container({ size, alignment })}>
          <Typography className={text({ isOpen, size })}>{title}</Typography>
          <div className="flex items-center">
            <SvgAngleDown className={icon({ isOpen, size })} />
          </div>
        </Container>
      </button>
      <div
        id={panelId}
        hidden={!isOpen}
        aria-labelledby={buttonId}
        className={content({ isOpen })}
      >
        <div className={childContainer({ alignment })}>{children}</div>
      </div>
    </div>
  );
};
