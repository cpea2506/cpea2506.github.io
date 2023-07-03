<script lang="ts">
    import { page } from "$app/stores";
    import Icon from "$components/Icon.svelte";
    import GitHubIcon from "./GitHubIcon.svelte";
    import { StarFill, RepoForked, Gear, DotFill } from "@steeze-ui/octicons";

    export let href: string;
    export let stargazersCount: number;
    export let forksCount: number;
    export let size: number;
    export let language: string;

    const languages = $page.data.languages;
    const languageColor = languages && languages[language]?.color;
</script>

<div class="m-1 flex font-medium">
    <div class="flex grow">
        <Icon src={StarFill} color={stargazersCount > 0 ? "#ffc900" : "#eceef0"}
            >{stargazersCount}</Icon
        >
        <Icon src={RepoForked} color="#eceef0">{forksCount}</Icon>
        <Icon src={Gear} color="#9ca3b2">
            {size / 1000 > 1 ? `${Math.floor(size / 1000)} mb` : `${size} kb`}
        </Icon>
        {#if languageColor}
            <Icon src={DotFill} color={languageColor}>
                {language}
            </Icon>
        {/if}
    </div>
    <a class="flex-items-center mr-2 gap-1" {href} target="_blank">
        <GitHubIcon />
    </a>
</div>
