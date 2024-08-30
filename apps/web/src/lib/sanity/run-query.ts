import "server-only";

import { DEFAULT_PARAMS, DEFAULT_TAGS } from "@utils";
import { makeSafeQueryRunner } from "groqd";
import { QueryParams } from "next-sanity";

import { sanityFetch } from "./sanity-fetch";

export const runQuery = makeSafeQueryRunner(
  (
    query: string,
    params: QueryParams = DEFAULT_PARAMS,
    tags: string[] = DEFAULT_TAGS,
  ) => {
    return sanityFetch({
      params,
      query,
      tags,
    });
  },
);
