// apps/remote1/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote1",
      filename: "remoteEntry.js", // ✅ 이 이름이 나중에 /assets/remoteEntry.js 로 나옴
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: "src/main.tsx", // 또는 entry HTML/TSX 파일
    },
  },
  preview: {
    port: 5174,
  },
  server: {
    port: 5174,
    cors: true,
  },
});
