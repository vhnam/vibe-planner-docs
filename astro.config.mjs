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
            {
              label: "Business Requirements",
              slug: "knowledge-areas/business-requirements",
              translations: { vi: "Yêu cầu kinh doanh" },
            },
            {
              label: "Business Objectives",
              slug: "knowledge-areas/business-objectives",
              translations: { vi: "Mục tiêu kinh doanh" },
            },
            {
              label: "Future State",
              slug: "knowledge-areas/future-state",
              translations: { vi: "Trạng thái tương lai" },
            },
            {
              label: "Solution Scope",
              slug: "knowledge-areas/solution-scope",
              translations: { vi: "Phạm vi giải pháp" },
            },
            {
              label: "Business Analysis Approach",
              slug: "knowledge-areas/business-analysis-approach",
              translations: { vi: "Cách tiếp cận phân tích kinh doanh" },
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
