import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // base relativo: funciona tanto en user.github.io como en user.github.io/repo
  // sin tener que conocer el nombre del repositorio de despliegue.
  base: './',
  plugins: [tailwindcss()],
});
