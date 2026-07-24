import { useNavigate } from 'react-router-dom';
import PageHeader from '@/components/common/PageHeader';
import Button from '@/components/common/Button';
import styles from './Welcome.module.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.badge}>AI for Short-Form Creators</div>

      <PageHeader
        title="Welcome to CreatorCopilot"
        subtitle="Your AI-powered assistant for creating, planning, and analysing short-form content — for TikTok, Reels, Shorts, and more."
      />

      <div className={styles.actions}>
        <Button variant="primary" size="lg" onClick={() => navigate('/workspace')}>
          Get Started
        </Button>
        <Button variant="ghost" size="lg">
          Learn More
        </Button>
      </div>

      <div className={styles.platforms}>
        {['TikTok', 'Instagram Reels', 'YouTube Shorts', 'X / Twitter'].map((p) => (
          <span key={p} className={styles.platformTag}>{p}</span>
        ))}
      </div>
    </div>
  );
}

export default Welcome;
