import { InferType, q } from "groqd";

export const imageField = {
  _type: q.literal("image"),
  alt: q.string().optional(),
  metadata: q("asset->metadata")
    .grab$({
      lqip: q.string(),
    })
    .nullable(),
  asset: q
    .object({
      _type: q.literal("reference"),
      _ref: q.string(),
    })
    .optional(),
  crop: q
    .object({
      _type: q.literal("sanity.imageCrop"),
      bottom: q.number(),
      left: q.number(),
      right: q.number(),
      top: q.number(),
    })
    .optional(),
  hotspot: q
    .object({
      _type: q.literal("sanity.imageHotspot"),
      height: q.number(),
      width: q.number(),
      x: q.number(),
      y: q.number(),
    })
    .optional(),
};

export const image = q("image").grab$(imageField);

export type ImageProps = InferType<typeof image>;
