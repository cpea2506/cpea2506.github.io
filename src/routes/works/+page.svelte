<script lang="ts">
    import Grid from "$components/Grid.svelte";
    import RepoCard from "$components/RepoCard.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: ({ repos } = data);
</script>

<svelte:head>
    <title>Captain's Works</title>
    <meta name="description" content="All treasures I've made" />
</svelte:head>

<main class="max-w-7xl px-4 sm:px-6 lg:px-8">
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
</main>
