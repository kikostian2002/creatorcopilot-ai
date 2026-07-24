import styles from './Spinner.module.css';

/**
 * Spinner
 * Standalone loading indicator.
 */
function Spinner({ size = 'md', label = 'Loading…' }) {
  return (
    <span role="status" className={[styles.spinner, styles[size]].join(' ')}>
      <span className="sr-only">{label}</span>
    </span>
  );
}

export default Spinner;
