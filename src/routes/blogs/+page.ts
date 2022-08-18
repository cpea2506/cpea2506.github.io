import type { Post } from "$types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch("/api/posts.json");
    const posts: Post[] = await response.json();

    return { posts };
};