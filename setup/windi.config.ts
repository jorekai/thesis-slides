// windi.config.ts

import "@windicss/plugin-scrollbar";

import { defineConfig } from "windicss/helpers";
import scrollSnapPlugin from "windicss/plugin/scroll-snap";

export default defineConfig({
  plugins: [
    scrollSnapPlugin,
    // ...
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
});
