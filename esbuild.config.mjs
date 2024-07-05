import * as esbuild from 'esbuild'
import {sassPlugin} from 'esbuild-sass-plugin'

await esbuild.build({
  // ...
  entryPoints: ['src/js/main.js'],
  bundle: true,
  platform: 'browser',
  outfile: 'dist/main.js',
  plugins: [sassPlugin()]
})