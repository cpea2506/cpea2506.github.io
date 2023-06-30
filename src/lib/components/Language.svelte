<script lang="ts">
    export let src: string;
    export let alt: string;
</script>

<img
    class="{$$props.class} shadow-[0_0_15px] shadow-white rounded-full max-w-full h-auto transition hover:animate-bounce"
    width="64"
    height="64"
    {alt}
    {src}
/>
