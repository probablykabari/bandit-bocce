
const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

/** @type {import('eslint').Linter.Config} */
const config = {
  // parserOptions: {
  //   project
  // },
  extends: ['universe/native', 'plugin:react-hooks/recommended'],
  plugins: ['react-hooks'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '_$', argsIgnorePattern: '^_' }]
  },
  settings: {
    // 'import/resolver': {
    //   typescript: {
    //     project
    //   }
    // }
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  overrides: [
    {
      // Enable eslint-plugin-testing-library rules or preset only for matching testing files!
      files: ['**/__tests__/**/*.test.[jt]s?(x)'],
      plugins: ['jest'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended']
    }
  ]
}

module.exports = config
