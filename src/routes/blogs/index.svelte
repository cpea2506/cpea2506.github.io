<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const response = await fetch("api/posts.json");
    const posts = await response.json();

    return {
      props: { posts },
    };
  };
</script>

<script lang="ts">
  import PostCard from "$components/PostCard.svelte";
  import type { Post } from "$lib/types";

  export let posts: [Post];
</script>

<svelte:head>
  <title>Captain's Blog Posts</title>
  <meta name="description" content="All treasures I've collected" />
</svelte:head>

<main class="px-[4vw]">
  {#each posts as post}
    <PostCard {...post} />
  {/each}
</main>
