import PageHeader from '@/components/common/PageHeader';
import ContentCard from '@/components/cards/ContentCard';
import styles from './History.module.css';

const PLACEHOLDER_HISTORY = [
  { id: 1, platform: 'TikTok',  title: 'Hook: 3 things nobody tells you…', status: 'published' },
  { id: 2, platform: 'Reels',   title: 'Day in my life — GRWM',            status: 'published' },
  { id: 3, platform: 'Shorts',  title: 'Quick recipe under 60 seconds',    status: 'draft' },
  { id: 4, platform: 'Twitter', title: 'Thread: content creation tips',    status: 'published' },
];

function History() {
  return (
    <div className={styles.page}>
      <PageHeader
        title="History"
        subtitle="Browse all previously generated and published content."
      />

      <div className={styles.grid}>
        {PLACEHOLDER_HISTORY.map((item) => (
          <ContentCard
            key={item.id}
            platform={item.platform}
            title={item.title}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}

export default History;
