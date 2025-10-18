// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

export default defineConfig({
  site: process.env.HOST_ENDPOINT,
  redirects: {
    "/": {
      status: 302,
      destination: "/vi",
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "vi",
        locales: {
          en: "en",
          vi: "vi",
        },
      },
    }),
    starlight({
      plugins: [starlightThemeNova()],
      title: "Vibe Planner",
      defaultLocale: "vi",
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
        vi: {
          label: "Tiếng Việt",
          lang: "vi",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vhnam/vibe-planner-docs",
        },
      ],
      sidebar: [
        {
          label: "Cores",
          items: [
            {
              label: "Changes",
              slug: "cores/changes",
              translations: { vi: "Chuyển đổi" },
            },
            {
              label: "Needs",
              slug: "cores/needs",
              translations: { vi: "Nhu cầu" },
            },
            {
              label: "Solutions",
              slug: "cores/solutions",
              translations: { vi: "Giải pháp" },
            },
            {
              label: "Stakeholders",
              slug: "cores/stakeholders",
              translations: { vi: "Các bên liên quan" },
            },
            {
              label: "Value",
              slug: "cores/value",
              translations: { vi: "Giá trị" },
            },
            {
              label: "Context",
              slug: "cores/context",
              translations: { vi: "Bối cảnh" },
            },
          ],
          translations: { vi: "Cốt lõi" },
        },
        {
          label: "Knowledge Areas",
          items: [
            {
              label: "Current State",
              slug: "knowledge-areas/current-state",
              translations: { vi: "Phân tích hiện trạng" },
            },
          ],
          translations: { vi: "Lĩnh vực kiến thức" },
        },
        {
          label: "Appendix",
          autogenerate: { directory: "appendix" },
          translations: { vi: "Phụ lục" },
        },
      ],
    }),
  ],
});
