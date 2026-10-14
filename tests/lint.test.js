import { expect, it } from 'vitest';
import { ESLint } from 'eslint';

it('accepts JSX component references and rejects undefined JSX components', async () => {
  const lint = new ESLint();
  const [valid] = await lint.lintText('function Card() { return <div />; } export default function App() { return <Card />; }', { filePath: 'src/LintProbe.jsx' });
  expect(valid.errorCount).toBe(0);
  const [invalid] = await lint.lintText('export default function App() { return <Missing />; }', { filePath: 'src/LintProbe.jsx' });
  expect(invalid.messages.some((message) => message.ruleId === 'no-undef')).toBe(true);
});

it('rejects conditional hooks', async () => {
  const [result] = await new ESLint().lintText('import { useState } from "react"; export default function App({ active }) { if (active) { useState(0); } return null; }', { filePath: 'src/LintProbe.jsx' });
  expect(result.messages.some((message) => message.ruleId === 'react-hooks/rules-of-hooks')).toBe(true);
});
