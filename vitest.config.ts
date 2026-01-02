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
          clearMocks: true,
          include: ["**/*.visual.test.tsx"],
          name: "ui",
          setupFiles: "./test/vitest-setup.tsx",
          browser: {
            enabled: true,
            provider: playwright({
              launchOptions: {
                args: ["--force-device-scale-factor=2"],
              },
            }),
            instances: [
              {
                browser: "chromium",
                viewport: { width: 1280, height: 720 },
                headless: true,
              },
            ],
            expect: {
              toMatchScreenshot: {
                comparatorName: "pixelmatch",
                comparatorOptions: {
                  threshold: 0,
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
