import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-redux',
        '@reduxjs/toolkit',
        'axios',
        'formik',
        'yup',
        'redux-persist/integration/react',
      ],
    },
  },
});
