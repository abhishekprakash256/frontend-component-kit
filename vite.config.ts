// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts', // Entry point of your component library
      name: 'FrontendReactComponents', // New global variable name
      fileName: (format) => `frontend-react-components.${format}.js`, // New output file format (es, cjs)
    },
    rollupOptions: {
      // Externalize dependencies that you don't want to include in the library bundle
      external: ['react', 'react-dom'], 
      output: {
        globals: {
          react: 'React', // If used via CDN, React will be a global variable
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
