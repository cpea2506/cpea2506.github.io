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
