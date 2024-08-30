import { runQuery } from "@lib/sanity";
import { Typography } from "@mono/ui";
import { type Homepage, homePageQuery } from "@utils";
import { notFound } from "next/navigation";

export const revalidate = 60;

async function getData() {
  const page: Homepage = await runQuery(homePageQuery);

  return page;
}

export default async function HomePage() {
  const page = await getData();

  if (!page) {
    notFound();
  }

  return (
    <Typography as="h1" className="w-full justify-center flex items-center">
      {page.title}
    </Typography>
  );
}
