<script lang="ts">
    import "../app.scss";
    import type { LayoutData } from "./$types";
    import Stars from "$assets/images/stars.jpg";
    import Header from "$components/Header.svelte";
    import PageTransition from "$components/PageTransition.svelte";

    export let data: LayoutData;

    $: ({ route } = data);
</script>

<Header />
<div class="relative">
    <img
        src={Stars}
        alt="stars"
        class="pointer-events-none fixed bottom-0 left-0 -z-10 h-screen w-screen mix-blend-screen"
    />
    <PageTransition url={route}>
        <slot />
    </PageTransition>
</div>
