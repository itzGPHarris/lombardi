import wordmarkFull from '../../assets/brand/wordmark-full.svg';
import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import { useState } from 'react';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import { plan as words } from '../../copy/onboarding.js';
import { wordmark } from '../../copy/navigation.js';
import styles from './ChoosePlan.module.css';

// Choose a plan (0e-p, 2853:12857), staged (spec §3, standing decision 7). Either Buy starts nothing
// and moves on to Connect your calendar, and nothing opens Stripe. The words are proposed (issue O17).
// The screen map asks for the frame at 440 with Hearth colors and the full wordmark.
export default function ChoosePlan({ onBuy, onBack }) {
  const [period, setPeriod] = useState(words.toggle[0]);
  const plans = [words.basic, words.family];
  return (
    <OnboardingShell onBack={onBack}>
      <div className={styles.page}>
        <img className={styles.wordmark} src={wordmarkFull} alt={wordmark} />
        <h1 className={styles.headline}>{words.headline}</h1>
        <div className={styles.toggle} role="group">
          {words.toggle.map((option) => (
            <button key={option} type="button" className={styles.period} aria-pressed={option === period} onClick={() => setPeriod(option)}>{option}</button>
          ))}
        </div>
        {plans.map(([name, price, ...features]) => (
          <section key={name} className={styles.card} aria-labelledby={`plan-${name}`}>
            <h2 id={`plan-${name}`} className={styles.name}>{name}</h2>
            <p className={styles.price}>{price}</p>
            <ul className={styles.features}>
              {features.map((feature) => (
                <li key={feature} className={styles.feature}><span className={styles.check}><Icon name="check-circle" /></span>{feature}</li>
              ))}
            </ul>
            <Button kind="primary" full onClick={onBuy}>{words.buy}</Button>
          </section>
        ))}
        <p className={styles.note}>{words.line}</p>
      </div>
    </OnboardingShell>
  );
}
