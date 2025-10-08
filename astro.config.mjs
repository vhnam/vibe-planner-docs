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
          label: "Core",
          items: [
            {
              label: "Changes",
              slug: "changes",
              translations: { vi: "Chuyển đổi" },
            },
            {
              label: "Needs",
              slug: "needs",
              translations: { vi: "Nhu cầu" },
            },
          ],
          translations: { vi: "Cốt lõi" },
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
