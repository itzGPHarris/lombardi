import { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef } from 'react';
import TodayShell from './components/Layout/TodayShell.jsx';
import TodayTab from './components/Today/TodayTab.jsx';
import { SessionContext } from './demo/SessionContext.js';
import TabListShell from './components/Layout/TabListShell.jsx';
import PageShell from './components/Layout/PageShell.jsx';
import CoachTab from './components/Coach/CoachTab.jsx';
import PageFade from './components/Layout/PageFade.jsx';
import StillShell from './components/Layout/StillShell.jsx';
import Onboarding from './components/Onboarding/Onboarding.jsx';
import { NavigationContext } from './components/Layout/navigation.js';
import HouseholdSwitcher from './components/Demo/HouseholdSwitcher.jsx';
import { PhoneFrameView, useIsDesktop } from './components/Demo/PhoneFrame.jsx';
import { householdById } from './demo/households.js';
import { initialSession, sessionReducer } from './demo/session.js';
import { settings, tabs } from './copy/navigation.js';

// Root: the household session, tab routing, the pages opened inside a tab, and the presenter's
// controls. View as keeps its empty Today until Stage 6.
const PHONE_FRAME_MESSAGE = 'mvp-phone-frame';

// A page opened inside a tab, by its kind (spec §2): each has Back and returns to where she was.
function Page({ page }) {
  switch (page.kind) {
    case 'settings': return <PageShell title={settings} />;
    default: return <PageShell title="" />;
  }
}

function Screen({ session }) {
  if (session.onboarding) return <Onboarding />;
  if (session.still) return <StillShell />;
  const page = session.stack.at(-1);
  if (page) return <Page page={page} />;
  if (session.viewAs) return <TodayShell />;
  const title = tabs.find((item) => item.id === session.tab)?.label;
  if (session.tab === 'today') return <TodayTab />;
  if (session.tab === 'coach') return <CoachTab />;
  return <TabListShell title={title} wide={session.tab === 'game-plan'} />;
}

// Where she was on the screen beneath a page, so Back returns her there (spec §2, "the page scrolls").
function useScrollMemory(stack, memory) {
  const depth = useRef(stack.length);
  useLayoutEffect(() => {
    const popped = stack.length < depth.current;
    depth.current = stack.length;
    if (popped) {
      window.scrollTo(0, memory.current[stack.length] ?? 0);
    } else if (stack.length > 0) window.scrollTo(0, 0);
  }, [stack, memory]);
}

export default function App({ start = {}, embedded = false }) {
  const [session, dispatch] = useReducer(sessionReducer, start, initialSession);
  const household = householdById(session.householdId);
  const isDesktop = useIsDesktop();
  const page = session.stack.at(-1);

  // Switching households or moments leaves no scroll position behind (spec §15).
  const onboardingScreen = session.onboarding?.screen;
  useEffect(() => { window.scrollTo(0, 0); }, [session.householdId, session.momentId, session.viewAs, session.tab, onboardingScreen]);
  const scrollMemory = useRef([]);
  useScrollMemory(session.stack, scrollMemory);

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
    tab: page?.kind === 'settings' ? 'settings' : session.tab,
    openTab: (tab) => dispatch({ type: 'OPEN_TAB', tab }),
    back: () => dispatch({ type: 'POP' }),
    openPage: (kind, id = null) => {
      scrollMemory.current[session.stack.length] = window.scrollY;
      dispatch({ type: 'PUSH', page: { kind, id } });
    },
    openSettings: () => { if (page?.kind !== 'settings') dispatch({ type: 'PUSH', page: { kind: 'settings', id: null } }); },
    openSwitcher: () => dispatch({ type: 'OPEN_SWITCHER' }),
    parentInitial: viewer?.[0] ?? '',
  }), [session.tab, session.stack.length, page, viewer]);

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
      <PageFade pageKey={session.pageMoves ?? 0}>
        <Screen key={`${session.householdId}:${session.momentId}:${session.viewAs}:${session.visit}`} session={session} />
      </PageFade>
      {session.switcherOpen && (
        <HouseholdSwitcher session={session} dispatch={dispatch} household={household} embedded={embedded} onPhoneFrame={setPhoneFrame} />
      )}
    </NavigationContext.Provider>
    </SessionContext.Provider>
  );
}
