import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    ...configDefaults,
    globals: true,
    clearMocks: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['lcov', 'json', 'json-summary'],
      provider: 'c8',
    },
    setupFiles: './vitest.setup.mjs',
  },
});
