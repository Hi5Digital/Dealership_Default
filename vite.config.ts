import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";
import { partytownVite } from "@builder.io/partytown/utils";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Partytown - offload third-party scripts to web worker
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
    // PWA Service Worker for caching
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "*.png", "*.webp", "*.svg"],
      manifest: {
        name: "CarLeads - Dealership Management System",
        short_name: "CarLeads",
        description: "Complete dealership CRM, inventory, and sales management for South African car dealers",
        theme_color: "#0EA5E9",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/icon520.png",
            sizes: "520x520",
            type: "image/png",
          },
        ],
      },
      workbox: {
        // Cache static assets
        globPatterns: ["**/*.{js,css,html,ico,png,webp,svg,woff2}"],
        // Runtime caching strategies
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          {
            urlPattern: /\.(?:js|css)$/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
            },
          },
        ],
      },
    }),
    // Gzip compression
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false,
    }),
    // Brotli compression (better compression ratio)
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-toast",
          ],
          "utils": ["clsx", "tailwind-merge", "class-variance-authority"],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minification settings
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Source maps for debugging (disable for smaller builds)
    sourcemap: false,
  },
}));
