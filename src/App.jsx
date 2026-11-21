import { useMemo, useReducer } from 'react';
import TodayShell from './components/Layout/TodayShell.jsx';
import TabListShell from './components/Layout/TabListShell.jsx';
import PageShell from './components/Layout/PageShell.jsx';
import ConversationShell from './components/Layout/ConversationShell.jsx';
import { NavigationContext } from './components/Layout/navigation.js';
import { tabs, settings } from './copy/navigation.js';

// Root: tab routing. Stage 1 draws no screen content, so each tab is its empty shell.
function navigate(state, action) {
  switch (action.type) {
    case 'OPEN_TAB': return { tab: action.tab, stack: [] };
    case 'PUSH': return { ...state, stack: [...state.stack, action.page] };
    case 'POP': return { ...state, stack: state.stack.slice(0, -1) };
    default: return state;
  }
}

function TabScreen({ tab }) {
  const title = tabs.find((item) => item.id === tab)?.label;
  if (tab === 'today') return <TodayShell />;
  if (tab === 'coach') return <ConversationShell title={title} isTab />;
  return <TabListShell title={title} wide={tab === 'game-plan'} />;
}

export default function App() {
  const [state, dispatch] = useReducer(navigate, { tab: 'today', stack: [] });
  const page = state.stack.at(-1);
  const navigation = useMemo(() => ({
    tab: page === 'settings' ? 'settings' : state.tab,
    openTab: (tab) => { dispatch({ type: 'OPEN_TAB', tab }); window.scrollTo(0, 0); },
    back: () => dispatch({ type: 'POP' }),
    openSettings: () => { if (page !== 'settings') dispatch({ type: 'PUSH', page: 'settings' }); window.scrollTo(0, 0); },
    openSwitcher() {},
    parentInitial: 'C',
  }), [state.tab, page]);
  return (
    <NavigationContext.Provider value={navigation}>
      {page === 'settings' ? <PageShell title={settings} /> : <TabScreen tab={state.tab} />}
    </NavigationContext.Provider>
  );
}
