import "server-only";

import {
  SANITY_STUDIO_API_VERSION,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_PROJECT_ID,
} from "@utils";
import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: SANITY_STUDIO_API_VERSION,
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  perspective: "published",
  useCdn: true,
  stega: {
    enabled: false,
    studioUrl: "http://localhost:3333/",
  },
});
