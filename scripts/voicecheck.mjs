import { readdir, readFile } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'espree';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const contentRoots = ['src/data/households', 'src/data/articles', 'src/copy'];
const technicalKeys = /^(id|.*Id|.*Ids|from|role|kind|type|source|article|result|provider|fixturesVersion)$/i;
const months = /\b(?:jan(?:uary)?|feb(?:ruary)?|apr(?:il)?|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b/i;
// Lowercase modal "may" and the verb "march" are not month references.
const ambiguousMonths = /\b(?:May|March|MAY|MARCH)\b|\b(?:may|march)\s+\d|\d\s+(?:may|march)\b/;
const dates = /\b\d{4}-\d{1,2}-\d{1,2}\b|\b\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?\b|\b\d{1,2}\.\d{1,2}\.\d{2,4}\b/;
const years = /\b[12]\d{3}\b/;
const plannerWords = /\b(?:windows?|slots?|blocks?|buffers?|lanes?)\b/i;
const openers = /(?:^|[.!?]\s+|[·:]\s*)[\s"'“‘]*(?:okay|alright)\b/i;

export function inspectContent(value, { file = 'content.json', article = false } = {}) {
  const errors = [];
  let strings = 0;
  function visit(item, path, scope = 'plain', key = '') {
    if (Array.isArray(item)) {
      item.forEach((entry, index) => visit(entry, `${path}[${index}]`, scope, key));
      return;
    }
    if (item && typeof item === 'object') {
      const speaker = String(item.from ?? item.From ?? item.role ?? '').toLowerCase();
      if (speaker === 'coach' || speaker === 'assistant') scope = 'coach';
      else if (speaker === 'parent' || speaker === 'user') scope = 'plain';
      for (const [childKey, entry] of Object.entries(item)) {
        let childScope = scope;
        if (/^coach/i.test(childKey)) childScope = 'coach';
        if (/^(requests|drafts|draft)$/i.test(childKey)) childScope = 'draft';
        visit(entry, `${path}.${childKey}`, childScope, childKey);
      }
      return;
    }
    if (typeof item !== 'string' && typeof item !== 'number') return;
    const text = String(item);
    if (typeof item === 'string') strings++;
    const report = (rule) => errors.push({ file, path, rule, text });
    if (months.test(text) || ambiguousMonths.test(text)) report('month-name');
    if (dates.test(text)) report('calendar-date');
    if (years.test(text)) report('calendar-year');
    if (technicalKeys.test(key)) return;
    if ((article || scope === 'coach' || scope === 'draft') && text.includes('—')) report('em-dash');
    if (scope === 'coach') {
      if (openers.test(text)) report('coach-opener');
      if (plannerWords.test(text)) report('coach-planner-word');
    }
  }
  visit(value, '$');
  return { errors, strings };
}

// Static content modules are parsed, never imported or executed. Reject computed
// content so a function or interpolation cannot silently escape the checks.
function literalValue(node) {
  if (node.type === 'Literal') return node.value;
  if (node.type === 'TemplateLiteral' && node.expressions.length === 0) return node.quasis[0].value.cooked;
  if (node.type === 'UnaryExpression' && node.operator === '-' && typeof node.argument.value === 'number') return -node.argument.value;
  if (node.type === 'ArrayExpression') return node.elements.map((entry) => {
    if (!entry) throw new Error('Sparse content arrays are not supported.');
    return literalValue(entry);
  });
  if (node.type === 'ObjectExpression') {
    return Object.fromEntries(node.properties.map((property) => {
      if (property.type !== 'Property' || property.computed || property.method || property.kind !== 'init') {
        throw new Error('Content must use literal object properties.');
      }
      return [property.key.name ?? property.key.value, literalValue(property.value)];
    }));
  }
  throw new Error(`Content must be static JSON or literal exports; found ${node.type}.`);
}

export function parseContent(source, extension) {
  if (extension === '.json') return JSON.parse(source);
  if (extension === '.md' || extension === '.txt') return source;
  if (!['.js', '.mjs'].includes(extension)) throw new Error(`Unsupported content format ${extension}. Use JSON or static JS exports.`);
  const ast = parse(source, { ecmaVersion: 'latest', sourceType: 'module' });
  const values = {};
  for (const node of ast.body) {
    if (node.type === 'ExportDefaultDeclaration') values.default = literalValue(node.declaration);
    else if (node.type === 'ExportNamedDeclaration' && node.declaration?.type === 'VariableDeclaration') {
      for (const declaration of node.declaration.declarations) {
        if (declaration.id.type !== 'Identifier' || !declaration.init) throw new Error('Use initialized, named content exports.');
        values[declaration.id.name] = literalValue(declaration.init);
      }
    } else throw new Error('Content modules may only contain literal exports. Keep application logic outside content folders.');
  }
  return values;
}

async function filesIn(directory) {
  let entries;
  try { entries = await readdir(directory, { withFileTypes: true }); }
  catch (error) { if (error.code === 'ENOENT') return []; throw error; }
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name.startsWith('.')) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesIn(path));
    else files.push(path);
  }
  return files;
}

export async function checkProject(root = projectRoot) {
  const errors = [];
  let files = 0;
  let strings = 0;
  const empty = [];
  for (const directory of contentRoots) {
    const paths = await filesIn(join(root, directory));
    let directoryStrings = 0;
    for (const path of paths) {
      const file = relative(root, path);
      files++;
      try {
        const value = parseContent(await readFile(path, 'utf8'), extname(path));
        const result = inspectContent(value, { file, article: directory.endsWith('/articles') });
        directoryStrings += result.strings;
        strings += result.strings;
        errors.push(...result.errors);
      } catch (error) { errors.push({ file, path: '$', rule: 'invalid-content', text: error.message }); }
    }
    if (directoryStrings === 0) empty.push(directory);
  }
  return { errors, files, strings, empty };
}

export async function main(args = process.argv.slice(2), root = projectRoot) {
  if (args.some((arg) => arg !== '--require-content')) {
    console.error('Usage: npm run voicecheck -- [--require-content]');
    return 1;
  }
  const result = await checkProject(root);
  for (const error of result.errors) console.error(`${error.file}:${error.path} [${error.rule}] ${error.text}`);
  for (const directory of result.empty) console.warn(`NOT VALIDATED: ${directory} has no content strings yet.`);
  console.log(`Voicecheck: ${result.files} files, ${result.strings} strings, ${result.errors.length} violations.`);
  return result.errors.length || (args.includes('--require-content') && result.empty.length) ? 1 : 0;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exitCode = await main();
}
