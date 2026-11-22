import Icon from '../shared/Icon.jsx';
import { laterToday } from '../../copy/today.js';
import styles from './CalendarMark.module.css';

// The calendar mark (spec §5, standing decision 19): small, in ink/muted, never cerulean, and never a
// control. It sits before the item's text, with the accessible label "From your calendar".
export default function CalendarMark() {
  return <span className={styles.mark}><Icon name="calendar-mark" label={laterToday.calendarMarkLabel} /></span>;
}
