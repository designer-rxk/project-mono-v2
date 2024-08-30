import { Books, File, FolderSimple } from "@phosphor-icons/react";
import { map } from "rxjs/operators";
import { DocumentStore } from "sanity";
import { StructureBuilder } from "sanity/structure";

import { viewWithPreview } from "./view-with-preview";

export function parentChild(
  schemaType: string,
  S: StructureBuilder,
  documentStore: DocumentStore,
) {
  const parentFilter = `_type == "${schemaType}" && !defined(parent)`;
  const childrenFilter = `_type == "${schemaType}" && defined(parent) && references(^._id) && !defined(parent->parent)`;

  const parentQuery = `*[${parentFilter}]{ _id, title, "childrens" : *[${childrenFilter}]{ _id, title } }`;

  const apiVersion = "2023-08-01";

  const options = { apiVersion: apiVersion };

  return S.listItem()
    .title("Dynamic pages")
    .icon(Books)
    .child(() =>
      documentStore.listenQuery(parentQuery, {}, options).pipe(
        map((parents) =>
          S.list()
            .title("Pages")
            .menuItems([
              S.menuItem()
                .title("Add")
                .intent({ type: "create", params: { type: schemaType } }),
            ])
            .items([
              // Create a List Item for Parents
              // To display all documents that do not have parents
              S.listItem()
                .title("Pages")
                .icon(Books)
                .schemaType(schemaType)
                .child(() =>
                  S.documentList()
                    .schemaType(schemaType)
                    .title("Pages")
                    .filter(parentFilter)
                    .apiVersion(apiVersion)
                    // Use this list for creating from parents menu
                    .canHandleIntent((intentName, params) => {
                      return (
                        intentName === "create" && params.template === "page"
                      );
                    })
                    .child((id) =>
                      S.document()
                        .documentId(id)
                        .title("Page")
                        .schemaType(schemaType)
                        .views(viewWithPreview(S)),
                    ),
                ),
              S.divider(),
              // Create a List Item for each parent
              // To display all its child documents
              ...parents.map((parent: any) =>
                S.listItem({
                  id: parent._id,
                  title: parent.title || "Missing title (draft page)",
                  schemaType,
                  icon: File,

                  child: () =>
                    S.list()
                      .title("Pages")
                      .items([
                        S.listItem()
                          .icon(Books)
                          .title(parent.title || "Missing title (draft page)")
                          .schemaType(schemaType)
                          .child(() =>
                            S.documentTypeList(schemaType)
                              .schemaType(schemaType)
                              .title(parent?.title || "Parent")
                              .apiVersion(apiVersion)
                              .filter(childrenFilter)
                              .filter(
                                `_type == $schemaType && parent._ref == $parentId`,
                              )
                              .params({ schemaType, parentId: parent._id })
                              // Use this list for creating from parents menu
                              .canHandleIntent(
                                (intentName, params) =>
                                  intentName === "create" &&
                                  params.template === "page-child",
                              )
                              .initialValueTemplates([
                                S.initialValueTemplateItem("page-child", {
                                  parentId: parent._id,
                                }),
                              ])
                              .child((id) =>
                                S.document()
                                  .documentId(id)
                                  .title("Page")
                                  .schemaType(schemaType)
                                  .views(viewWithPreview(S)),
                              ),
                          ),
                        S.divider(),
                        ...parent.childrens.map((children: any) => {
                          return S.listItem({
                            id: children._id,
                            title: children.title || children.id,
                            icon: FolderSimple,
                            schemaType,
                            child: () =>
                              S.documentTypeList(schemaType)
                                .title("Children")
                                .apiVersion(apiVersion)
                                .filter(
                                  `_type == $schemaType && parent._ref == $parentId`,
                                )
                                .params({ schemaType, parentId: children._id })
                                // Use this list for creating from child menu
                                .canHandleIntent(
                                  (intentName, params) =>
                                    intentName === "create" &&
                                    params.template === "page-child",
                                )

                                .initialValueTemplates([
                                  S.initialValueTemplateItem("page-child", {
                                    parentId: children._id,
                                  }),
                                ])
                                .child((id) =>
                                  S.document()
                                    .documentId(id)
                                    .title("Page")
                                    .schemaType(schemaType)
                                    .views(viewWithPreview(S)),
                                ),
                          });
                        }),
                      ]),
                }),
              ),
            ]),
        ),
      ),
    );
}
