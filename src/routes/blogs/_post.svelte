<script>
    /** @type string */
    export let title;
    /** @type string */
    export let date;
</script>

<article
    class="max-w-screen-md mx-4 sm:mx-auto my-2 sm:my-6 prose prose-one-monokai"
>
    <h1 class="mb-2 text-[#e5c07b]">{title}</h1>
    <p class="text-[#98c379] mb-4 pb-2 post-card-border">Created: {date}</p>
    <slot />
</article>
