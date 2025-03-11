import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    port: 3000,
    proxy: {
      "/ws": {
        target: "ws://localhost:5173", // Your actual WebSocket server
        ws: true,
      },
    },
  },

});
