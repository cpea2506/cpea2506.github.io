import { sveltekit } from "@sveltejs/kit/vite";
import TailwindCSS from "tailwindcss";
import tailwindConfig from "./tailwind.config";
import type { UserConfig } from "vite";

const config: UserConfig = {
    plugins: [sveltekit()],
    css: {
        postcss: {
            plugins: [TailwindCSS(tailwindConfig)],
        },
    },
};

export default config;
