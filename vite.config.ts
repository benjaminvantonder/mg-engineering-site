import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/mg-engineering-site/",
  build: {
    target: "es2020",
  },
});