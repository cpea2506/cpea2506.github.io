<script lang="ts">
    import { Icon, type IconSource } from "@steeze-ui/svelte-icon";

    export let src: IconSource;
    export let size = "12";
</script>

{#if $$slots.default}
    <span
        class="flex-items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold"
    >
        <Icon {src} {size} {...$$restProps} />
        <slot />
    </span>
{:else}
    <Icon {src} {size} {...$$restProps} />
{/if}
