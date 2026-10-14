import GamePlan from './icons/game-plan.svg?react';
import KidsHeights from './icons/kids-heights.svg?react';
import UpdateCalendar from './icons/update-calendar.svg?react';
import Morning from '@material-symbols/svg-400/outlined/wb_twilight.svg?react';
import Afternoon from '@material-symbols/svg-400/outlined/light_mode.svg?react';
import Tonight from '@material-symbols/svg-400/outlined/dark_mode.svg?react';
import Calendar from '@material-symbols/svg-400/outlined/calendar_today.svg?react';
import Back from '@material-symbols/svg-400/outlined/arrow_back.svg?react';
import Add from '@material-symbols/svg-400/outlined/add.svg?react';
import Settings from '@material-symbols/svg-400/outlined/settings.svg?react';
import Check from '@material-symbols/svg-400/outlined/check.svg?react';
import { Bell, Calendar1, CircleHelp, Clock3, CircleCheck, CircleX, Diamond, Navigation, TriangleAlert, Users, Whistle } from 'lucide-react';
import styles from './shared.module.css';
// Tab icons follow the library Tab Bar: Lucide for Today, Coach and Team, custom drawings for Game plan and Kids.
const icons = { today: Calendar1, coach: Whistle, 'game-plan': GamePlan, team: Users, kids: KidsHeights, 'kids-heights': KidsHeights,
  reminder: Bell, directions: Navigation, 'update-calendar': UpdateCalendar,
  'phase-morning': Morning, 'phase-afternoon': Afternoon, 'phase-tonight': Tonight,
  'calendar-mark': Calendar, back: Back, add: Add, settings: Settings, check: Check,
  unowned: CircleHelp, Asked: Clock3, Accepted: CircleCheck, Declined: CircleX,
  Proposed: Diamond, Changed: Diamond, Conflict: TriangleAlert };
export default function Icon({ name, label }) {
  const Glyph = icons[name];
  if (!Glyph) throw new Error(`Unknown icon: ${name}`);
  return <span className={styles.icon} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}><Glyph focusable="false" /></span>;
}
