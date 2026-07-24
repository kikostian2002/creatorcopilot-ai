import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import styles from './AppLayout.module.css';

const NAV_ITEMS = [
  { to: '/workspace', label: 'Workspace', icon: '✦' },
  { to: '/analysis',  label: 'Analysis',  icon: '◈' },
  { to: '/planner',   label: 'Planner',   icon: '▦' },
  { to: '/history',   label: 'History',   icon: '◷' },
];

function AppLayout() {
  const navigate = useNavigate();

  return (
    <div className={styles.shell}>
      {/* ── Sidebar ── */}
      <aside className={styles.sidebar}>
        <button
          className={styles.brand}
          onClick={() => navigate('/workspace')}
        >
          <span className={styles.brandIcon}>C</span>
          <span className={styles.brandName}>CreatorCopilot</span>
        </button>

        <nav className={styles.nav}>
          {NAV_ITEMS.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [styles.navItem, isActive ? styles.navItemActive : ''].join(' ')
              }
            >
              <span className={styles.navIcon}>{icon}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <span className={styles.version}>v0.1.0</span>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
