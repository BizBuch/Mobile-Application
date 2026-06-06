import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const monorepoRoot = path.resolve(__dirname, '..');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@domain': path.resolve(__dirname, '../shared/domain'),
      '@application': path.resolve(__dirname, '../shared/application'),
      '@infrastructure': path.resolve(__dirname, '../shared/infrastructure'),
      '@core': path.resolve(__dirname, '../shared/core'),
      '@services': path.resolve(__dirname, '../shared/services'),
      '@forms': path.resolve(__dirname, '../shared/forms'),
      '@queryClient': path.resolve(__dirname, '../shared/queryClient'),
      '@di': path.resolve(__dirname, '../shared/di'),
      '@web-presentation': path.resolve(__dirname, './src/presentation'),
    },
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(monorepoRoot, 'node_modules'),
    ],
    dedupe: ['react', 'react-dom', '@tanstack/react-query', 'react-hook-form'],
  },
  server: {
    port: 3000,
  },
});