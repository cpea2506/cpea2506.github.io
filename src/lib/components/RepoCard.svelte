<script lang="ts">
    import RepoMetaData from "$components/RepoMetaData.svelte";
    import GradientText from "$components/GradientText.svelte";

    export let href: string;
    export let name: string;
    export let stargazersCount: number;
    export let forksCount: number;
    export let description: string;
    export let size: number;
    export let language: string;
</script>

<div
    class="hover:shadow-blue/25 border-blue/25 flex flex-col justify-between rounded-md border bg-white/5 shadow-lg transition-colors"
>
    <div
        class="h-full rounded-t-md bg-white/10 p-2 pl-5 transition-colors hover:bg-white/20"
    >
        <div class="flex flex-col gap-1">
            <a {href}>
                <GradientText hover>
                    {name}
                </GradientText>
            </a>
            {#if description}
                <span class="text-xs font-medium tracking-wide md:text-sm">
                    {description}
                </span>
            {/if}
        </div>
    </div>
    <div class="px-2">
        <RepoMetaData {href} {stargazersCount} {forksCount} {size} {language} />
    </div>
</div>
