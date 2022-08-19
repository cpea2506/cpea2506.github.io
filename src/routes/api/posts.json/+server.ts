import { json } from "@sveltejs/kit";
import type { Frontmatter, Post } from "$lib/types";

type Resolver = {
    metadata: Frontmatter;
};

const allPostFiles = import.meta.glob<Resolver>(
    "../../blogs/posts/**/+page.md",
);

export const GET = async () => {
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts: Post[] = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();

            // extract exact path: /blogs/posts/<name>
            // safety: this cannot be null
            const postPath = /(?<=\..\/..).+(?=\+page\.md)/.exec(path)!.at(0)!;

            return { meta: metadata, path: postPath };
        }),
    );

    // sort post by date
    const sortedPosts = allPosts.sort(
        (a, b) =>
            new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
    );

    return json(sortedPosts);
};
