import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  {
    ignores: [
      ".next/*",
      "node_modules/*",
      "out/*",
      "dist/*",
      "eslint.config.mjs"
    ]
  },
  ...fixupConfigRules(compat.extends("next/core-web-vitals")),
];

export default config;
