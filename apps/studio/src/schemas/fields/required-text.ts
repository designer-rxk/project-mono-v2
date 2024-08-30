import { defineField } from "sanity";

export const title = defineField({
  type: "string",
  name: "title",
  title: "Title",
  validation: (Rule) => Rule.required(),
});
