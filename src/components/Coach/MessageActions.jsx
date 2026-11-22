import Button from '../shared/Button.jsx';
import styles from './Coach.module.css';

// The buttons under a coach message (spec §6, "Actions"): the first is the primary one and the rest
// are outlined, each labeled from the fixtures. Stage 6 plays what each one opens.
export default function MessageActions({ actions, onAction }) {
  if (!actions?.length) return null;
  return (
    <div className={styles.actions}>
      {actions.map((action, index) => (
        <Button key={action.label} kind={index === 0 ? 'primary' : 'outlined'} onClick={() => onAction?.(action)}>{action.label}</Button>
      ))}
    </div>
  );
}
