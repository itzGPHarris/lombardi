import Button from '../shared/Button.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import Entrance from './Entrance.jsx';
import { fill } from '../../demo/today.js';
import { intro as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';
import own from './Intro.module.css';

// Welcome to the team (0j, 2853:12168): the coach's introduction and its recap, then Next with the two
// ticked lines beneath it. The calendar line shows only when she connected a calendar. Next goes to
// her first board. The greeting drops her name when she skipped the welcome, and the reminder line
// shows only when she made a capture (fixtures C-00, "If she skipped a step"). The phone's own request to allow notifications is not drawn (docs/issues.csv).
export default function Intro({ name, recap, calendarConnected, captured = true, ticks, onTick, onNext, onBack }) {
  return (
    <OnboardingShell
      onBack={onBack}
      primary={(
        <Entrance order="last" className={own.controls}>
          <Button kind="primary" full onClick={onNext}>{words.next}</Button>
          {captured && (
            <label className={own.tick}>
              <input type="checkbox" checked={!!ticks.reminder} onChange={() => onTick('reminder')} />
              <span>{words.reminder}</span>
            </label>
          )}
          {calendarConnected && (
            <label className={own.tick}>
              <input type="checkbox" checked={!!ticks.calendar} onChange={() => onTick('calendar')} />
              <span>{words.calendarLine}</span>
            </label>
          )}
        </Entrance>
      )}
    >
      <div className={styles.page}>
        <Entrance order={0} as="p" className={styles.byline}>{words.byline}</Entrance>
        <Entrance order={1} as="h1" className={styles.headline}>{name ? fill(words.greeting, { person: name }) : words.greetingNoName}</Entrance>
        <Entrance order={2} as="p" className={styles.voice}>{recap}</Entrance>
      </div>
    </OnboardingShell>
  );
}
