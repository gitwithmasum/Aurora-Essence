import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
export default defineConfig({base:"/Aurora-Essence/",plugins:[react()],resolve:{alias:{"@":path.resolve(__dirname,"./src")}},build:{rollupOptions:{input:path.resolve(__dirname,"app.html")}}});
