import Button from '../shared/Button.jsx';
import CalendarMark from '../Calendar/CalendarMark.jsx';
import { Chips, Marks } from './PlanRow.jsx';
import { addToTheGamePlan, noThanks } from '../../copy/gamePlan.js';
import styles from './GamePlan.module.css';

// The review card (spec §8, issue G33; library ReviewCard, ReviewDay and ReviewItem): what is hers to
// choose, in the coach's tint, headed with a full sentence. Each day sits on the card's paper in the
// coach's amber outline, labeled in the Label style, and each item has No thanks and Add to the game
// plan. Tapping the item opens its page. Add, No thanks and Add them all play in Stage 6.
export default function ReviewCard({ card, childName, onOpen }) {
  return (
    <section className={styles.review} aria-label={card.heading}>
      <h2 className={styles.reviewHeading}>{card.heading}</h2>
      {card.days.map((day) => (
        <div key={day.label} className={styles.reviewDay}>
          <p className={styles.reviewDayLabel}>{day.label}</p>
          {day.items.map((item) => (
            <div key={item.id} className={styles.reviewItem}>
              <button type="button" className={styles.reviewItemRow} onClick={() => onOpen(item.id)}>
                <Chips chips={item.chips} childName={childName} />
                {item.calendarMark && <CalendarMark />}
                <span className={styles.reviewItemText}>{item.text}</span>
              </button>
              <Marks marks={item.marks} />
              <div className={styles.reviewActions}>
                <Button kind="text">{noThanks}</Button>
                <Button kind="text" icon="add">{addToTheGamePlan}</Button>
              </div>
            </div>
          ))}
        </div>
      ))}
      {card.addAll && <Button kind="primary" full>{card.addAll}</Button>}
    </section>
  );
}
