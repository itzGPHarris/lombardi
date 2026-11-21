import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  { ignores: ['node_modules/**', 'dist/**', 'coverage/**', '.netlify/**', 'archive/**'] },
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: { globals: globals.browser },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      // Rule 2 in AGENTS.md: the prototype runs on the demo calendar and never reads the device clock.
      'no-restricted-syntax': ['error',
        { selector: "CallExpression[callee.object.name='Date'][callee.property.name='now']", message: 'Use the demo calendar (src/demo/calendar.js). The device clock is never read.' },
        { selector: "NewExpression[callee.name='Date'][arguments.length=0]", message: 'Use the demo calendar (src/demo/calendar.js). The device clock is never read.' },
        { selector: "CallExpression[callee.name='Date']", message: 'Use the demo calendar (src/demo/calendar.js). The device clock is never read.' },
      ],
      // Spec §17: every icon is drawn through the one Icon component, and MUI's icons are never used.
      'no-restricted-imports': ['error', { patterns: [
        { group: ['@material-symbols/*', 'lucide-react', '*.svg?react'], message: 'Draw icons through components/shared/Icon.jsx by their Figma name.' },
        { group: ['@mui/*'], message: 'MUI is not used (spec §17).' },
      ] }],
    },
  },
  {
    files: ['src/components/shared/Icon.jsx'],
    rules: { 'no-restricted-imports': ['error', { patterns: [{ group: ['@mui/*'], message: 'MUI is not used (spec §17).' }] }] },
  },
  {
    files: ['*.{js,mjs,cjs}', 'scripts/**/*.{js,mjs}', 'tests/**/*.{js,jsx}', 'netlify/functions/**/*.{js,mjs}'],
    languageOptions: { globals: globals.node },
  },
];
