import type { Frontmatter } from "$lib/types";
import { base } from "$app/paths";

type Resolver = {
  metadata: Frontmatter;
};

const allPostFiles = import.meta.glob<Resolver>("../blogs/posts/*.md");

export const GET = async () => {
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();

      // replace .. and .md from path
      const postPath = path.replaceAll(/\.|md/g, "");

      return {
        meta: metadata,
        path: base + postPath,
      };
    }),
  );

  // sort post by date
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
  );

  return {
    body: sortedPosts,
  };
};
