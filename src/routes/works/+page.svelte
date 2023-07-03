<script lang="ts">
    import RepoByCategory from "$components/RepoByCategory.svelte";
    import type { PageData } from "./$types";
    import { isForked, madeByOwn } from "$utils";

    export let data: PageData;

    $: ({ repos } = data);

    const category: RepoCategory = {
        games: [],
        apple: [],
        dotfiles: [],
        neovim: [],
        problemSolving: [],
        externalContributions: [],
        others: [],
    };

    repos.filter(madeByOwn).forEach((repo) => {
        const topicsIncludes = (value: string) => repo.topics.includes(value);

        switch (true) {
            case topicsIncludes("apple"):
                category.apple.push(repo);
                break;
            case topicsIncludes("game"):
                category.games.push(repo);
                break;
            case topicsIncludes("neovim"):
                category.neovim.push(repo);
                break;
            case topicsIncludes("dotfiles"):
                category.dotfiles.push(repo);
                break;
            case topicsIncludes("problem-solving"):
                category.problemSolving.push(repo);
                break;
            default:
                category.others.push(repo);
                break;
        }

        category.externalContributions = repos.filter(isForked);
    });
</script>

<svelte:head>
    <title>Captain's Works</title>
    <meta name="description" content="All treasures I've made" />
</svelte:head>

<main class="my-4 flex flex-col gap-8">
    <RepoByCategory repos={category.neovim}>
        <span slot="icon">🌛</span>
        <span slot="title">Neovim</span>
    </RepoByCategory>
    <RepoByCategory repos={category.games}>
        <span slot="icon">🎮</span>
        <span slot="title">Games</span>
    </RepoByCategory>
    <RepoByCategory repos={category.problemSolving}>
        <span slot="icon">🧠</span>
        <span slot="title">Problem Solving</span>
    </RepoByCategory>
    <RepoByCategory repos={category.apple}>
        <span slot="icon">🍎</span>
        <span slot="title">Apple</span>
    </RepoByCategory>
    <RepoByCategory repos={category.dotfiles}>
        <span slot="icon">.</span>
        <span slot="title">dotfiles</span>
    </RepoByCategory>
    <RepoByCategory repos={category.others}>
        <span slot="icon">📦</span>
        <span slot="title">Others</span>
    </RepoByCategory>
    <RepoByCategory repos={category.externalContributions}>
        <span slot="icon">🙋🏼‍♂️ </span>
        <span slot="title">External Contributions</span>
    </RepoByCategory>
</main>
