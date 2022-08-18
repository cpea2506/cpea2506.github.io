import { getHighlighter } from "shiki";
import { escapeSvelte } from "mdsvex";

/**
 * @type {import("mdsvex").MdsvexOptions}
 */
const config = {
    extensions: [".md"],
    layout: {
        blogs: "src/routes/blogs/_post.svelte",
    },
    highlight: {
        highlighter: async (code, lang) => {
            const highlighter = await getHighlighter({
                theme: "one-monokai",
                paths: "src/lib/styles/shiki",
            });

            const html = highlighter.codeToHtml(code, { lang });

            return escapeSvelte(html);
        },
    },
};

export default config;
