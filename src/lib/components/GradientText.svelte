<script lang="ts">
    export let hover = false;

    const textClass = hover
        ? "text-white hover:animate-text hover:from-green hover:via-yellow hover:to-red hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
        : "animate-text from-green via-yellow to-red bg-gradient-to-r bg-clip-text text-transparent";
</script>

<span class="font-bold tracking-wide md:text-base {textClass}">
    <slot />
</span>
