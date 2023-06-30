<script lang="ts">
    import Icon from "svelte-icons-pack";
</script>

{#if $$slots.default}
    <span
        class="flex-items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold"
    >
        <Icon src={$$props.src} {...$$restProps} />
        <slot />
    </span>
{:else}
    <Icon src={$$props.src} {...$$restProps} />
{/if}
