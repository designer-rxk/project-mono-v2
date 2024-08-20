import { cva, VariantProps } from "class-variance-authority";
import { ClassProp } from "class-variance-authority/types";

export const border = cva(["w-1 shrink-0 h-full flex-grow"], {
  variants: {
    color: {
      success: "bg-success-500",
      info: "bg-info-500",
      warning: "bg-warning-500",
      error: "bg-error-500",
    },
  },
});

export const wrapper = cva(["flex gap-3 w-full items-center"], {
  compoundVariants: [
    {
      inline: false,
      color: "success",
      className: "p-3 border-l-4 bg-success-200 border-success-500",
    },
    {
      inline: false,
      color: "info",
      className: "p-3 border-l-4 bg-info-200 border-info-500",
    },
    {
      inline: false,
      color: "warning",
      className: "p-3 border-l-4 bg-warning-200 border-warning-500",
    },
    {
      inline: false,
      color: "error",
      className: "p-3 border-l-4 bg-error-200 border-error-500",
    },
    {
      inline: true,
      color: ["success", "info", "warning", "error"],
      className: "",
    },
  ],
  variants: {
    inline: {
      true: "",
      false: "",
    },
    color: {
      success: "",
      info: "",
      warning: "",
      error: "",
    },
  },
});

export type WrapperVariant = VariantProps<typeof wrapper> & ClassProp;

export const icon = cva(["size-3 shrink-0 self-start"], {
  variants: {
    color: {
      success: "text-success-500",
      info: "text-info-500",
      warning: "text-warning-500",
      error: "text-error-500",
    },
  },
});
