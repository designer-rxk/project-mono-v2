import { title } from "@fields";
import { PaintBrush } from "@phosphor-icons/react";
import { defineType } from "sanity";

export const baseStyles = defineType({
  title: "Base styles",
  name: "baseStyles",
  type: "document",
  fields: [title],
  icon: PaintBrush,
});
