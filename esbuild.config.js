const { build } = require('esbuild');
const glob = require('glob');

const def = {
  write: true,
  target: 'node14',
  platform: 'node',
  minify: true,
  tsconfig: 'tsconfig.json',
};

build(
  Object.assign(
    {
      entryPoints: glob('src/safe/**/*.ts', { sync: true }),
      outdir: 'dist/safe',
      outExtension: { '.js': '.mjs' },
    },
    def,
  ),
);

build(
  Object.assign(
    {
      entryPoints: glob('src/unsafe/**/*.ts', { sync: true }),
      outdir: 'dist/unsafe',
      outExtension: { '.js': '.mjs' },
    },
    def,
  ),
);

build(
  Object.assign(
    {
      entryPoints: ['src/safe.ts'],
      outdir: 'dist',
      bundle: true,
    },
    def,
  ),
);

build(
  Object.assign(
    {
      entryPoints: ['src/unsafe.ts'],
      outdir: 'dist',
      bundle: true,
    },
    def,
  ),
);

build(
  Object.assign(
    {
      entryPoints: ['src/index.ts'],
      outdir: 'dist',
      format: 'cjs',
    },
    def,
  ),
);
