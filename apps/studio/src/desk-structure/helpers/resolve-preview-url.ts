import type { Department, HomePage, Page, SearchPage } from "@utils";
import type { SanityClient, SanityDocumentLike } from "sanity";

const BASE_URL =
  process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000";

const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET || "secret";

const query = `*[_type=="page" && slug.current==$slug ][0]{_type, title, "path": select(
  defined(parent->parent) => "/" + parent->parent->slug.current + "/" + parent->slug.current + "/" + slug.current,
  defined(parent) => "/" + parent->slug.current + "/" + slug.current,
  "/" + slug.current
)}`;

export type Props = {
  document: SanityDocumentLike & (Page | Department | HomePage | SearchPage);
  client: SanityClient;
};

export async function resolvePreviewUrl({ document, client }: Props) {
  let previewUrl: URL | null = null;

  if (!document) {
    throw new Error("Missing document");
  }

  const documentType = document._type;

  try {
    previewUrl = new URL(`/api/preview`, BASE_URL);
  } catch (err) {
    console.error("Invalid productionUrl", err);
  }

  if (!previewUrl || !document) {
    throw new Error("Missing production URL or document");
  }

  if (documentType === "homePage") {
    previewUrl.searchParams.append("path", "/");
  }

  if (documentType === "page" && document?.slug?.current) {
    const page = await client.fetch(query, {
      slug: document.slug.current,
    });

    if (!page) {
      throw new Error("Cannot find page by slug. Reopen preview");
    }

    if (page) {
      previewUrl.searchParams.append("path", page.path);
    }
  }

  previewUrl.searchParams.append("secret", previewSecret);

  return previewUrl.toString();
}

export default resolvePreviewUrl;
