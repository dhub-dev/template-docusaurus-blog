// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blog Website",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
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
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
        { to: "/", label: "Home", position: "left" },
        { to: "/about-page", label: "About Me", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docusaurus Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "Docusaurus Resources",
          items: [
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
          title: "Dhub Resources",
          items: [
            {
              label: "Application",
              href: "https://dhub.dev",
            },
            {
              label: "Documentation",
              href: "https://docs.dhub.dev",
            },
          ],
        },
        {
          title: "Site links",
          items: [
            {
              label: "Blog Posts",
              href: "/",
            },
            {
              label: "About Me",
              href: "/about-page",
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
