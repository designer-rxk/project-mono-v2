import "server-only";

import { experimental_taintUniqueValue } from "react";

export const token =
  "skIgfXJbynKqLzh98Wa8iTwyWECZucnLGrTMwrjOs2hfxjjp4E8AlkRhvPbccJJIgGvKOCVhe4gmXX1If86K6S8jlpRJoaKgaZ22pzqnaMBssseQ8oHBqJgBK46ElXUFLumsqljbR2W4vJRPWa7UrIU3gg0nb544YYFajXU5KdjMJU1dVNla";

if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}

experimental_taintUniqueValue(
  "Do not pass the Sanity API read token to the client.",
  process,
  token,
);
