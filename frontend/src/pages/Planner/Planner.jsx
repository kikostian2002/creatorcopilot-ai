import PageHeader from '@/components/common/PageHeader';
import TimelineItem from '@/components/timeline/TimelineItem';
import styles from './Planner.module.css';

const PLACEHOLDER_ITEMS = [
  { id: 1, date: 'Mon',  title: 'Morning routine — TikTok',   status: 'scheduled' },
  { id: 2, date: 'Wed',  title: 'Product review — Reels',     status: 'draft' },
  { id: 3, date: 'Fri',  title: 'Trending audio hook — Shorts',status: 'idea' },
];

function Planner() {
  return (
    <div className={styles.page}>
      <PageHeader
        title="Planner"
        subtitle="Plan and schedule your short-form content across platforms."
      />

      <div className={styles.timeline}>
        {PLACEHOLDER_ITEMS.map((item) => (
          <TimelineItem
            key={item.id}
            date={item.date}
            title={item.title}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Planner;
