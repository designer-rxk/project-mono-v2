import { defineField } from "sanity";

export const image = (group?: string) =>
  defineField({
    name: "image",
    title: "Image",
    type: "image",
    group: group ? group : "",
    validation: (Rule) => Rule.required(),
    options: {
      hotspot: true,
    },
    fields: [
      defineField({
        name: "alt",
        title: "Alt",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
    ],
  });
