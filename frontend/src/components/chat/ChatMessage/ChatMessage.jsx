import styles from './ChatMessage.module.css';

/**
 * ChatMessage
 * Renders a single chat bubble.
 * @param {'user'|'assistant'} role
 */
function ChatMessage({ role, text }) {
  return (
    <div className={[styles.message, styles[role]].join(' ')}>
      <span className={styles.bubble}>{text}</span>
    </div>
  );
}

export default ChatMessage;
