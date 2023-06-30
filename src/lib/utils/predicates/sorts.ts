export const byStargazer = (a: GitHubRepo, b: GitHubRepo) =>
    b.stargazers_count - a.stargazers_count;
