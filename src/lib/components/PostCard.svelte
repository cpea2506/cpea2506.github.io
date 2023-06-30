<script lang="ts">
    export let meta: Frontmatter;
    export let path: string;

    $: ({ title, description, date } = meta);
</script>

<a href={path} class="text-yellow/[.85] hover:text-yellow">
    <article class="post-card-border p-4">
        <h1 class="mb-2">{title}</h1>
        <p class="text-gray mb-2">{description}</p>
        <p class="text-green">Created: {date}</p>
    </article>
</a>
