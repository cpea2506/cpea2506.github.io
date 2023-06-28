import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{svelte, scss}"],
    theme: {
        extend: {
            typography: () => ({
                "one-monokai": {
                    css: {
                        "--tw-prose-body": "#abb2bf",
                        "--tw-prose-pre-code": "var(--tw-prose-body)",
                        "--tw-prose-code": "var(--tw-prose-body)",
                        "--tw-prose-quotes": "#676e7b",
                        "--tw-prose-quote-borders": "var(--tw-prose-quotes)",
                        "--tw-prose-links": "#61afef",
                        "--tw-prose-pre-bg": "hsl(220, 10%, 15%)",
                        "--tw-prose-headings": "#dedeff",
                        "--tw-prose-bullets": "#e06c75",
                        "--tw-prose-bold": "var(--tw-prose-body)",
                        "ul:has(li):has(input[type='checkbox'])": {
                            padding: 0,
                        },
                        "ul > li:has(input[type='checkbox'])": {
                            listStyle: "none",
                        },
                        "ul > li:has(input[type='checkbox']) ul li": {
                            paddingLeft: 30,
                        },
                    },
                },
            }),
        },
    },
    plugins: [typography],
};

export default config;
