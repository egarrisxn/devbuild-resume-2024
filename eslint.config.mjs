import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'react/no-find-dom-node': 'off'
      // 'react/no-unescaped-entities': 'off'
    }
  }),
  {
    ignores: ['**/node_modules/', '.git/', '.vscode/', '.next/', 'public/']
  }
];

export default eslintConfig;
