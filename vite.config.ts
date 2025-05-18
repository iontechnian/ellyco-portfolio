import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import webfontDownload from "vite-plugin-webfont-dl";
import Icons from "unplugin-icons/vite";
import lqip from "vite-plugin-lqip";
import { imagetools } from "vite-imagetools";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@data": path.resolve(__dirname, "src/data"),
    },
  },
  plugins: [
    reactRouter(),
    tailwindcss(),
    webfontDownload(),
    Icons({
      compiler: "jsx",
      jsx: "react",
    }),
    lqip(),
    imagetools(),
  ],
});
