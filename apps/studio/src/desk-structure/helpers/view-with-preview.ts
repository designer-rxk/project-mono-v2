import { Eye } from "@phosphor-icons/react";
import { SanityDocumentLike } from "sanity";
import { StructureBuilder } from "sanity/structure";
import { Iframe } from "sanity-plugin-iframe-pane";

import resolvePreviewUrl from "./resolve-preview-url";

export const viewWithPreview = (S: StructureBuilder) => {
  return [
    S.view.form(),
    S.view
      .component(Iframe)
      .icon(Eye)
      .options({
        url: (document: SanityDocumentLike) =>
          resolvePreviewUrl({
            client: S.context.getClient({ apiVersion: "2022-11-15" }),
            document,
          }),
        reload: {
          button: true,
        },
        showDisplayUrl: false,
        attrubutes: {
          allow: "fullscreen",
        },
      })
      .title("Preview"),
  ];
};
