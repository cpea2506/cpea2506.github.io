<script lang="ts">
    import { fly } from "svelte/transition";

    const duration = 450;

    export let url = "";
</script>

{#key url}
    <div
        in:fly={{ x: -5, duration, delay: duration }}
        out:fly={{ x: 5, duration }}
    >
        <slot />
    </div>
{/key}
