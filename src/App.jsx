import { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef } from 'react';
import TodayTab from './components/Today/TodayTab.jsx';
import { SessionContext } from './demo/SessionContext.js';
import TabListShell from './components/Layout/TabListShell.jsx';
import PageShell from './components/Layout/PageShell.jsx';
import CoachTab from './components/Coach/CoachTab.jsx';
import PageFade from './components/Layout/PageFade.jsx';
import GamePlanTab from './components/GamePlan/GamePlanTab.jsx';
import ItemPage from './components/GamePlan/ItemPage.jsx';
import AskForHelp from './components/GamePlan/AskForHelp.jsx';
import TeamTab from './components/Team/TeamTab.jsx';
import PersonPage from './components/Team/PersonPage.jsx';
import ChatPage from './components/Team/ChatPage.jsx';
import GroupPage from './components/Team/GroupPage.jsx';
import MembersPage from './components/Team/MembersPage.jsx';
import { AddSomeone, Composer, NewGroup } from './components/Team/Composers.jsx';
import KidsTab from './components/Kids/KidsTab.jsx';
import ChildPage from './components/Kids/ChildPage.jsx';
import SchoolCard from './components/Kids/SchoolCard.jsx';
import AddSchool from './components/Kids/AddSchool.jsx';
import ArticleView from './components/Recommends/ArticleView.jsx';
import RequestDraft from './components/Requests/RequestDraft.jsx';
import RecipientView from './components/Requests/RecipientView.jsx';
import SettingsPage from './components/Settings/SettingsPage.jsx';
import StillShell from './components/Layout/StillShell.jsx';
import Onboarding from './components/Onboarding/Onboarding.jsx';
import { NavigationContext } from './components/Layout/navigation.js';
import HouseholdSwitcher from './components/Demo/HouseholdSwitcher.jsx';
import Arrival from './components/shared/Arrival.jsx';
import { PhoneFrameView, useIsDesktop } from './components/Demo/PhoneFrame.jsx';
import { householdById } from './demo/households.js';
import { teamView } from './demo/tabs.js';
import { initialSession, sessionReducer } from './demo/session.js';
import { settings, tabs } from './copy/navigation.js';

// Root: the household session, tab routing, the pages opened inside a tab, the recipient's side
// through View as, and the presenter's controls.
const PHONE_FRAME_MESSAGE = 'mvp-phone-frame';

// A page opened inside a tab, by its kind (spec §2): each has Back and returns to where she was.
function Page({ page }) {
  switch (page.kind) {
    case 'settings': return <SettingsPage />;
    case 'item': return <ItemPage itemId={page.id} />;
    case 'ask-for-help': return <AskForHelp itemId={page.id} />;
    case 'person': return <PersonPage personId={page.id} />;
    case 'chat': return <ChatPage chatId={page.id} />;
    case 'group': return <GroupPage groupId={page.id} />;
    case 'members': return <MembersPage groupId={page.id} />;
    case 'compose': return <Composer target={page.id} />;
    case 'add-someone': return <AddSomeone />;
    case 'new-group': return <NewGroup />;
    case 'child': return <ChildPage childId={page.id} />;
    case 'school': return <SchoolCard schoolId={page.id} />;
    case 'add-school': return <AddSchool />;
    case 'article': return <ArticleView articleId={page.id} />;
    case 'draft': return <RequestDraft requestId={page.id} />;
    default: return <PageShell title={settings} />;
  }
}

function Screen({ session }) {
  if (session.onboarding) return <Onboarding />;
  if (session.still) return <StillShell />;
  const page = session.stack.at(-1);
  if (page) return <Page page={page} />;
  if (session.viewAs) return <RecipientView personId={session.viewAs} />;
  const title = tabs.find((item) => item.id === session.tab)?.label;
  if (session.tab === 'today') return <TodayTab />;
  if (session.tab === 'coach') return <CoachTab />;
  if (session.tab === 'game-plan') return <GamePlanTab />;
  if (session.tab === 'team') return <TeamTab />;
  if (session.tab === 'kids') return <KidsTab />;
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

  // Anything unread on Team puts a dot on its tab (spec §10).
  const teamUnread = useMemo(() => {
    if (session.onboarding || session.viewAs) return 0;
    return teamView({ seed: household.seed, momentId: session.momentId, played: session.played, seen: session.team?.seen ?? [] }).unread;
  }, [household.seed, session.momentId, session.played, session.team, session.onboarding, session.viewAs]);
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
    teamUnread,
  }), [session.tab, session.stack.length, page, viewer, teamUnread]);

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
      {!session.viewAs && !session.onboarding && <Arrival arrival={session.arrival} dispatch={dispatch} />}
      {session.switcherOpen && (
        <HouseholdSwitcher session={session} dispatch={dispatch} household={household} embedded={embedded} onPhoneFrame={setPhoneFrame} />
      )}
    </NavigationContext.Provider>
    </SessionContext.Provider>
  );
}
