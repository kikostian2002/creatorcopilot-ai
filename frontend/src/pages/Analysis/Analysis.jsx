import PageHeader from '@/components/common/PageHeader';
import StatCard from '@/components/cards/StatCard';
import styles from './Analysis.module.css';

const PLACEHOLDER_STATS = [
  { label: 'Total Posts',    value: '—' },
  { label: 'Avg. Views',     value: '—' },
  { label: 'Engagement Rate',value: '—' },
  { label: 'Best Platform',  value: '—' },
];

function Analysis() {
  return (
    <div className={styles.page}>
      <PageHeader
        title="Analysis"
        subtitle="Track engagement, reach, and performance across your short-form content."
      />

      <div className={styles.stats}>
        {PLACEHOLDER_STATS.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} />
        ))}
      </div>

      <div className={styles.placeholder}>
        <p>Charts and detailed analytics will appear here once content data is available.</p>
      </div>
    </div>
  );
}

export default Analysis;
