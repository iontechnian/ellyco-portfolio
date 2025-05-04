import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite';
import webfontDownload from 'vite-plugin-webfont-dl';
import Icons from 'unplugin-icons/vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    reactRouter(),
    tailwindcss(),
    webfontDownload(),
    Icons({
      compiler: 'jsx',
      jsx: 'react'
    }),
  ],
});
