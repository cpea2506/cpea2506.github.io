import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({ url }) => {
    const route = url.pathname;

    return { route };
};
