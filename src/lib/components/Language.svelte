<script lang="ts">
    export let src: string;
    export let alt: string;
</script>

<figure
    class="rounded-full overflow-hidden bg-white shadow-[0_0_10px] shadow-black/10 dark:shadow-white/30"
>
    <img
        class="max-w-full h-auto transition hover:scale-150"
        width="64"
        height="64"
        {alt}
        {src}
    />
</figure>
