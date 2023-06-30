<script lang="ts">
    import RepoMetaData from "$components/RepoMetaData.svelte";

    export let href: string;
    export let name: string;
    export let stargazersCount: number;
    export let forksCount: number;
    export let description: string;
    export let size: number;
    export let language: string;
</script>

<div
    class="hover:shadow-blue/25 flex flex-col justify-between rounded-md bg-white/5 shadow-lg transition-colors"
>
    <div
        class="h-full rounded-t-md bg-white/10 p-2 pl-5 transition-colors hover:bg-white/20"
    >
        <div class="flex flex-col gap-1">
            <a
                {href}
                class="hover:animate-text hover:from-green hover:via-yellow hover:to-red font-bold tracking-wide text-white hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent md:text-base"
            >
                {name}
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
