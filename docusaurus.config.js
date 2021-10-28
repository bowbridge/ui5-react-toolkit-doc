// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UI5-React-Toolkit | Docs",
  tagline: "Utility components and Functions for UI5 Web Components for React",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/bowbridge.ico",
  organizationName: "bowbridge", // Usually your GitHub org/user name.
  projectName: "ui5-react-toolkit", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        /*      blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        }, */
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
        title: "UI5-React-Toolkit",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },

          {
            href: "https://github.com/bowbridge/ui5-react-toolkit",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "NPM",
                href: "https://www.npmjs.com/package/@bowbridge/ui5-react-toolkit",
              },
              {
                label: "UI5-React-Toolkit-Examples",
                href: "https://ui5-react-examples.bowbridge.net/",
              },
              {
                label: "UI5-React-Typescript-Starter",
                href: "https://github.com/bowbridge/ui5-react-typescript",
              },
            ],
          },
          {
            title: "bowbridge",
            items: [
              {
                label: "Website",
                href: "https://www.bowbridge.net/",
              },
              {
                label: "Github",
                href: "https://github.com/bowbridge",
              },

              {
                label: "Linked in",
                href: "https://www.linkedin.com/company/bowbridge-software/mycompany/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} bowbridge Software GmbH. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
