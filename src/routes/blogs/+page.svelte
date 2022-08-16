<script lang="ts">
    import PostCard from "$components/PostCard.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: ({ posts } = data);
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
