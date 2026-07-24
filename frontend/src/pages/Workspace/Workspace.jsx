import PageHeader from '@/components/common/PageHeader';
import ChatInput from '@/components/chat/ChatInput';
import ChatMessage from '@/components/chat/ChatMessage';
import ContentCard from '@/components/cards/ContentCard';
import styles from './Workspace.module.css';

const PLACEHOLDER_MESSAGES = [
  { id: 1, role: 'assistant', text: 'Hi! Describe your content idea and I\'ll help you craft a short-form script, caption, and hashtags.' },
];

const PLACEHOLDER_CARDS = [
  { id: 1, platform: 'TikTok', title: 'Morning routine hook', status: 'draft' },
  { id: 2, platform: 'Reels',  title: '5 productivity hacks', status: 'ready' },
];

function Workspace() {
  return (
    <div className={styles.page}>
      <PageHeader
        title="Workspace"
        subtitle="Generate and refine short-form content with your AI copilot."
      />

      <div className={styles.layout}>
        {/* ── Chat panel ── */}
        <section className={styles.chatPanel}>
          <div className={styles.messageList}>
            {PLACEHOLDER_MESSAGES.map((m) => (
              <ChatMessage key={m.id} role={m.role} text={m.text} />
            ))}
          </div>
          <ChatInput placeholder="Describe your idea…" />
        </section>

        {/* ── Results panel ── */}
        <aside className={styles.resultsPanel}>
          <p className={styles.panelLabel}>Recent Generations</p>
          {PLACEHOLDER_CARDS.map((c) => (
            <ContentCard key={c.id} platform={c.platform} title={c.title} status={c.status} />
          ))}
        </aside>
      </div>
    </div>
  );
}

export default Workspace;
