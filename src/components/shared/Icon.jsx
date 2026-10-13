import KidsHeights from './icons/kids-heights.svg?react';
import Morning from '@material-symbols/svg-400/outlined/wb_twilight.svg?react';
import Afternoon from '@material-symbols/svg-400/outlined/light_mode.svg?react';
import Tonight from '@material-symbols/svg-400/outlined/dark_mode.svg?react';
import Calendar from '@material-symbols/svg-400/outlined/calendar_today.svg?react';
import Back from '@material-symbols/svg-400/outlined/arrow_back.svg?react';
import Add from '@material-symbols/svg-400/outlined/add.svg?react';
import Settings from '@material-symbols/svg-400/outlined/settings.svg?react';
import Check from '@material-symbols/svg-400/outlined/check.svg?react';
import { Calendar1, CircleHelp, Clock3, CircleCheck, CircleX, Diamond, TicTacToe, TriangleAlert, Users, Whistle } from 'lucide-react';
import styles from './shared.module.css';
// Tab icons use their Lucide source so the bar is one stroke style; Kids is the custom icon/kids-heights.
const icons = { today: Calendar1, coach: Whistle, 'game-plan': TicTacToe, team: Users, kids: KidsHeights, 'kids-heights': KidsHeights,
  'phase-morning': Morning, 'phase-afternoon': Afternoon, 'phase-tonight': Tonight,
  'calendar-mark': Calendar, back: Back, add: Add, settings: Settings, check: Check,
  unowned: CircleHelp, Asked: Clock3, Accepted: CircleCheck, Declined: CircleX,
  Proposed: Diamond, Changed: Diamond, Conflict: TriangleAlert };
export default function Icon({ name, label }) {
  const Glyph = icons[name];
  if (!Glyph) throw new Error(`Unknown icon: ${name}`);
  return <span className={styles.icon} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}><Glyph focusable="false" /></span>;
}
