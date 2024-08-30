import {
  ArrowDown,
  Gear,
  GearSix,
  House,
  Link,
  MagnifyingGlass,
  Newspaper,
  PaintBrush,
} from "@phosphor-icons/react";
import type { ListItemBuilder, StructureBuilder } from "sanity/structure";

import { parentChild } from "./helpers/parent-child";
import { viewWithPreview } from "./helpers/view-with-preview";

const hiddenDocTypes = [
  "homePage",
  "searchPage",
  "footer",
  "page",
  "siteSettings",
  "redirect",
  "baseStyles",
];

const isVisible = (listItem: ListItemBuilder) => {
  return !hiddenDocTypes.includes(listItem.getId() as string);
};

const deskStructure = (S: StructureBuilder, context: any) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .icon(Newspaper)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home Page")
                .icon(House)
                .child(
                  S.editor()
                    .title("Home Page")
                    .schemaType("homePage")
                    .documentId("homePage")
                    .views(viewWithPreview(S)),
                ),
              S.divider(),
              S.listItem()
                .title("Search Page")
                .icon(MagnifyingGlass)
                .child(
                  S.editor()
                    .id("searchPage")
                    .schemaType("searchPage")
                    .documentId("searchPage")
                    .views(viewWithPreview(S)),
                ),
              S.divider(),
              parentChild("page", S, context.documentStore),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Redirects")
        .icon(Link)
        .child(
          S.editor()
            .id("redirect")
            .schemaType("redirect")
            .documentId("redirect")
            .views(viewWithPreview(S)),
        ),
      S.divider(),
      S.listItem()
        .title("Base styles")
        .icon(PaintBrush)
        .child(
          S.editor()
            .id("baseStyles")
            .schemaType("baseStyles")
            .documentId("baseStyles")
            .views(viewWithPreview(S)),
        ),
      S.divider(),
      S.listItem()
        .title("Site settings")
        .icon(GearSix)
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Site information")
                .icon(Gear)
                .child(
                  S.editor()
                    .title("Site information")
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                    .views([S.view.form()]),
                ),
              S.divider(),
              S.listItem()
                .title("Footer information")
                .icon(ArrowDown)
                .child(
                  S.editor()
                    .schemaType("footer")
                    .documentId("footer")
                    .views([S.view.form()]),
                ),
            ]),
        ),
      ...S.documentTypeListItems().filter(isVisible),
    ]);

export default deskStructure;
