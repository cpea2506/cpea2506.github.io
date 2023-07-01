<script lang="ts">
    import Icon from "$components/Icon.svelte";
    import { MarkGithub } from "@steeze-ui/octicons";

    export let size: string;

    let hovered = false;

    function handleIconMouseOver() {
        hovered = true;
    }

    function handleIconMouseOut() {
        hovered = false;
    }
</script>

<a
    href="https://github.com/cpea2506"
    target="_blank"
    class="flex-items-center"
    on:mouseover={handleIconMouseOver}
    on:focus={handleIconMouseOver}
    on:mouseout={handleIconMouseOut}
    on:blur={handleIconMouseOut}
>
    <Icon
        src={MarkGithub}
        {size}
        title="Github"
        class={!hovered ? "text-gray" : "text-white"}
    />
</a>
