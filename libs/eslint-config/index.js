module.exports = {
  extends: ["next/core-web-vitals", '@rocketseat/eslint-config/react'],
  plugins: ["eslint-plugin-import-helpers"],
  rules: {
    "import-helpers/order-imports": [
      error,
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
          ["parent", "sibling", "index"]],
        alphabetize: {
          order: "asc",
          ignoreCase: true
        }
      }
    ]
  }
}
