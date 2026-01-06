import path from "path";
import { defineConfig } from "vitest/config";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    exclude: ["node_modules/**"],
    projects: [
      // ui
      {
        extends: true,
        test: {
          include: ["**/*.visual.test.tsx"],
          name: "ui",
          setupFiles: "./test/vitest-setup.ts",
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [
              {
                browser: "chromium",
                viewport: { width: 1280, height: 720 },
              },
            ],
            expect: {
              toMatchScreenshot: {
                comparatorName: "pixelmatch",
                comparatorOptions: {
                  // 0-1, how different can colors be?
                  threshold: 0,
                  // 1% of pixels can differ
                  allowedMismatchedPixelRatio: 0,
                },
              },
            },
          },
        },
      },
      // unit
      {
        extends: true,
        test: {
          name: "unit",
          exclude: ["**/*.visual.test.tsx"],
        },
      },
    ],
  },
});
