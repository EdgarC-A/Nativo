import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Permite acceso desde cualquier IP en la red local
    port: 5173, // Especifica el puerto (puedes cambiarlo si es necesario)
  },
});
