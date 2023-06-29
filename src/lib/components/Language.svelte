<script lang="ts">
    export let src: string;
    export let alt: string;
</script>

<img
    class="{$$props.class} shadow-[0_0_10px] shadow-white/10 rounded-full max-w-full h-auto transition hover:scale-125"
    width="64"
    height="64"
    {alt}
    {src}
/>
