'use strict';

module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    // for loops should not be restricted
    'no-restricted-syntax': ['off'],
    // this is a NodeJS app
    'no-console': ['off'],
    // we're using mongoose
    'func-names': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: './src',
      },
    },
  },
};
