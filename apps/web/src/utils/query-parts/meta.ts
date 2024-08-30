import { InferType, q } from "groqd";

import { image } from "..";

export const meta = q("meta").grab$({
  title: q.string(),
  description: q.string(),
  image: image.nullable(),
});

export type MetaProps = InferType<typeof meta>;
