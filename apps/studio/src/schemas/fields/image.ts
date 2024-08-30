import { defineField } from "sanity";

export const image = defineField({
  name: "image",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  initialValue: {
    isDecorative: false,
  },
  fields: [
    defineField({
      name: "isDecorative",
      title: "Is the image decorative?",
      description: "Decorative images do not need alt text",
      type: "boolean",
    }),
    defineField({
      name: "alt",
      title: "Alt",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const image = context.parent as {
            isDecorative?: boolean;
            asset?: { _ref: string };
          };

          if (!image.isDecorative && !value && image.asset?._ref) {
            return "Images must have an alt text";
          }
          return true;
        }).warning(),
      hidden: ({ parent }) => !!parent?.isDecorative,
    }),
  ],
  preview: {
    select: {
      media: "asset",
      title: "alt",
    },
    prepare({ title, media }) {
      return {
        media,
        title: title || " ",
      };
    },
  },
});
