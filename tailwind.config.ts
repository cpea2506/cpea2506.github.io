import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{svelte, scss}"],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                white: {
                    DEFAULT: "#eceef0",
                    100: "#fefefe",
                },
                gray: {
                    DEFAULT: "#9ca3b2",
                    100: "#4b5261",
                },
                black: {
                    DEFAULT: "#18191a",
                    100: "#282c34",
                    200: "#22272e",
                    300: "#1e2024",
                },
                red: {
                    DEFAULT: "#ee2c68",
                },
                blue: {
                    DEFAULT: "#00b0ff",
                },
                green: {
                    DEFAULT: "#3dd177",
                },
                yellow: {
                    DEFAULT: "#ffc900",
                },
            },
            typography: () => ({
                "one-monokai": {
                    css: {
                        "--tw-prose-body": "#abb2bf",
                        "--tw-prose-pre-code": "var(--tw-prose-body)",
                        "--tw-prose-code": "var(--tw-prose-body)",
                        "--tw-prose-quotes": "#676e7b",
                        "--tw-prose-quote-borders": "var(--tw-prose-quotes)",
                        "--tw-prose-links": "#00b0ff",
                        "--tw-prose-headings": "#eceef0",
                        "--tw-prose-pre-bg": "hsl(220, 10%, 15%)",
                        "--tw-prose-bullets": "#ee2c68",
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
