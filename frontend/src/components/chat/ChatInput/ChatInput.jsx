import styles from './ChatInput.module.css';

/**
 * ChatInput
 * Textarea + send button for the AI chat interface.
 */
function ChatInput({ placeholder = 'Type a message…', onSend }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      // TODO: wire up to state / onSend callback
    }
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        rows={2}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className={styles.sendBtn}
        onClick={onSend}
        aria-label="Send message"
      >
        ↑
      </button>
    </div>
  );
}

export default ChatInput;
