import { cva } from "class-variance-authority";

export const container = cva(["mx-auto w-full px-4 md:px-8 lg:px-16"], {
  variants: {
    isNarrow: {
      true: "max-w-[728px]",
      false: "max-w-338",
    },
  },
});
