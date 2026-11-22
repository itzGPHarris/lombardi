import Icon from '../shared/Icon.jsx';
import styles from './PassFields.module.css';

// The fields under the pass (library PassFields 2760:39222): each a label in Meta over a value in
// Body strong, at equal widths. A late Arrive is set in the warning ink with the clock icon before it.
export default function PassFields({ fields }) {
  return (
    <dl className={styles.fields}>
      {fields.map((field) => (
        <div key={field.label} className={styles.field}>
          <dt className={styles.label}>{field.label}</dt>
          <dd className={styles.value} data-late={field.late || undefined}>
            {field.late && <span className={styles.clock}><Icon name="clock" /></span>}
            {field.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
