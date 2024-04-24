module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'jsx-a11y',
    '@typescript-eslint',
    "eslint-plugin-import-helpers",
    'prettier',
    'unicorn',
    'perfectionist',
  ],
  rules: {
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'arrow-spacing': 'error',
    'semi-spacing': 'error',
    'no-redeclare': 'error',
    'no-console': 'error',
    'no-undef': 'error',
    'comma-dangle': 'off',
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: [
          "/^react/",
          ["/^next/", "/@next/"],
          "/@nextime-ui/react/",
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
    'prettier/prettier': ["error", {
      'printWidth': 80,
      'tabWidth': 2,
      'singleQuote': true,
      'trailingComma': 'none',
      'arrowParens': 'avoid',
      'semi': false,
      'endOfLine': 'auto',
    }],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'spaced-comment': ['error', 'always'],
    'template-tag-spacing': 'error',
    'prettier/prettier': 'error',
    'react/jsx-sort-props': ['off'],
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'off',
    'react/prop-types': 'error',
    'react/require-render-return': 'error',
    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'natural',
        'always-on-top': [
          'key',
          'ref',
          'as',
          'id',
          'name',
          'css',
          'className',
          'style',
          'width',
          'height'
        ],
        shorthand: 'last',
        callback: 'last'
      }
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
      }
    ],
    'unicorn/prevent-abbreviations': [0, { ignore: ['/.*/ig'] }],
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-object-from-entries': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/no-thenable': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/text-encoding-identifier-case': 'off',
    'unicorn/filename-case': 'off',
    'sonarjs/no-duplicate-string': 'off'
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}
