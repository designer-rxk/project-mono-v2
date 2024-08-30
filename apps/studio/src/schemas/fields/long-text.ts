import { defineField } from "sanity";

export const description = defineField({
  type: "text",
  name: "description",
  title: "Description",
  rows: 3,
});
