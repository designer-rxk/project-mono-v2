import { title } from "@fields";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";

export const searchPage = defineType({
  name: "searchPage",
  title: "Search Page",
  icon: MagnifyingGlass,
  type: "document",
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
    { ...title, group: "main" },
  ],
});
