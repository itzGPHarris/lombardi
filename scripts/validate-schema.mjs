// Validates the JSON Schema vocabulary used by this slice. Not a general-purpose
// validator: expanding the schemas requires adding and testing any new keyword.
export function validateSchema(value, schema, root = schema, path = '$') {
  if (schema.$ref) {
    if (!schema.$ref.startsWith('#/$defs/')) throw new Error('Only local definitions are supported');
    return validateSchema(value, root.$defs[schema.$ref.slice(8)], root, path);
  }
  const supported = ['$schema', '$defs', 'title', 'description', 'type', 'required', 'properties', 'items', 'enum', 'const', 'pattern', 'minLength', 'minItems'];
  for (const key of Object.keys(schema)) if (!supported.includes(key)) throw new Error(`Unsupported schema keyword ${key}`);
  const errors = [];
  const actual = value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value;
  if (schema.type) {
    const types = [].concat(schema.type);
    if (!types.some(type => type === actual || type === 'integer' && Number.isInteger(value))) return [`${path}: expected ${types.join('|')}`];
  }
  if ('const' in schema && value !== schema.const) errors.push(`${path}: unexpected constant`);
  if (schema.enum && !schema.enum.includes(value)) errors.push(`${path}: unknown enum value`);
  if (typeof value === 'string') {
    if (schema.minLength && value.length < schema.minLength) errors.push(`${path}: empty string`);
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) errors.push(`${path}: invalid format`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems && value.length < schema.minItems) errors.push(`${path}: too few items`);
    if (schema.items) value.forEach((entry, index) => errors.push(...validateSchema(entry, schema.items, root, `${path}[${index}]`)));
  } else if (value && typeof value === 'object') {
    for (const key of schema.required || []) if (!(key in value)) errors.push(`${path}.${key}: required`);
    for (const [key, child] of Object.entries(schema.properties || {})) if (key in value) errors.push(...validateSchema(value[key], child, root, `${path}.${key}`));
  }
  return errors;
}
