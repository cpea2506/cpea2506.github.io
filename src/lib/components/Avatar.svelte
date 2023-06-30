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
        class="w-52 rounded-full pointer-events-none {$$props.class}"
        {src}
    />
{:else}
    <div
        out:blur
        class="w-52 h-52 rounded-full animate-pulse bg-yellow-50/50 {$$props.class}"
    />
{/if}
