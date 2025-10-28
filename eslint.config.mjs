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

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  reactHooks.configs.flat.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
      "@typescript-eslint": typescriptPlugin,
      import: importPlugin,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": ["error", { endOfLine: "auto" }],

      // ts
      "@typescript-eslint/no-unused-vars": ["warn"],
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

      "react/jsx-props-no-spreading": "warn",
      "react/function-component-definition": ["warn", { namedComponents: "arrow-function" }],
      "react/no-unused-prop-types": "error",
      "react/display-name": "off",
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
