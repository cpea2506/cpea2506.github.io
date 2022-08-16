export type Frontmatter = {
    title: string;
    description: string;
    date: string;
};

export type Post = {
    meta: Frontmatter;
    path: string;
};
