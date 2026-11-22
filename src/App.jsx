import { useCallback, useEffect, useMemo, useReducer } from 'react';
import TodayShell from './components/Layout/TodayShell.jsx';
import TodayTab from './components/Today/TodayTab.jsx';
import { SessionContext } from './demo/SessionContext.js';
import TabListShell from './components/Layout/TabListShell.jsx';
import PageShell from './components/Layout/PageShell.jsx';
import ConversationShell from './components/Layout/ConversationShell.jsx';
import StillShell from './components/Layout/StillShell.jsx';
import Onboarding from './components/Onboarding/Onboarding.jsx';
import { NavigationContext } from './components/Layout/navigation.js';
import HouseholdSwitcher from './components/Demo/HouseholdSwitcher.jsx';
import { PhoneFrameView, useIsDesktop } from './components/Demo/PhoneFrame.jsx';
import { householdById } from './demo/households.js';
import { initialSession, sessionReducer } from './demo/session.js';
import { settings, tabs } from './copy/navigation.js';

// Root: the household session, tab routing and the presenter's controls. Today is built (Stage 3);
// every other place in the app is still its empty shell. View as keeps its empty Today until Stage 6.
const PHONE_FRAME_MESSAGE = 'mvp-phone-frame';

function Screen({ session }) {
  if (session.onboarding) return <Onboarding />;
  if (session.still) return <StillShell />;
  if (session.stack.at(-1) === 'settings') return <PageShell title={settings} />;
  if (session.viewAs) return <TodayShell />;
  const title = tabs.find((item) => item.id === session.tab)?.label;
  if (session.tab === 'today') return <TodayTab />;
  if (session.tab === 'coach') return <ConversationShell title={title} isTab />;
  return <TabListShell title={title} wide={session.tab === 'game-plan'} />;
}

export default function App({ start = {}, embedded = false }) {
  const [session, dispatch] = useReducer(sessionReducer, start, initialSession);
  const household = householdById(session.householdId);
  const isDesktop = useIsDesktop();
  const page = session.stack.at(-1);

  // Switching households or moments leaves no scroll position behind (spec §15).
  const onboardingScreen = session.onboarding?.screen;
  useEffect(() => { window.scrollTo(0, 0); }, [session.householdId, session.momentId, session.viewAs, session.tab, page, onboardingScreen]);

  // The phone frame's iframe asks this page to turn the frame off, carrying its current moment.
  useEffect(() => {
    if (embedded) return undefined;
    const onMessage = (event) => {
      if (event.origin !== window.location.origin || event.data?.type !== PHONE_FRAME_MESSAGE) return;
      dispatch({ type: 'JUMP', momentId: event.data.momentId });
      dispatch({ type: 'SET_PHONE_FRAME', on: false });
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [embedded]);

  const setPhoneFrame = useCallback((on) => {
    if (embedded && !on) window.parent.postMessage({ type: PHONE_FRAME_MESSAGE, momentId: session.momentId }, window.location.origin);
    else dispatch({ type: 'SET_PHONE_FRAME', on });
  }, [embedded, session.momentId]);

  const viewer = session.viewAs ? household.viewAs.find((person) => person.id === session.viewAs)?.label : household.parent;
  const navigation = useMemo(() => ({
    tab: page === 'settings' ? 'settings' : session.tab,
    openTab: (tab) => dispatch({ type: 'OPEN_TAB', tab }),
    back: () => dispatch({ type: 'POP' }),
    openSettings: () => { if (page !== 'settings') dispatch({ type: 'PUSH', page: 'settings' }); },
    openSwitcher: () => dispatch({ type: 'OPEN_SWITCHER' }),
    parentInitial: viewer?.[0] ?? '',
  }), [session.tab, page, viewer]);

  const sessionValue = useMemo(() => ({ session, dispatch, household }), [session, household]);

  // Development only, never in a build: lets the evidence recordings play a step in place.
  useEffect(() => {
    if (!import.meta.env.DEV) return undefined;
    window.mvpDevPlay = (played, at) => dispatch({ type: 'DEV_PLAY', played, at });
    return () => { delete window.mvpDevPlay; };
  }, []);

  if (session.phoneFrame && isDesktop && !embedded) {
    return <PhoneFrameView householdId={session.householdId} momentId={session.momentId} />;
  }

  return (
    <SessionContext.Provider value={sessionValue}>
    <NavigationContext.Provider value={navigation}>
      <Screen key={`${session.householdId}:${session.momentId}:${session.viewAs}:${session.visit}`} session={session} />
      {session.switcherOpen && (
        <HouseholdSwitcher session={session} dispatch={dispatch} household={household} embedded={embedded} onPhoneFrame={setPhoneFrame} />
      )}
    </NavigationContext.Provider>
    </SessionContext.Provider>
  );
}
