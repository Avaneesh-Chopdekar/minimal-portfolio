import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://avaneesh-chopdekar.netlify.app",
  integrations: [mdx(), sitemap(), tailwind(), partytown()]
});