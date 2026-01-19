import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/pages/about/index.html"),
        projects: resolve(__dirname, "src/pages/projects/index.html"),
        services: resolve(__dirname, "src/pages/services/index.html"),
      },
    },
  },
});
