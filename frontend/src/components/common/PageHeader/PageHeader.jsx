import styles from './PageHeader.module.css';

/**
 * PageHeader
 * Consistent page title + optional subtitle block.
 */
function PageHeader({ title, subtitle, actions }) {
  return (
    <header className={styles.header}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
}

export default PageHeader;
