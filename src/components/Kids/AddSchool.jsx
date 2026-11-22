import { useState } from 'react';
import ComposerShell from '../Layout/ComposerShell.jsx';
import Button from '../shared/Button.jsx';
import ChildChip from '../shared/ChildChip.jsx';
import { Field } from '../Onboarding/parts.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { addSchoolView } from '../../demo/tabs.js';
import styles from './Kids.module.css';

// Add a school (frame 2853:16112; fixtures "Kids, as shown: Add a school"): the school's name and the
// children who go there, as their name chips. Add school stays inactive until both are given, and in
// the prototype it is staged and adds nothing.
export default function AddSchool() {
  const { household } = useSession();
  const { back } = useNavigation();
  const view = addSchoolView({ seed: household.seed });
  const [name, setName] = useState('');
  const [chosen, setChosen] = useState([]);
  const toggle = (id) => setChosen((current) => (current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]));
  return (
    <ComposerShell heading={view.heading} onBack={back} primary={<Button kind="primary" full disabled={!(name.trim() && chosen.length)}>{view.button}</Button>}>
      <div className={styles.page}>
        <Field id="school-name" label={view.name} value={name} onChange={setName} />
        <div className={styles.whoGoes} role="group" aria-label={view.whoGoesHere}>
          <p className={styles.factLabel}>{view.whoGoesHere}</p>
          <div className={styles.chips}>
            {view.children.map((child) => (
              <button key={child.id} type="button" className={styles.chipChoice} aria-pressed={chosen.includes(child.id)} onClick={() => toggle(child.id)}>
                <ChildChip name={child.name} />
              </button>
            ))}
          </div>
        </div>
        <p className={styles.sheetLine}>{view.line}</p>
      </div>
    </ComposerShell>
  );
}
