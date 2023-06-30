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
};

declare type GitHubLanguages = {
    [key: string]: { color: string };
};
