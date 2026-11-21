import { createContext, useContext } from 'react';

// What the shells need from the household session: the active tab, how to move between tabs and
// pages, and the two things the monogram opens. App provides it from the session reducer.
export const NavigationContext = createContext({
  tab: 'today',
  openTab() {},
  back() {},
  openSettings() {},
  openSwitcher() {},
  parentInitial: '',
});

export function useNavigation() {
  return useContext(NavigationContext);
}
