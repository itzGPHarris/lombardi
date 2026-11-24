import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import Sheet from '../shared/Sheet.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import Entrance from './Entrance.jsx';
import { fill } from '../../demo/today.js';
import { calendar as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';
import own from './Calendar.module.css';

// Connect your calendar (0q, 2853:13014). Each calendar raises the staged permission as a sheet over
// the same screen (0q-b, 2853:13034), drawn generic and grayscale with the calendar's name in plain
// text and no logo. Allowing it closes the sheet, and the screen confirms the connection (0q-d,
// 2853:13176): "Your Google Calendar is connected." with a check, the calendar's button reading
// "Google Calendar · Connected", the other calendars as Outlined buttons, which connect nothing in the
// prototype, and Continue at the foot (spec §3, F40). Cancel closes the sheet with nothing connected,
// and Not now goes on to the school screen. MVP reads her calendar and never changes it (AGENTS.md
// rule 4).
export default function Calendar({ connected, asking, onPick, onAllow, onCancel, onSkip, onContinue, onBack }) {
  return (
    <OnboardingShell
      onBack={onBack}
      primary={connected ? <Button kind="primary" full onClick={onContinue}>{words.continue}</Button> : null}
      skip={connected ? null : <Button kind="text" className={styles.link} onClick={onSkip}>{words.notNow}</Button>}
    >
      <div className={styles.page} data-top="none">
        <Entrance order={1} as="h1" className={styles.headline}>{words.heading}</Entrance>
        <Entrance order={2} as="p" className={styles.line}>{words.line}</Entrance>
        {connected && (
          <p className={own.connected} role="status">
            <span className={own.connectedIcon}><Icon name="check-circle" /></span>
            <span>{fill(words.connected, { calendar: connected })}</span>
          </p>
        )}
        <Entrance order={3} className={`${styles.buttons} ${own.choices}`} data-connected={connected ? true : undefined}>
          {words.choices.map((choice) => {
            if (!connected) return <Button key={choice} kind="primary" full onClick={() => onPick(choice)}>{choice}</Button>;
            if (choice === connected) {
              return <Button key={choice} kind="outlined" full icon="check" aria-disabled="true">{fill(words.connectedButton, { calendar: choice })}</Button>;
            }
            // Not wired once a calendar is connected, as the prototype stages it (spec §3).
            return <Button key={choice} kind="outlined" full>{choice}</Button>;
          })}
        </Entrance>
      </div>
      <Sheet
        open={Boolean(asking)}
        onClose={onCancel}
        bare
        footer={(
          <div className={own.permissionButtons}>
            <button type="button" className={own.allow} onClick={onAllow}>{words.allow}</button>
            <button type="button" className={own.cancel} onClick={onCancel}>{words.cancel}</button>
          </div>
        )}
      >
        <div className={own.permission}>
          <p className={own.calendarName}>{asking}</p>
          <p className={own.ask}>{words.permission}</p>
        </div>
      </Sheet>
    </OnboardingShell>
  );
}
