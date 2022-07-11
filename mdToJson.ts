import { Plugin } from 'vite';

import * as fs from 'fs';
import * as resolve from 'resolve';

export function mdToJsonVitePlugin(options): Plugin {
const docsPath = 'src/docs'
  return {
    name: 'vite-plugin-mdToJson',
    transform(code, id) {
      if(!id.endsWith('.md')) {
        return code
      }
      const esbuildPackagePath = resolve.sync('esbuild', { basedir: require.resolve('vite') });
      console.log(id, esbuildPackagePath, 'id')
      console.log(code)
      return {
        code: code
      }
    },
    // load(id) {
    //   console.log(id, options, 'id')
    // }
  }
}