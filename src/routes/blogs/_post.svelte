<script>
  /** @type string */
  export let title;
  /** @type string */
  export let date;
  /** @type string */
  export let description;
</script>

<article class="px-[4vw] py-[2vw] prose prose-one-monokai">
  <h1 class="mb-2 text-[#e5c07b]">{title}</h1>
  <p class="mb-2 text-[#abb2bf]">{description}</p>
  <p class="text-[#98c379] mb-4 pb-2 post-card-border">Published: {date}</p>
  <slot />
</article>
