<script>
    /** @type string */
    export let title;
    /** @type string */
    export let date;
</script>

<article
    class="prose prose-one-monokai mx-4 my-2 max-w-screen-md sm:mx-auto sm:my-6"
>
    <h1 class="text-yellow mb-2">{title}</h1>
    <p class="text-green post-card-border mb-4 pb-2">Created: {date}</p>
    <slot />
</article>
