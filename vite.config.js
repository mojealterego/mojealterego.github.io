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

export default defineConfig({
  base: '/',
  plugins: [react()],
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: { input },
  },
})
