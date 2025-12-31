import path from "path";
import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

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
    include: ["./**/*.visual.test.tsx", "./**/*.test.tsx", "./**/*.test.ts"],
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
            threshold: 0.01,
            // 1% of pixels can differ
            allowedMismatchedPixelRatio: 0,
          },
        },
      },
      screenshotDirectory: "./test/__screenshots__",
    },
  },
});
