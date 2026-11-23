import { useState } from 'react';
import Button from '../shared/Button.jsx';
import RequestItem from './RequestItem.jsx';
import styles from './Requests.module.css';

// The request as its recipient sees it (spec §9, "The recipient's view"; frames 2853:13508,
// 2853:13527, 2853:13541, 2853:13559, 2853:15922 and Ms. Reyes's web page): the sentence saying what
// Charlotte is asking, when she sent it, her text, each item with "Yes, I can" and "No, I can't", and
// the note field. Once every item is answered, the answers with Change, "Your note:" and the line
// saying Charlotte can see them.
//
// The answers are scripted (spec §15): the taps that give the moment's scripted answer play its step,
// so her plan changes as the fixtures write it, and a tap the moment doesn't script changes nothing.
// In C-02 the first "Yes, I can" holds on the card and the second plays the step. Focusing the note
// field fills in the note the fixtures write, as in C-04b.
export default function RequestCard({ card, childName, onAnswer, keepsText = false }) {
  const [taps, setTaps] = useState({});
  const [note, setNote] = useState('');
  // Edward changing his answer in C-06: the item reopens with his note until he sends it.
  const [changeSent, setChangeSent] = useState(false);
  const changing = card.changing && !changeSent ? card.changing : null;

  const yes = (itemId) => {
    if (!card.scripted?.items.includes(itemId)) return;
    const next = { ...taps, [itemId]: card.words.yes };
    if (card.scripted.items.every((id) => next[id])) onAnswer(card.id);
    else setTaps(next);
  };
  const answerFor = (row) => {
    if (changing && changing.item === row.id) return null;
    return row.answer ?? taps[row.id] ?? null;
  };
  const answered = card.rows.every((row) => answerFor(row));
  // In MVP the answered card folds Charlotte's text away (2853:13527, 2853:15922). The web page a text
  // message opens keeps it after the answer, as 2853:13611 draws it.
  const showText = keepsText || (!card.answered && !changing);
  const fillNote = () => { if (!note && card.scripted?.note) setNote(card.scripted.note); };

  return (
    <article className={styles.card}>
      <header className={styles.cardHead}>
        <h2 className={styles.heading}>{card.heading}</h2>
        {card.sent && <p className={styles.sent}>{card.sent}</p>}
      </header>
      {showText && <p className={styles.text}>{card.text}</p>}
      {card.rows.map((row) => (
        <div key={row.id} className={styles.rule}>
          <RequestItem
            row={row}
            childName={childName}
            answer={answerFor(row)}
            words={card.words}
            onYes={() => yes(row.id)}
            onNo={() => {}}
            onChange={() => {}}
          />
        </div>
      ))}
      {!answered && (
        <>
          {card.words.noMvpNeeded && <p className={styles.noMvp}>{card.words.noMvpNeeded}</p>}
          <label className={styles.note}>
            <span className={styles.noteLabel}>{card.words.addNote}</span>
            <textarea
              className={styles.noteBox}
              rows={changing ? 2 : 1}
              value={changing ? changing.note ?? '' : note}
              readOnly={!!changing}
              onFocus={fillNote}
              onChange={(event) => setNote(event.target.value)}
            />
          </label>
          {changing && <Button kind="primary" full onClick={() => setChangeSent(true)}>{card.words.sendAnswer}</Button>}
        </>
      )}
      {answered && card.yourNote && <p className={styles.meta}>{card.yourNote}</p>}
      {answered && <p className={styles.meta}>{card.words.after}</p>}
    </article>
  );
}
