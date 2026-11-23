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
import { nextScripted } from '../../demo/steps.js';
import styles from './Team.module.css';

// The composers on Team (spec §10; frames 2853:13410, 2853:13388, 2853:16056, 2853:16078 and
// 2853:16092). Each is a composer: Back and its heading fixed, the fields scrolling, the primary
// button anchored at the foot, and the tab bar hidden.
//
// New message opens with Circle or People to choose. Opened for one person, from Message on a person
// page, it reads "To:" and that person, as fixtures C-06c writes it (issue M12). Opened from "Ask my
// parent group" on the coach card, it has People chosen, "To:" and the group, and the post the coach
// drafted in her words, for her to change (fixtures C-05). Send and Post play the moment's step when
// it is scripted, and open the chat or the group; the message field fills in the fixtures' words as
// it takes focus, as the C-05c message does. Add someone and Create group are staged (spec §10) and
// stay inactive until what they need is filled in.

function MessageBox({ placeholder, value, onChange, onFocus }) {
  return <textarea className={styles.messageBox} rows={5} value={value} placeholder={placeholder} aria-label={placeholder} onFocus={onFocus} onChange={(event) => onChange(event.target.value)} />;
}

const sameMembers = (a, b) => a.length === b.length && a.every((id) => b.includes(id));

// The words the next step sends from this composer, if the moment scripts them.
function scriptedText(seed, scripted) {
  const trigger = scripted?.entry.trigger ?? '';
  const target = trigger.slice(trigger.indexOf(':') + 1);
  if (trigger.startsWith('send-chat:')) {
    const id = scripted.step.set.chats?.[target]?.messages?.at(-1);
    return seed.chats.find((chat) => chat.id === target)?.messages.find((message) => message.id === id)?.text ?? '';
  }
  if (trigger.startsWith('post:')) {
    const id = scripted.step.set.groups?.[target]?.posts?.at(-1);
    return seed.groups.find((group) => group.id === target)?.posts.find((post) => post.id === id)?.text ?? '';
  }
  return '';
}

export function Composer({ target }) {
  const { session, dispatch, household } = useSession();
  const { back, openPage } = useNavigation();
  const seed = household.seed;
  const colon = (target ?? 'circle').indexOf(':');
  const [kind, id] = colon < 0 ? [target ?? 'circle', null] : [target.slice(0, colon), target.slice(colon + 1)];
  // A person page opens the composer for that one person; the coach card opens it on a group's post.
  const person = kind === 'person' ? seed.people.find((entry) => entry.id === id) : null;
  const postGroup = kind === 'post' ? seed.groups.find((group) => group.posts.some((post) => post.id === id)) : null;
  const audience = kind === 'people' || kind === 'post' ? 'people' : 'circle';
  const view = useMemo(
    () => composerView({ seed, momentId: session.momentId, played: session.played, to: person ? [person.id] : kind === 'circle' && id ? [id] : [] }),
    [seed, session.momentId, session.played, person, kind, id],
  );
  const scripted = nextScripted(seed, session.momentId, session.played);
  const draft = postGroup ? postGroup.posts.find((post) => post.id === id)?.text ?? '' : '';
  const [choice, setChoice] = useState(audience);
  const [chosen, setChosen] = useState(view.circle.chosen);
  const [group, setGroup] = useState(postGroup?.id ?? (kind === 'people' ? id : null) ?? view.people[0]?.id);
  const [text, setText] = useState(draft);
  const everyone = view.circle.people.length > 0 && view.circle.people.every((entry) => chosen.includes(entry.id));
  const toggleEveryone = () => setChosen(everyone ? [] : view.circle.people.map((entry) => entry.id));
  const ready = text.trim() && (choice === 'people' ? group : chosen.length);
  const fill = () => { if (!text) setText(scriptedText(seed, scripted)); };

  const send = () => {
    back();
    if (choice === 'people') {
      dispatch({ type: 'STEP', trigger: `post:${group}` });
      openPage('group', group);
      return;
    }
    // Sending to her circle adds to the chat she already has with exactly those people (spec §10).
    const chat = seed.chats.find((entry) => sameMembers(entry.members, chosen));
    if (!chat) return;
    dispatch({ type: 'STEP', trigger: `send-chat:${chat.id}` });
    openPage('chat', chat.id);
  };

  const primary = <Button kind="primary" full disabled={!ready} onClick={send}>{choice === 'people' ? view.post : view.send}</Button>;
  return (
    <ComposerShell heading={view.heading} onBack={back} primary={primary}>
      <div className={styles.composer}>
        {person ? (
          <p className={styles.toNamed}>{view.toNamed(person.shortName ?? person.name)}</p>
        ) : (
          <>
            <div className={styles.segments} role="group">
              {view.audiences.map((entry) => <Choice key={entry.id} segment selected={choice === entry.id} onClick={() => setChoice(entry.id)}>{entry.label}</Choice>)}
            </div>
            {postGroup && choice === 'people' ? (
              <p className={styles.toNamed}>{view.toNamed(postGroup.name)}</p>
            ) : (
              <>
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
                  <PeoplePicker groups={[{ heading: null, people: view.people }]} chosen={group ? [group] : []} single onChange={([picked]) => setGroup(picked)} />
                )}
              </>
            )}
          </>
        )}
        <MessageBox placeholder={view.field} value={text} onChange={setText} onFocus={fill} />
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
