import { title } from "@fields";
import { GearSix } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  icon: GearSix,
  type: "document",
  fields: [
    defineField({
      name: "navigation",
      title: "Navigation menu",
      type: "object",
      fields: [title],
    }),
  ],
});
