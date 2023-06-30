export const madeByOwn = (repo: GitHubRepo) => !repo.fork;
export const isForked = (repo: GitHubRepo) => repo.fork;
