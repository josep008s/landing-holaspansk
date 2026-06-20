import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// holaSpansk landing — Vite + React.
// `base` defaults to "/" for local dev; the Pages build sets VITE_BASE to the
// project subpath (e.g. "/landing-holaspansk/") so all asset URLs resolve.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
});
