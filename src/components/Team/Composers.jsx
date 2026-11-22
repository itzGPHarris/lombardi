import { useMemo, useState } from 'react';
import ComposerShell from '../Layout/ComposerShell.jsx';
import Button from '../shared/Button.jsx';
import Choice from '../shared/Choice.jsx';
import Icon from '../shared/Icon.jsx';
import PeoplePicker from '../shared/PeoplePicker.jsx';
import { Field } from '../Onboarding/parts.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { addSomeoneView, composerView, newGroupView } from '../../demo/tabs.js';
import styles from './Team.module.css';

// The composers on Team (spec §10; frames 2853:13410, 2853:13388, 2853:16056, 2853:16078 and
// 2853:16092). Each is a composer: Back and its heading fixed, the fields scrolling, the primary
// button anchored at the foot, and the tab bar hidden. She can choose and type; what Send, Post, Add
// and Create group do plays in Stage 6, so they stay inactive here until what they need is filled in.

function MessageBox({ placeholder, value, onChange }) {
  return <textarea className={styles.messageBox} rows={5} value={value} placeholder={placeholder} aria-label={placeholder} onChange={(event) => onChange(event.target.value)} />;
}

// New message: Circle or People. "Everyone on MVP" shows as chosen whenever every member on MVP is.
export function Composer({ target }) {
  const { session, household } = useSession();
  const { back } = useNavigation();
  const [audience, to] = (target ?? 'circle').split(':');
  const view = useMemo(
    () => composerView({ seed: household.seed, momentId: session.momentId, played: session.played, to: to && audience === 'circle' ? [to] : [] }),
    [household.seed, session.momentId, session.played, audience, to],
  );
  const [choice, setChoice] = useState(audience);
  const [chosen, setChosen] = useState(view.circle.chosen);
  const [group, setGroup] = useState(audience === 'people' ? to ?? view.people[0]?.id : view.people[0]?.id);
  const [text, setText] = useState('');
  const everyone = view.circle.people.length > 0 && view.circle.people.every((person) => chosen.includes(person.id));
  const toggleEveryone = () => setChosen(everyone ? [] : view.circle.people.map((person) => person.id));
  const ready = text.trim() && (choice === 'people' ? group : chosen.length);
  return (
    <ComposerShell heading={view.heading} onBack={back} primary={<Button kind="primary" full disabled={!ready}>{choice === 'people' ? view.post : view.send}</Button>}>
      <div className={styles.composer}>
        <div className={styles.segments} role="group">
          {view.audiences.map((entry) => <Choice key={entry.id} segment selected={choice === entry.id} onClick={() => setChoice(entry.id)}>{entry.label}</Choice>)}
        </div>
        <p className={styles.toLabel}>{view.to}</p>
        {choice === 'circle' ? (
          <>
            <button type="button" className={styles.everyone} role="checkbox" aria-checked={everyone} onClick={toggleEveryone}>
              <span className={styles.box} data-on={everyone || undefined}>{everyone && <Icon name="check" />}</span>
              {view.circle.everyone}
            </button>
            <PeoplePicker groups={[{ heading: null, people: [...view.circle.people, ...view.circle.notOnMvp] }]} chosen={chosen} onChange={setChosen} />
            <p className={styles.line}>{view.circle.line}</p>
          </>
        ) : (
          <PeoplePicker groups={[{ heading: null, people: view.people }]} chosen={group ? [group] : []} single onChange={([id]) => setGroup(id)} />
        )}
        <MessageBox placeholder={view.field} value={text} onChange={setText} />
      </div>
    </ComposerShell>
  );
}

export function AddSomeone() {
  const { back } = useNavigation();
  const view = addSomeoneView();
  const [values, setValues] = useState({ name: '', mobile: '', relationship: '', group: null });
  const set = (key) => (value) => setValues((current) => ({ ...current, [key]: value }));
  const ready = values.name.trim() && values.mobile.trim() && values.group;
  return (
    <ComposerShell heading={view.heading} onBack={back} primary={<Button kind="primary" full disabled={!ready}>{view.add}</Button>}>
      <div className={styles.composer}>
        <Field id="add-name" label={view.fields.name} value={values.name} onChange={set('name')} autoComplete="name" />
        <Field id="add-mobile" label={view.fields.mobileNumber} value={values.mobile} onChange={set('mobile')} type="tel" inputMode="tel" />
        <Field id="add-relationship" label={view.fields.relationship} value={values.relationship} onChange={set('relationship')} helper={view.fields.relationshipHelper} />
        <div className={styles.segments} role="group">
          {view.audiences.map((label) => <Choice key={label} segment selected={values.group === label} onClick={() => set('group')(label)}>{label}</Choice>)}
        </div>
      </div>
    </ComposerShell>
  );
}

export function NewGroup() {
  const { session, household } = useSession();
  const { back } = useNavigation();
  const view = newGroupView({ seed: household.seed, momentId: session.momentId, played: session.played });
  const [name, setName] = useState('');
  const [chosen, setChosen] = useState([]);
  return (
    <ComposerShell heading={view.heading} onBack={back} primary={<Button kind="primary" full disabled={!(name.trim() && chosen.length)}>{view.create}</Button>}>
      <div className={styles.composer}>
        <Field id="group-name" label={view.name} value={name} onChange={setName} />
        <PeoplePicker groups={[{ heading: view.addFrom, people: view.people }]} chosen={chosen} onChange={setChosen} />
        <p className={styles.line}>{view.line}</p>
      </div>
    </ComposerShell>
  );
}
