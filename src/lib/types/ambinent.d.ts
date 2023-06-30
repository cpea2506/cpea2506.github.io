declare type Frontmatter = {
    title: string;
    description: string;
    date: string;
};

declare type Post = {
    meta: Frontmatter;
    path: string;
};

declare type LanguageProps = {
    src: string;
    alt: string;
};

declare type GitHubRepo = {
    html_url: string;
    name: string;
    description: string;
    size: number;
    stargazers_count: number;
    forks_count: number;
    language: string;
    fork: boolean;
    topics: string[];
    pushed_at: Date;
};

declare type GitHubLanguages = {
    [key: string]: { color: string };
};

declare type RepoCategory = {
    games: GitHubRepo[];
    apple: GitHubRepo[];
    dotfiles: GitHubRepo[];
    neovim: GitHubRepo[];
    problemSolving: GitHubRepo[];
    externalContributions: GitHubRepo[];
    others: GitHubRepo[];
};
