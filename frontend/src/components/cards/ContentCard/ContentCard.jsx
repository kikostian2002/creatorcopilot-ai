import styles from './ContentCard.module.css';

const STATUS_CLASS = {
  draft:     'statusDraft',
  ready:     'statusReady',
  scheduled: 'statusScheduled',
  published: 'statusPublished',
};

/**
 * ContentCard
 * Displays a generated content item summary.
 */
function ContentCard({ platform, title, status = 'draft', onClick }) {
  return (
    <div className={styles.card} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      <div className={styles.top}>
        <span className={styles.platform}>{platform}</span>
        <span className={[styles.status, styles[STATUS_CLASS[status]]].join(' ')}>
          {status}
        </span>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default ContentCard;
