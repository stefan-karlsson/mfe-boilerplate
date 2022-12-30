import { build } from 'esbuild';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import stylePlugin from 'esbuild-style-plugin';
import { join, dirname } from 'node:path';
import { rmSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { federationBuilder } from '@softarc/native-federation/build';
import { esBuildAdapter } from '@softarc/native-federation-esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function buildProject(watch: boolean) {
  const tsConfig = 'tsconfig.json';
  const outputPath = `dist`;

  await federationBuilder.init({
    options: {
      workspaceRoot: join(__dirname, '..'),
      outputPath,
      tsConfig,
      federationConfig: `build/federation.config.cjs`,
      verbose: true,
    },
    adapter: esBuildAdapter,
  });

  rmSync(outputPath, { force: true, recursive: true });

  await build({
    entryPoints: ['./src/main.ts', './src/styles.scss'],
    external: federationBuilder.externals,
    outdir: outputPath,
    bundle: true,
    treeShaking: false,
    minify: true,
    watch,
    platform: 'browser',
    format: 'esm',
    mainFields: ['es2020', 'browser', 'module', 'main'],
    conditions: ['es2020', 'es2015', 'module'],
    resolveExtensions: ['.ts', '.tsx', '.mts', '.mjs', '.js', '.json'],
    tsconfig: tsConfig,
    splitting: false,
    plugins: [
      stylePlugin({
        postcss: {
          plugins: [autoprefixer, tailwindcss({ config: './build/tailwind.config.cjs' })],
        },
      }),
    ],
  });

  copyFileSync('./src/index.html', './dist/index.html');

  await federationBuilder.build();
}
