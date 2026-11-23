// Every icon in the app is drawn through this component, by the name it has on the Icons page of the
// Figma library mvp-design-library (page 147:163), such as `calendar-mark` or `phase-morning`.
// Each name uses the source the library gives it: Material Symbols (Outlined) first, then Lucide, then
// a custom drawing. The five tab icons follow the library's Tab Bar instead, which uses Lucide for
// Today and Team, the cap drawing for Coach, and custom drawings for Game plan and Kids, so the bar
// keeps one stroke style.
import GamePlan from './icons/game-plan.svg?react';
import KidsHeights from './icons/kids-heights.svg?react';
import UpdateCalendar from './icons/update-calendar.svg?react';
import CoachCap from './icons/coach-cap.svg?react';
import Add from '@material-symbols/svg-400/outlined/add.svg?react';
import AddCircle from '@material-symbols/svg-400/outlined/add_circle.svg?react';
import Attach from '@material-symbols/svg-400/outlined/attach_file.svg?react';
import Back from '@material-symbols/svg-400/outlined/arrow_back.svg?react';
import CalendarMark from '@material-symbols/svg-400/outlined/calendar_today.svg?react';
import Camera from '@material-symbols/svg-400/outlined/photo_camera.svg?react';
import Check from '@material-symbols/svg-400/outlined/check.svg?react';
import CheckCircle from '@material-symbols/svg-400/outlined/check_circle.svg?react';
import Close from '@material-symbols/svg-400/outlined/close.svg?react';
import Copy from '@material-symbols/svg-400/outlined/content_copy.svg?react';
import Edit from '@material-symbols/svg-400/outlined/edit.svg?react';
import File from '@material-symbols/svg-400/outlined/description.svg?react';
import GiveToCoach from '@material-symbols/svg-400/outlined/arrow_upward.svg?react';
import History from '@material-symbols/svg-400/outlined/history.svg?react';
import Location from '@material-symbols/svg-400/outlined/location_on.svg?react';
import More from '@material-symbols/svg-400/outlined/more_horiz.svg?react';
import PhaseAfternoon from '@material-symbols/svg-400/outlined/light_mode.svg?react';
import PhaseMorning from '@material-symbols/svg-400/outlined/wb_twilight.svg?react';
import PhaseTonight from '@material-symbols/svg-400/outlined/dark_mode.svg?react';
import Phone from '@material-symbols/svg-400/outlined/call.svg?react';
import Search from '@material-symbols/svg-400/outlined/search.svg?react';
import Settings from '@material-symbols/svg-400/outlined/settings.svg?react';
import Voice from '@material-symbols/svg-400/outlined/mic.svg?react';
import Reminder from '@material-symbols/svg-400/outlined/notifications.svg?react';
import Directions from '@material-symbols/svg-400/outlined/near_me.svg?react';
import Clock from '@material-symbols/svg-400/outlined/schedule.svg?react';
import Home from '@material-symbols/svg-400/outlined/home.svg?react';
import School from '@material-symbols/svg-400/outlined/school.svg?react';
import {
  ArrowUp, Calendar1, ChevronRight, CircleDashed, CircleDot, ExternalLink, Hourglass, MessageCircle,
  ThumbsDown, ThumbsUp, TriangleAlert, Users,
} from 'lucide-react';
import styles from './Icon.module.css';

const icons = {
  // The tab bar and sidebar, as the library's Tab Bar draws them.
  today: Calendar1,
  coach: CoachCap,
  'game-plan': GamePlan,
  team: Users,
  'kids-heights': KidsHeights,
  // Material Symbols, the first source wherever the library offers it.
  add: Add,
  'add-circle': AddCircle,
  attach: Attach,
  back: Back,
  'calendar-mark': CalendarMark,
  camera: Camera,
  check: Check,
  'check-circle': CheckCircle,
  close: Close,
  copy: Copy,
  edit: Edit,
  file: File,
  'give-to-coach': GiveToCoach,
  history: History,
  location: Location,
  more: More,
  'phase-afternoon': PhaseAfternoon,
  'phase-morning': PhaseMorning,
  'phase-tonight': PhaseTonight,
  phone: Phone,
  search: Search,
  settings: Settings,
  voice: Voice,
  reminder: Reminder,
  directions: Directions,
  clock: Clock,
  home: Home,
  school: School,
  // Custom drawings, where neither package has the glyph.
  'update-calendar': UpdateCalendar,
  // Lucide only, as the library gives them.
  'external-link': ExternalLink,
  'send-to-coach': ArrowUp,
  'mark-conflict': TriangleAlert,
  'mark-nobody-yet': CircleDashed,
  message: MessageCircle,
  'chevron-right': ChevronRight,
  'mark-changed': CircleDot,
  'thumbs-up': ThumbsUp,
  'thumbs-down': ThumbsDown,
  hourglass: Hourglass,
};

export const iconNames = Object.keys(icons);

export default function Icon({ name, label }) {
  const Glyph = icons[name];
  if (!Glyph) throw new Error(`Unknown icon: ${name}`);
  return (
    <span className={styles.icon} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <Glyph focusable="false" />
    </span>
  );
}
