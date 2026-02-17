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
import AstroPWA from "@vite-pwa/astro";

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
    AstroPWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "avatar.svg"],
      manifest: {
        name: SITE.title,
        short_name: SITE.shortName,
        description: SITE.desc,
        theme_color: "#006cac",
        background_color: "#fdfdfd",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "favicon.ico",
            sizes: "48x48",
            type: "image/x-icon",
          },
          {
            src: "avatar.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        navigateFallback: "/404",
        globPatterns: ["**/*.{css,js,html,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
        suppressWarnings: true,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
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
