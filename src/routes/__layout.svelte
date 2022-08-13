<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = ({ url }) => {
    const currentRoute = url.pathname;

    return {
      props: {
        currentRoute,
      },
    };
  };
</script>

<script lang="ts">
  import { fade } from "svelte/transition";

  import Header from "$components/Header.svelte";
  import "../app.scss";

  export let currentRoute: string;
</script>

<Header />

{#key currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}
