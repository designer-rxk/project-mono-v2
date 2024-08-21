import { defineField } from "sanity";

export const meta = defineField({
  name: "meta",
  type: "meta",
  group: "meta",
  validation: (Rule) => Rule.required(),
});
