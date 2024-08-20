import { cva, VariantProps } from "class-variance-authority";
import { ClassProp } from "class-variance-authority/types";

export const wrapper = cva(["flex flex-col rounded-3 duration-300"], {
  compoundVariants: [
    {
      size: "sm",
      isOpen: true,
      color: "white",
      className: ["bg-neutral-100 text-yellow-600"],
    },
    {
      size: "md",
      isOpen: true,
      color: "white",
      className: ["bg-beige-100 text-neutral-900"],
    },
    {
      size: "lg",
      isOpen: true,
      color: "white",
      className: ["bg-beige-100 text-neutral-900"],
    },
    {
      size: "sm",
      isOpen: false,
      color: "white",
      className: ["bg-neutral-000 text-neutral-900"],
    },
    {
      size: "md",
      isOpen: false,
      color: "white",
      className: ["bg-neutral-000 text-neutral-900"],
    },
    {
      size: "lg",
      isOpen: false,
      color: "white",
      className: ["bg-neutral-000 text-neutral-900 hover:bg-beige-100"],
    },
    {
      size: ["sm", "md", "lg"],
      isOpen: [true, false],
      color: "beige",
      className: ["bg-beige-100 text-neutral-900"],
    },
  ],
  variants: {
    color: {
      white: "",
      beige: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    isOpen: {
      true: "",
      false: "",
    },
  },
});

export type WrapperVariant = VariantProps<typeof wrapper> & ClassProp;
export type AccordionVariant = VariantProps<typeof container> & ClassProp;

export const button = cva(["focus-visible:focus-style-dark"]);

export const container = cva(["flex w-full rounded-2 gap-2 items-center"], {
  variants: {
    size: {
      sm: "px-6 py-4",
      md: "py-6",
      lg: "py-10 lg:py-14",
    },
    alignment: {
      justified: "justify-between",
      center: "justify-center",
    },
  },
});

export const text = cva(["duration-300 text-start"], {
  compoundVariants: [
    {
      size: "sm",
      isOpen: true,
      className: ["text-yellow-600"],
    },
    {
      size: "md",
      isOpen: true,
      className: ["text-neutral-900"],
    },
    {
      size: "lg",
      isOpen: true,
      className: ["text-neutral-900"],
    },
    {
      size: "sm",
      isOpen: false,
      className: ["text-neutral-900"],
    },
    {
      size: "md",
      isOpen: false,
      className: ["text-neutral-900"],
    },
    {
      size: "lg",
      isOpen: false,
      className: ["text-neutral-900"],
    },
  ],
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    isOpen: {
      true: "",
      false: "",
    },
  },
});

export const icon = cva(["shrink-0 duration-300"], {
  compoundVariants: [
    {
      size: "sm",
      isOpen: true,
      className: ["rotate-180 text-yellow-600"],
    },
    {
      size: "lg",
      isOpen: true,
      className: ["rotate-180 text-neutral-900"],
    },
    {
      size: "sm",
      isOpen: false,
      className: ["text-neutral-900"],
    },
    {
      size: "lg",
      isOpen: false,
      className: ["text-neutral-900"],
    },
  ],
  variants: {
    isOpen: {
      true: "rotate-180",
      false: "",
    },
    size: {
      sm: "size-[14px]",
      md: "size-5",
      lg: "size-8",
    },
  },
});

export const content = cva(
  ["grid overflow-hidden transition-all duration-300 ease-in-out"],
  {
    variants: {
      isOpen: {
        true: "grid-rows-1fr visible",
        false: "grid-rows-0fr invisible",
      },
    },
  },
);

export const childContainer = cva(
  ["min-h-0 overflow-hidden flex flex-col gap-2"],
  {
    variants: {
      alignment: {
        justified: "justify-start",
        center: "items-center",
      },
    },
  },
);
