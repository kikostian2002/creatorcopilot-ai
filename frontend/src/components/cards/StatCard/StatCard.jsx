import styles from './StatCard.module.css';

/**
 * StatCard
 * Single-metric display card for the Analysis page.
 */
function StatCard({ label, value, delta }) {
  return (
    <div className={styles.card}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
      {delta !== undefined && (
        <span className={[styles.delta, delta >= 0 ? styles.positive : styles.negative].join(' ')}>
          {delta >= 0 ? '▲' : '▼'} {Math.abs(delta)}%
        </span>
      )}
    </div>
  );
}

export default StatCard;
