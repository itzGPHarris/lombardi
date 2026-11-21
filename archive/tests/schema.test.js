import { expect, it } from 'vitest';
import { validateSchema } from '../scripts/validate-schema.mjs';
import household from '../src/data/households/charlotte.json';
import article from '../src/data/articles/teacher-conference.json';
import householdSchema from '../src/data/schema/household.schema.json';
import articleSchema from '../src/data/schema/article.schema.json';
it('validates the seed and article against their schemas', () => {
  expect(validateSchema(household,householdSchema)).toEqual([]);
  expect(validateSchema(article,articleSchema)).toEqual([]);
});
it('rejects invalid demo times, missing state and unknown statuses', () => {
  const broken=structuredClone(household);
  broken.moments[0].time.time='25:99';
  delete broken.moments[0].state.departures;
  broken.moments[0].state.planItems[0].status='Settled';
  const errors=validateSchema(broken,householdSchema);
  expect(errors).toHaveLength(3);
  expect(errors.join(' ')).toContain('invalid format');
  expect(errors.join(' ')).toContain('departures: required');
  expect(errors.join(' ')).toContain('unknown enum');
});
it('rejects an incomplete article and unsupported schema vocabulary', () => {
  expect(validateSchema({...article,body:[]},articleSchema)).toHaveLength(1);
  expect(()=>validateSchema({}, {unexpected:true})).toThrow('Unsupported schema keyword');
});
