import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Imagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    Imagemin({
      // eslint-disable-next-line no-undef
      disable: process.env.NODE_ENV !== "production",
      gifsicle: {},
      jpegtran: {},
      optipng: {},
      svgo: {},
    }),
  ],
});
