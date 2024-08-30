import { Link } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";

export const redirect = defineType({
  name: "redirect",
  title: "Redirect",
  type: "document",
  icon: Link,
  fields: [
    defineField({
      name: "source",
      title: "From",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "destination",
      title: "To",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isPermanent",
      title: "Permanent",
      type: "boolean",
      initialValue: () => true,
    }),
  ],
  preview: {
    select: {
      title: "source",
      subtitle: "destination",
    },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});
