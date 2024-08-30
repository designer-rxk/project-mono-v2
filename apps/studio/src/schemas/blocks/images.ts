import { image } from "@fields";
import { Cards } from "@phosphor-icons/react";
import { defineField } from "sanity";

export const images = defineField({
  name: "imagesBlock",
  title: "Images block",
  icon: Cards,
  type: "object",
  fields: [
    {
      type: "array",
      name: "images",
      title: "Images",
      of: [image],
      validation: (Rule) => Rule.required().min(1).max(2),
    },
  ],
  preview: {
    select: {
      images: "images",
    },
    prepare({ images = "" }) {
      return {
        title: " ",
        media: images[0]?.image,
        subtitle: `Images block`,
      };
    },
  },
});
