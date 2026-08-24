import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(() => {
  const codespaceName = process.env.VITE_CODESPACE_NAME || process.env.CODESPACE_NAME

  return {
    define: {
      'import.meta.env.VITE_CODESPACE_NAME': JSON.stringify(codespaceName || ''),
    },
    plugins: [react()],
  }
})
