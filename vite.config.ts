import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Only use tempo plugin in development environment
    process.env.TEMPO === "true" || process.env.VITE_TEMPO === "true"
      ? tempo()
      : null,
  ].filter(Boolean),
  publicDir: "public",
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
    // Improve error handling during build
    minify: true,
    sourcemap: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // @ts-ignore
    allowedHosts:
      process.env.TEMPO === "true" || process.env.VITE_TEMPO === "true"
        ? true
        : undefined,
    hmr: { overlay: true },
    port: 3000,
    open: false,
    cors: true,
  },
  // Improve error handling
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
