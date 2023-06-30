import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import { Config } from "@sveltejs/kit";

const config: Config = {
    preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
    extensions: [".svelte", ...(mdsvexConfig.extensions ?? [])],
    kit: {
        adapter: adapter(),
        alias: {
            $routes: "./src/routes",
            $assets: "./src/lib/assets",
            $utils: "./src/lib/utils",
            $components: "./src/lib/components",
        },
    },
};

export default config;
