import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-shadow": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { caughtErrorsIgnorePattern: "^_" },
      ],
    },
  },
  eslintConfigPrettier,
];

export default defineConfig(eslintConfig);
