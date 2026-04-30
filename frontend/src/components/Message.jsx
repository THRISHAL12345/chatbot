import './Message.css';

function Message({ message, personaData }) {
  const isUser = message.role === 'user';

  return (
    <div className={`message ${isUser ? 'message-user' : 'message-assistant'}`}>
      {!isUser && (
        <div className="message-avatar">
          {personaData.avatar}
        </div>
      )}
      <div className="message-content">
        <div className="message-bubble">
          {message.content}
        </div>
      </div>
      {isUser && (
        <div className="message-avatar message-avatar-user">
          👤
        </div>
      )}
    </div>
  );
}

export default Message;
