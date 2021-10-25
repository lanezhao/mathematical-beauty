/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  server: {
    open: true,
  },
  css: {
    sourceMap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '/src/styles/variables';
        `,
      },
    },
  },
  plugins: [
    vue(),
  ],
});
