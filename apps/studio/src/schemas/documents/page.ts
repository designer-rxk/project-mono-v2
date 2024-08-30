import { description, slug, title } from "@fields";
import { File } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: File,
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
    {
      name: "meta",
      title: "Meta",
    },
  ],
  fields: [
    defineField({
      name: "meta",
      type: "meta",
      title: "Meta fields",
      group: "meta",
    }),
    // Parent page reference. Hidden
    defineField({
      name: "parent",
      type: "reference",
      to: [{ type: "page" }],
      // This ensures we cannot select other "children"
      options: {
        filter: "!defined(parent)",
      },
      hidden: true,
      group: "main",
    }),
    // Global fields
    { ...title, title: "Page (hero) title", group: "main" },
    { ...slug, group: "main" },
    { ...description, title: "Page (hero) description", group: "main" },
  ],

  preview: {
    select: {
      title: "title",
      parent: "parent.slug.current",
      grandParent: "parent.parent.slug.current",
      layout: "layout",
      slug: "slug.current",
    },
    prepare: ({ title, parent, grandParent, slug }) => {
      const subtitle = grandParent ? `${grandParent}/${parent}` : parent;

      return {
        title: title || "Missing title (draft page)",
        subtitle: subtitle ? `/${subtitle}/${slug}` : `/${slug}`,
      };
    },
  },
});
