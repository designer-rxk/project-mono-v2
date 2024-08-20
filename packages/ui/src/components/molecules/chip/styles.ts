import { cva, VariantProps } from "class-variance-authority";
import { ClassProp } from "class-variance-authority/types";

export const chip = cva(
  ["flex shrink-0 rounded duration-300 focus-visible:focus-style-dark"],
  {
    defaultVariants: {
      color: "inactive",
      disabled: false,
      size: "md",
    },
    compoundVariants: [
      {
        color: "active",
        disabled: false,
        size: ["sm", "md", "lg"],
        className: "text-neutral-900 bg-yellow-400 hover:bg-yellow-500",
      },
      {
        color: "inactive",
        disabled: false,
        size: ["sm", "md", "lg"],
        className: "text-neutral-900 bg-yellow-100 hover:bg-yellow-400",
      },
      {
        color: "completed",
        disabled: false,
        size: ["sm", "md", "lg"],
        className: "text-neutral-900 bg-success-200 hover:bg-success-500",
      },
      {
        color: ["active", "inactive", "completed"],
        disabled: true,
        size: ["sm", "md", "lg"],
        className: "cursor-not-allowed bg-neutral-200 text-neutral-400",
      },
    ],
    variants: {
      size: {
        sm: "py-[2px] px-1 gap-[2px]",
        md: "py-1 px-2 gap-[6px]",
        lg: "py-[6px] px-3 gap-[6px]",
      },
      color: {
        active: "",
        inactive: "",
        completed: "",
      },
      disabled: {
        true: "",
        false: "",
      },
    },
  },
);

export type ChipVariant = VariantProps<typeof chip> & ClassProp;

export const icon = cva(["inline-flex aspect-square shrink-0 duration-300"], {
  defaultVariants: {
    color: "inactive",
    disabled: false,
    size: "md",
  },
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    },
    color: {
      active: "",
      inactive: "",
      completed: "",
    },
    disabled: {
      true: "text-neutral-400",
      false: "text-neutral-900",
    },
  },
});
