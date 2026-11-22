import styles from './Entrance.module.css';

// The onboarding entrance (spec §19, "Motion"): when a screen opens, each block fades in and rises
// into place, in order: the illustration, the headline, the line beneath it, then the fields or
// choices. On 0j the coach's two lines rise in turn and the button and tick boxes fade in last.
// Under reduced motion the blocks fade without rising.
export default function Entrance({ order = 0, as: Tag = 'div', className = '', children, ...props }) {
  return <Tag className={`${styles.enter} ${className}`} data-order={order} {...props}>{children}</Tag>;
}
