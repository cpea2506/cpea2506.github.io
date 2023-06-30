<script lang="ts">
    import { onMount } from "svelte";
    import { fade, blur } from "svelte/transition";

    export let src: string;

    let loaded = false;

    onMount(() => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            loaded = true;
        };
    });
</script>

{#if loaded}
    <img
        in:fade
        alt="avatar"
        loading="lazy"
        class="pointer-events-none w-52 rounded-full {$$props.class}"
        {src}
    />
{:else}
    <div
        out:blur
        class="h-52 w-52 animate-pulse rounded-full bg-yellow-50/50 {$$props.class}"
    />
{/if}
