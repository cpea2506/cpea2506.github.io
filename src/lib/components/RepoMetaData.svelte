<script lang="ts">
    import { page } from "$app/stores";
    import Icon from "$components/Icon.svelte";
    import Star from "svelte-icons-pack/ai/AiFillStar";
    import GitHub from "svelte-icons-pack/fa/FaBrandsGithub";
    import RepoForked from "svelte-icons-pack/vsc/VscRepoForked";
    import Gear from "svelte-icons-pack/bs/BsGearFill";
    import Circle from "svelte-icons-pack/fa/FaSolidCircle";

    export let href: string;
    export let stargazersCount: number;
    export let forksCount: number;
    export let size: number;
    export let language: string;

    const languageColor = $page.data.languages[language]?.color;

    const sizeStr =
        size / 1000 > 1 ? `${Math.floor(size / 1000)} mb` : `${size} kb`;
</script>

<div class="m-1 flex font-medium">
    <div class="flex grow">
        <Icon src={Star} color={stargazersCount > 0 ? "#ffc900" : "#eceef0"}
            >{stargazersCount}</Icon
        >
        <Icon src={RepoForked} color="#eceef0">{forksCount}</Icon>
        <Icon src={Gear} color="#9ca3b2">
            {sizeStr}
        </Icon>
        {#if languageColor}
            <Icon src={Circle} color={languageColor}>
                {language}
            </Icon>
        {/if}
    </div>
    <a class="flex-items-center mr-2 gap-1" {href} target="_blank">
        <Icon src={GitHub} color="#eceef0" />
    </a>
</div>
