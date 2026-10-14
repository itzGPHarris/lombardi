import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({ plugins: [react(), svgr()], test: { environment: 'node', include: ['tests/**/*.test.{js,jsx}'], clearMocks: true, restoreMocks: true } });
