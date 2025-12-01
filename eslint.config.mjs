// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import { defineConfig, globalIgnores } from "eslint/config";
// eslint-disable-next-line import/no-unresolved
import nextVitals from "eslint-config-next/core-web-vitals";
// eslint-disable-next-line import/no-unresolved
import nextTs from "eslint-config-next/typescript";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";
import revol from "eslint-plugin-revol";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  reactHooks.configs.flat.recommended,
  storybook.configs["flat/recommended"],
  {
    plugins: {
      prettier: prettierPlugin,
      "@typescript-eslint": typescriptPlugin,
      import: importPlugin,
      "react-refresh": reactRefresh,
      "unused-imports": unusedImports,
      revol,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": ["error", { endOfLine: "auto" }],

      // ts
      "@typescript-eslint/no-unused-vars": ["off"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
      "@typescript-eslint/no-inferrable-types": ["warn"],
      "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],

      // imports
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
          "newlines-between": "never",
        },
      ],
      "import/newline-after-import": ["error", { count: 1 }],
      "import/no-unresolved": "error",
      "import/no-cycle": "error",
      "import/no-unused-modules": "warn",
      "import/no-duplicates": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "react/jsx-props-no-spreading": "warn",
      "react/function-component-definition": ["warn", { namedComponents: "arrow-function" }],
      "react/no-unused-prop-types": "error",
      "react/display-name": "off",

      //   custom
      "revol/path-checker": ["error", { alias: "@" }],
      "revol/layer-imports": ["error", { alias: "@" }],
      "revol/public-api-imports": ["error", { alias: "@" }],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
