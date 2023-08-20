module.exports = {
  extends: [
    "@rocketseat/eslint-config/next",
    "plugin:prettier/recommended"
  ],
  plugins: ["eslint-plugin-import-helpers"],
  rules: {
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: [
          "/^react/",
          ["/^next/", "/@next/"],
          "/@chakra-ui/",
          "/components/",
          "module",
          "/^@shared/",
          "/^@\\//",
          "/absolute/",
          ["parent", "sibling", "index"]
        ],
        alphabetize: {
          order: "asc",
          ignoreCase: true
        }
      }
    ],
    "prettier/prettier": ["error", { trailingComma: "none" }]
  }
}
