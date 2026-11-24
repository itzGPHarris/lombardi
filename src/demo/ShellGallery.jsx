import { useEffect, useState } from 'react';
import TodayShell from '../components/Layout/TodayShell.jsx';
import TabListShell from '../components/Layout/TabListShell.jsx';
import PageShell from '../components/Layout/PageShell.jsx';
import ConversationShell from '../components/Layout/ConversationShell.jsx';
import ComposerShell from '../components/Layout/ComposerShell.jsx';
import OnboardingShell from '../components/Layout/OnboardingShell.jsx';
import StillShell from '../components/Layout/StillShell.jsx';
import Sheet from '../components/shared/Sheet.jsx';
import { NavigationContext } from '../components/Layout/navigation.js';
import { tabs, settings } from '../copy/navigation.js';
import styles from './ShellGallery.module.css';

// Development only, never in a build: each layout shell drawn empty, with token-colored blocks in
// place of content and no invented words, so the shells can be compared with their reference boards.
// Open /?shell=<type>, and add &scrolled=1 to see the scrolled state with the small title in the bar.
export const shellTypes = ['today', 'tab-list', 'page', 'conversation', 'composer', 'onboarding', 'sheet', 'still'];

function Blocks({ count, kind = 'row' }) {
  return Array.from({ length: count }, (_, index) => <div key={index} className={styles[kind]} />);
}

const tabFor = { today: 'today', 'tab-list': 'team', page: 'team', conversation: 'coach', composer: 'team', sheet: 'today' };

export default function ShellGallery({ type, scrolled, parentInitial }) {
  const [tab, setTab] = useState(tabFor[type] ?? 'today');
  const [sheetOpen, setSheetOpen] = useState(true);
  useEffect(() => {
    if (!scrolled) return undefined;
    const frame = requestAnimationFrame(() => window.scrollTo(0, document.documentElement.scrollHeight));
    return () => cancelAnimationFrame(frame);
  }, [scrolled]);
  const label = (id) => tabs.find((item) => item.id === id).label;
  const navigation = { tab, openTab: setTab, back() {}, openSettings() {}, openSwitcher() {}, parentInitial };
  const today = (
    <TodayShell
      dateline={<div className={styles.dateline} />}
      now={<><div className={styles.pass} /><Blocks count={4} /></>}
      sheet={<Blocks count={8} kind="card" />}
      capture={<div className={styles.capture} />}
    />
  );
  const screens = {
    today,
    'tab-list': <TabListShell title={label('team')} actions={<div className={styles.action} />}><Blocks count={14} /></TabListShell>,
    page: <PageShell title={settings}><Blocks count={14} /></PageShell>,
    conversation: <ConversationShell title={label('coach')} isTab field={<div className={styles.capture} />}><Blocks count={10} kind="message" /></ConversationShell>,
    composer: <ComposerShell heading={<span className={styles.heading} />} primary={<div className={styles.button} />}><Blocks count={3} /><div className={styles.field} /></ComposerShell>,
    onboarding: <OnboardingShell onBack={() => {}} primary={<div className={styles.button} />} skip={<div className={styles.link} />}><div className={styles.headline} /><Blocks count={4} /></OnboardingShell>,
    sheet: <>{today}<Sheet open={sheetOpen} onClose={() => setSheetOpen(false)} footer={<div className={styles.button} />}><Blocks count={2} /></Sheet></>,
    still: <StillShell><div className={styles.stillMark} /></StillShell>,
  };
  return <NavigationContext.Provider value={navigation}>{screens[type] ?? screens.today}</NavigationContext.Provider>;
}
