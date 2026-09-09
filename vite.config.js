import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const legacyPages = fs.readdirSync(root).filter((name) => name.endsWith('.html') && name !== 'index.html')
const input = Object.fromEntries([
  ['index', path.resolve(root, 'index.html')],
  ...legacyPages.map((name) => [name.replace(/\.html$/, ''), path.resolve(root, name)])
])

const staticFiles = ['.nojekyll', 'manifest.webmanifest', 'sitemap.xml', 'robots.txt']

function preserveStaticFiles(){
  return {
    name:'preserve-root-static-files',
    closeBundle(){
      const outDir=path.resolve(root,'dist')
      for(const file of staticFiles){
        const source=path.resolve(root,file)
        if(fs.existsSync(source)) fs.copyFileSync(source,path.resolve(outDir,file))
      }
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), preserveStaticFiles()],
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: { input },
  },
})
