//
// Copyright (C) 2025 Stealth Software Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice (including
// the next paragraph) shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.
//
// SPDX-License-Identifier: MIT
//

import {themes as prismThemes} from "prism-react-renderer";

const y0 = 2025;
const y1 = Math.max(y0, new Date().getFullYear());

export default {
  baseUrl: "/pollux/",
  favicon: "favicon.ico",
  headTags: [
    {
      "attributes": {
        "href": "apple-touch-icon.png",
        "rel": "apple-touch-icon",
        "sizes": "180x180",
      },
      "tagName": "link",
    },
    {
      "attributes": {
        "href": "favicon-32x32.png",
        "rel": "icon",
        "sizes": "32x32",
        "type": "image/png",
      },
      "tagName": "link",
    },
    {
      "attributes": {
        "href": "favicon-16x16.png",
        "rel": "icon",
        "sizes": "16x16",
        "type": "image/png",
      },
      "tagName": "link",
    },
    {
      "attributes": {
        "href": "site.webmanifest",
        "rel": "manifest",
      },
      "tagName": "link",
    },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "stealthsoftwareinc",
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/stealthsoftwareinc/pollux/tree/main/docs/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  projectName: "pollux",
  tagline: "Orchestration for secure multi-party computation systems",
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    footer: {
      copyright: `
        Copyright &copy;
        <span class="years">${(y1 > y0 ? y0 + "-" : "") + y1}</span>
        Stealth Software Technologies, Inc.
      `,
      style: "dark",
    },
    navbar: {
      items: [
        {
          label: "Documentation",
          position: "left",
          sidebarId: "mainSidebar",
          type: "docSidebar",
        },
        {
          href: "https://github.com/stealthsoftwareinc/pollux",
          label: "GitHub",
          position: "right",
        },
      ],
      logo: {
        alt: "Pollux",
        src: "android-chrome-512x512.png",
      },
      title: "Pollux",
    },
    prism: {
      darkTheme: prismThemes.dracula,
      theme: prismThemes.github,
    },
  },
  title: "Pollux",
  url: "https://stealthsoftwareinc.github.io",
};
