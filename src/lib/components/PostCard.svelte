<script lang="ts">
    export let meta: Frontmatter;
    export let path: string;

    $: ({ title, description, date } = meta);
</script>

<a href={path} class="text-yellow">
    <article class="p-4 post-card-border">
        <h1 class="mb-2">{title}</h1>
        <p class="mb-2 text-gray">{description}</p>
        <p class="text-green">Created: {date}</p>
    </article>
</a>
