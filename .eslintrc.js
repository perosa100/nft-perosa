module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended'
  ],
  globals: {
    JSX: true,
    React: true
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'unused-imports',
    'sort-keys-fix'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    //#region  //*=========== Unused Import ===========
    '@typescript-eslint/no-unused-vars': 'off',

    'no-console': 'warn',

    'no-unused-vars': 'off',

    'react/display-name': 'off',

    'react/jsx-curly-brace-presence': [
      'warn',
      {
        children: 'never',
        props: 'never'
      }
    ],

    //#endregion  //*======== Unused Import ===========
    //#region  //*=========== Import Sort ===========
    'simple-import-sort/exports': 'warn',

    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // ext library & side effect imports
          ['^@?\\w', '^\\u0000'], // {s}css files
          ['^.+\\.s?css$'], // Lib and hooks
          ['^@/lib', '^@/hooks'], // static data
          ['^@/data'], // components
          ['^@/components', '^@/container'], // zustand store
          ['^@/store'], // Other imports
          ['^@/'], // relative paths up until 3 level
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)'
          ],
          ['^@/types'], // other that didnt fit in
          ['^']
        ]
      }
    ],

    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: false }
    ],

    'sort-keys-fix/sort-keys-fix': 'warn',

    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_'
      }
    ] //#endregion  //*======== Import Sort ===========
  }
}
