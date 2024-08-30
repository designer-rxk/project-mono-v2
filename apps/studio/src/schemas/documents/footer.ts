import { title } from "@fields";
import { ArrowDown } from "@phosphor-icons/react";
import { defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: ArrowDown,
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
  ],
  fields: [title],
});
