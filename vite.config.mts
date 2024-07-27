import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        copyPublicDir: false,
        cssCodeSplit: true,
        lib: {
            entry: {
                index: "src/index.ts",
            },
            name: "your repositorie",
            fileName: "index",
        },
        outDir: "dist",
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: [
                {
                    format: "es",
                    chunkFileNames: "chunks/[name].[hash].js",
                    assetFileNames: "assets/[name][extname]",
                    entryFileNames: "[name].js",
                },
            ],
        },
    },
    plugins: [
        react(),
        // visualizer(),
    ],
});
