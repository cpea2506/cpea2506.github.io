<script lang="ts">
    import "../app.scss";
    import type { LayoutData } from "./$types";
    import Header from "$components/Header.svelte";
    import PageTransition from "$components/PageTransition.svelte";

    export let data: LayoutData;

    $: ({ route } = data);
</script>

<Header />
<PageTransition url={route}>
    <slot />
</PageTransition>
