/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  // ignorePatterns: ['*.css'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'ignore',
        asyncArrow: 'always',
      },
    ],
    // '@typescript-eslint/consistent-type-definitions': 'warn',
    'comma-dangle': ['off'],
    semi: ['off'],
    '@typescript-eslint/semi': 'off',
  },
};
