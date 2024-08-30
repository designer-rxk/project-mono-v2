import { title } from "@fields";
import { House } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: House,
  groups: [
    {
      name: "meta",
      title: "Meta",
    },
    {
      name: "main",
      title: "Main",
      default: true,
    },
  ],
  fields: [
    defineField({
      name: "meta",
      type: "meta",
      title: "Meta fields",
      group: "meta",
    }),
    title,
  ],
});
