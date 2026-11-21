import { createContext, useContext, useReducer } from 'react';
import { createSession, sessionReducer } from './session';
const SessionContext = createContext(null);
export function SessionProvider({ children }) {
  const [state, dispatch] = useReducer(sessionReducer, undefined, () => createSession());
  return <SessionContext.Provider value={{ state, dispatch }}>{children}</SessionContext.Provider>;
}
export function useHousehold() { return useContext(SessionContext); }
