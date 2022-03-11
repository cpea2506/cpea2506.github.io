// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "CPea's Journey",
    tagline: "🥜 I'm Captain JackSpearrow 🏴‍☠️",
    url: "cpea2506.github.io",
    baseUrl: "/",
    deploymentBranch: "main",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "cpea2506", // Usually your GitHub org/user name.
    projectName: "cpea2506.github.io", // Usually your repo name.
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: "https://github.com/cpea2506/cpea2506.github.io",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "CPea's Journey",
                logo: {
                    alt: "Captain Logo",
                    src: "img/logo.png",
                },
                items: [
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/cpea2506",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                copyright: `Copyright © ${new Date().getFullYear()} CPea's Journey. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                defaultMode: "dark",
                disableSwitch: true,
                respectPrefersColorScheme: true,
                switchConfig: {
                    darkIcon: "🌝",
                    darkIconStyle: {
                        marginLeft: "2px",
                    },
                    // Unicode icons such as '\u2600' will work
                    // Unicode with 5 chars require brackets: '\u{1F602}'
                    lightIcon: "😎",
                    lightIconStyle: {
                        marginLeft: "1px",
                    },
                },
            },
        }),
    plugins: ["docusaurus-plugin-sass"],
};

module.exports = config;
