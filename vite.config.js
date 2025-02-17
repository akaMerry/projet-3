import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "restaurant-la-palette-du-gout/index.html"),
        nested: resolve(__dirname, "restaurant-la-note-enchantee/index.html"),
        nested: resolve(__dirname, "restaurant-le-delice-des-sens/index.html"),
        nested: resolve(__dirname, "restaurant-a-la-francaise/index.html"),
      },
    },
  },
});
