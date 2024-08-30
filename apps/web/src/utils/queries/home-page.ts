import { q, TypeFromSelection } from "groqd";

const homePage = {
  // meta,
  title: q.string(),
};

export const homePageQuery = q(
  `*[_type == "homePage" && !(_id in path("drafts.**"))][0]`,
).grab$(homePage);

export type Homepage = TypeFromSelection<typeof homePage>;
