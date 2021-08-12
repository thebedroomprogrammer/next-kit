// eslint-disable-next-line
module.exports = {
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    strict: ['error', 'never'],
  },
  overrides: [
    {
      files: 'src/**/*.+(ts|tsx|js)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    },
  ],
}
