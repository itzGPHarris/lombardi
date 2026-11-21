import charlotte from '../data/households/charlotte.json';

// The households that are built. Charlotte and Edward's is the only one written at the current
// fixtures version. Names come from fixtures section 3, "The household", and the recipients View as
// offers from spec §15.
export const households = [
  {
    id: 'charlotte',
    label: 'Charlotte and Edward',
    parent: 'Charlotte',
    seed: charlotte,
    viewAs: [
      { id: 'edward', label: 'Edward' },
      { id: 'min-jung', label: 'Min-jung' },
      { id: 'ms-reyes', label: 'Ms. Reyes' },
    ],
  },
];

export function householdById(id) {
  return households.find((household) => household.id === id) ?? households[0];
}
