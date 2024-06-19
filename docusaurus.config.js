// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Universal Blog",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "personal", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/dhub-dev/template-docusaurus-blog/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      //How to add a logo to navbar: https://docusaurus.io/docs/api/themes/configuration#navbar-logo
      title: "Blog Website",
      items: [
        //Your links in the site header
        { to: "/about-page", label: "About Me", position: "left" },
        {
          "aria-label": "Discord Invite",
          className: "navbar--discord-link",
          href: "https://discord.gg/6qGnyrt7xy",
          position: "right",
        },
        {
          "aria-label": "GitHub Repository",
          className: "navbar--github-link",
          href: "https://github.com/dhub-dev/template-docusaurus-blog",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/dhub",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/6qGnyrt7xy",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/withdhub",
            },
          ],
        },
        {
          title: "Docusaurus",
          items: [
            {
              label: "Home",
              href: "https://docusaurus.io",
            },
            {
              label: "Documentation",
              href: "https://docusaurus.io/docs/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
        {
          title: "Dhub",
          items: [
            {
              label: "Home",
              href: "https://dhub.dev",
            },
            {
              label: "Get in touch",
              href: "mailto:hello@dhub.dev",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Blog Website, Inc. Built with Docusaurus, edited with Dhub`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
