import { getHighlighter, loadTheme } from "shiki"
import { escapeSvelte } from "mdsvex"

async function highlighter(code, lang) {
    const highlighter = await getHighlighter({
        theme: "github-dark-dimmed"
    })

    const html = highlighter.codeToHtml(code, { lang })

    return `${escapeSvelte(html)}`;

}


const config = {
    smartypants: true,
    extensions: [".md"],
    layout: {
        blogs: "./src/routes/blogs/_post.svelte",
    },
    highlight: {
        highlighter
    },
}

export default config
