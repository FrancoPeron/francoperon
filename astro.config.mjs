import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // 
  integrations: [mdx(), tailwind(), icon()],
  output: "hybrid",
  adapter: cloudflare(),
  build: {
    assets: 'assets'
  }
});