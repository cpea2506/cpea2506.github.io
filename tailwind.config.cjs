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
                        "--tw-prose-links": "#61afef",
                        "--tw-prose-pre-bg": "hsl(220, 10%, 15%)",
                        "--tw-prose-pre-code": "var(--tw-prose-body)",
                        "--tw-prose-headings": "var(--tw-prose-body)",
                        "--tw-prose-quotes": "var(--tw-prose-body)",
                        "--tw-prose-bold": "#dedeff",
                        "--tw-prose-code": "var(--tw-prose-body)",
                    },
                },
            }),
        },
    },
    plugins: [typography],
};

module.exports = config;
