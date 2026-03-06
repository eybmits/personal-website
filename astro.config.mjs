// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import { remarkLazyLoadImages } from "./src/utils/remarkLazyLoadImages.mjs";
import { SITE } from "./src/config";

export default defineConfig({
  site: SITE.website,
  trailingSlash: "never",
  markdown: {
    remarkPlugins: [
      remarkToc,
      // @ts-ignore - TypeScript has issues with remark plugin tuple syntax
      [remarkCollapse, { test: "Table of contents" }],
      remarkLazyLoadImages,
    ],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        if (!SITE.showArchives && page.endsWith("/archives")) return false;
        return true;
      },
      serialize: (item) => {
        if (item.url.endsWith("/") && item.url !== SITE.website + "/") {
          item.url = item.url.slice(0, -1);
        }

        const url = item.url;

        item.changefreq = ChangeFreqEnum.MONTHLY;
        item.priority = 0.5;

        if (url === SITE.website || url === SITE.website + "/") {
          item.priority = 1.0;
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.lastmod = new Date().toISOString();
        } else if (
          url.endsWith("/posts") ||
          url.endsWith("/about") ||
          url.endsWith("/search") ||
          url.endsWith("/archives")
        ) {
          item.priority = 0.9;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else if (url.includes("/posts/")) {
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        } else if (url.includes("/tags/")) {
          item.priority = 0.2;
          item.changefreq = ChangeFreqEnum.YEARLY;
        } else if (url.match(/\/page\/\d+$/)) {
          item.priority = 0.4;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        }

        return item;
      },
    }),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
