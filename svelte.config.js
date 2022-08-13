import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

const dev = "production" === "development";

/**
 * @type {import("@sveltejs/kit").Config}
 */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],
  extensions: [".svelte", ".md"],
  kit: {
    paths: {
      base: dev ? "" : "/cpea2506.github.io",
    },
    prerender: {
      enabled: true,
      default: true,
    },
    adapter: adapter(),
    alias: {
      $components: "./src/lib/components",
      $types: "./src/lib/types",
      $styles: "./src/lib/styles",
      $routes: "./src/routes",
    },
  },
};

export default config;
