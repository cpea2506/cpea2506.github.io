<script lang="ts">
    import "../app.scss";
    import type { LayoutData } from "./$types";
    import Header from "$components/Header.svelte";
    import { fade } from "svelte/transition";

    export let data: LayoutData;

    $: ({ currentRoute } = data);
</script>

<Header />

{#key currentRoute}
    <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
        <slot />
    </main>
{/key}
