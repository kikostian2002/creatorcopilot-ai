import styles from './TimelineItem.module.css';

const STATUS_CLASS = {
  idea:      'statusIdea',
  draft:     'statusDraft',
  scheduled: 'statusScheduled',
  published: 'statusPublished',
};

/**
 * TimelineItem
 * A single row in the content planning timeline.
 */
function TimelineItem({ date, title, status = 'idea' }) {
  return (
    <div className={styles.item}>
      <div className={styles.dateBadge}>{date}</div>
      <div className={styles.line}>
        <div className={styles.dot} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <span className={[styles.status, styles[STATUS_CLASS[status]]].join(' ')}>
          {status}
        </span>
      </div>
    </div>
  );
}

export default TimelineItem;
