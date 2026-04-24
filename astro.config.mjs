// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://transcendent-sawine-9044bf.netlify.app/",

  integrations: [preact()],
});