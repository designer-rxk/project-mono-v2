import { TextAa } from "@phosphor-icons/react";
import { defineField } from "sanity";

export const textBlock = defineField({
  name: "textBlock",
  title: "Rich text block",
  type: "object",
  icon: TextAa,
  fields: [
    defineField({
      type: "richText",
      name: "content",
      title: "Content",
    }),
  ],
  preview: {
    select: {
      title: "",
    },
    prepare() {
      return {
        title: " ",
        subtitle: "Rich text block",
      };
    },
  },
});
