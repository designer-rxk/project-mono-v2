import { defineField } from "sanity";
import slugify from "slugify";

export const slug = defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  description:
    "A slug is the part of the URL that uniquely identifies this document so that users can link to it. Please don't include the name of the website.",
  validation: (Rule) => Rule.required(),
  options: {
    source: "title",
    slugify(input) {
      return slugify(input, {
        lower: true,
        strict: true,
      });
    },
  },
});
