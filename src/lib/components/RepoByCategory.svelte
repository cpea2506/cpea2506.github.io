<script lang="ts">
    import Grid from "$components/Grid.svelte";
    import RepoCard from "$components/RepoCard.svelte";
    import GradientText from "$components/GradientText.svelte";

    export let repos: GitHubRepo[];
</script>

<div class="flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
    <div class="mb-2 items-center gap-1 text-lg font-semibold">
        <slot name="icon" />
        <GradientText><slot name="title" /></GradientText>
    </div>
    <Grid>
        {#each repos as repo}
            <RepoCard
                href={repo.html_url}
                stargazersCount={repo.stargazers_count}
                forksCount={repo.forks_count}
                name={repo.name}
                description={repo.description}
                size={repo.size}
                language={repo.language}
            />
        {/each}
    </Grid>
</div>
