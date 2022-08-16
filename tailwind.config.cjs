const typography = require("@tailwindcss/typography");
/**
 * @type {import("tailwindcss").Config}
 */
const config = {
    content: ["./src/**/*.{svelte, scss}"],
    theme: {
        extend: {
            typography: (_) => ({
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
                    },
                },
            }),
        },
    },
    plugins: [typography],
};

module.exports = config;
