<script lang="ts">
    import type { Frontmatter } from "$types";

    export let meta: Frontmatter;
    export let path: string;

    $: ({ title, description, date } = meta);
</script>

<a href={path} class="text-[#e5c07b]">
    <article class="p-[2vw] post-card-border">
        <h1 class="mb-2">{title}</h1>
        <p class="mb-2 text-[#abb2bf]">{description}</p>
        <p class="text-[#98c379]">Published: {date}</p>
    </article>
</a>
