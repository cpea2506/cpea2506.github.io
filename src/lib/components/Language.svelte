<script lang="ts">
    import { shuffle } from "$utils/arrays";

    export let src: string;
    export let alt: string;

    const animation = shuffle([
        "hover:animate-spin",
        "hover:animate-bounce",
    ])[0];
</script>

<img
    class="{$$props.class} h-auto max-w-full rounded-full shadow-[0_0_15px] shadow-white transition {animation}"
    width="64"
    height="64"
    {alt}
    {src}
/>
