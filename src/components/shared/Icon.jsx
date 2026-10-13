import Today from '@material-symbols/svg-400/outlined/today.svg?react';
import Coach from '@material-symbols/svg-400/outlined/sports.svg?react';
import GamePlan from '@material-symbols/svg-400/outlined/strategy.svg?react';
import Team from '@material-symbols/svg-400/outlined/groups.svg?react';
import Kids from '@material-symbols/svg-400/outlined/child_care.svg?react';
import Morning from '@material-symbols/svg-400/outlined/wb_twilight.svg?react';
import Afternoon from '@material-symbols/svg-400/outlined/light_mode.svg?react';
import Tonight from '@material-symbols/svg-400/outlined/dark_mode.svg?react';
import Calendar from '@material-symbols/svg-400/outlined/calendar_today.svg?react';
import Back from '@material-symbols/svg-400/outlined/arrow_back.svg?react';
import Add from '@material-symbols/svg-400/outlined/add.svg?react';
import Settings from '@material-symbols/svg-400/outlined/settings.svg?react';
import Check from '@material-symbols/svg-400/outlined/check.svg?react';
import { CircleHelp, Clock3, CircleCheck, CircleX, Diamond, TriangleAlert } from 'lucide-react';
import styles from './shared.module.css';
const icons = { today: Today, coach: Coach, 'game-plan': GamePlan, team: Team, kids: Kids,
  'phase-morning': Morning, 'phase-afternoon': Afternoon, 'phase-tonight': Tonight,
  'calendar-mark': Calendar, back: Back, add: Add, settings: Settings, check: Check,
  unowned: CircleHelp, Asked: Clock3, Accepted: CircleCheck, Declined: CircleX,
  Proposed: Diamond, Changed: Diamond, Conflict: TriangleAlert };
export default function Icon({ name, label }) {
  const Glyph = icons[name];
  if (!Glyph) throw new Error(`Unknown icon: ${name}`);
  return <span className={styles.icon} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}><Glyph focusable="false" /></span>;
}
