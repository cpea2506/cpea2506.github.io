import { byStargazer } from "$utils";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const reposResponse = await fetch(
        "https://api.github.com/users/cpea2506/repos",
    );
    let repos: GitHubRepo[] = await reposResponse.json();
    repos = repos.sort(byStargazer);

    const languagesResponse = await fetch(
        "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json",
    );
    const languages: GitHubLanguages = await languagesResponse.json();

    return { repos, languages };
};
