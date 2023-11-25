/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        files: ["*.html", "./src/**/*.rs"],
    },
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
        },
        plugins: [],
    },
};
