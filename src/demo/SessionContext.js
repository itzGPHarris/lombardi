import { createContext, useContext } from 'react';

// The household session and its dispatch, for screens that read the seed and change what she has
// done in the moment, such as Today (spec §17: one reducer per household session).
export const SessionContext = createContext(null);

export function useSession() {
  const value = useContext(SessionContext);
  if (!value) throw new Error('useSession needs the SessionContext that App provides.');
  return value;
}
