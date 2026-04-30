import './TypingIndicator.css';

function TypingIndicator({ personaData }) {
  return (
    <div className="message message-assistant">
      <div
        className="message-avatar"
        style={{ backgroundColor: personaData.color }}
      >
        {personaData.avatar}
      </div>
      <div className="message-content">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;
