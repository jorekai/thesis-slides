// windi.config.ts
import scrollSnapPlugin from "windicss/plugin/scroll-snap";
import { defineConfig } from "windicss/helpers";

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
