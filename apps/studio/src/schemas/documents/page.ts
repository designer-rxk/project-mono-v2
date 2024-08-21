import { meta } from "@fields";
import { defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    {
      name: "meta",
      title: "Meta",
    },
  ],
  fields: [meta],
});
