// Eslint Config Requirements
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";
// Export Eslint Config
export default [
  // Base JS rules
  js.configs.recommended,
  // TypeScript
  ...tseslint.configs.recommended,
  // Next.js Flat Config
  next.configs["core-web-vitals"],
  // Storybook Flat Config
  ...storybook.configs["flat/recommended"],
  // Ignore files
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];