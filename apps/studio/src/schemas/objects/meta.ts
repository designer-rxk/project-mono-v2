import { defineField, defineType } from "sanity";

export const meta = defineType({
  name: "meta",
  title: "Meta",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Max 155 characters",
      type: "text",
      rows: 3,
      validation: (Rule) =>
        Rule.custom((description) => {
          if (!description) {
            return "Required";
          }

          if (description.length > 155) {
            return "Description should be limited to 155 characters";
          }

          return true;
        }),
    }),
    defineField({
      name: "image",
      title: "Open Graph image",
      type: "image",
      description:
        "Used for social media sharing. Featured image will be used if empty.",
      options: {
        hotspot: true,
      },
    }),
  ],
});
