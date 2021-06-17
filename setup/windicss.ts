// setup/windicss.ts
// windi.config.ts
import scrollSnapPlugin from "windicss/plugin/scroll-snap";
import { defineWindiSetup } from "@slidev/types";

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  plugins: [
    scrollSnapPlugin,
    // ...
  ],
}));
