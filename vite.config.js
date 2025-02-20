import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "palette-du-gout": resolve(
          __dirname,
          "restaurant-la-palette-du-gout.html"
        ),
        "la-note-enchantee": resolve(
          __dirname,
          "restaurant-la-note-enchantee.html"
        ),
        "le-delice-des-sens": resolve(
          __dirname,
          "restaurant-le-delice-des-sens.html"
        ),
        "a-la-francaise": resolve(__dirname, "restaurant-a-la-francaise.html"),
      },
    },
  },
});
