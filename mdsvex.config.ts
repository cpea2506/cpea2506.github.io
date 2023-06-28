import { escapeSvelte } from "mdsvex";
import { lex, parse } from "fenceparser";
import {
    renderCodeToHTML,
    runTwoSlash,
    createShikiHighlighter,
} from "shiki-twoslash";
import { MdsvexOptions } from "mdsvex";

const config: MdsvexOptions = {
    extensions: [".md"],
    layout: {
        blogs: "./src/routes/blogs/_post.svelte",
    },
    highlight: {
        highlighter: async (code: string, lang?: string, meta?: string) => {
            const fence: any = parse(
                lex([lang, meta].filter(Boolean).join(" ")),
            );
            const twoslash: any =
                fence?.twoslash && runTwoSlash(code, lang as string);
            const highlighter = await createShikiHighlighter({
                theme: "one-monokai",
                paths: { themes: "../../../../../themes/" },
            });

            return `{@html \`${escapeSvelte(
                renderCodeToHTML(
                    code,
                    lang as string,
                    fence,
                    { themeName: "one-monokai" },
                    highlighter,
                    twoslash,
                ),
            )}\` }`;
        },
    },
};

export default config;
