// Plugins
import esLintPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import unicorn from 'eslint-plugin-unicorn';
import promise from 'eslint-plugin-promise';
import jsdoc from 'eslint-plugin-jsdoc';
import markdown from 'eslint-plugin-markdown';

export default [
  {
    ignores: ['eslint.config.js', ''],
  },
  esLintPlugin.configs.recommended,
  jsdoc.configs.recommended,
  prettier.configs.recommended,
  unicorn.configs.recommended,
  promise.configs.recommended,
  markdown.configs.recommended,
];
