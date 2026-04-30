import { useState, useEffect, useRef } from 'react';
import './Chat.css';
import Message from './Message';
import SuggestionChips from './SuggestionChips';
import TypingIndicator from './TypingIndicator';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function Chat({ persona, personaData, messages, setMessages }) {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Clear error when persona changes
  useEffect(() => {
    setError(null);
  }, [persona]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          persona,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();
      const assistantMessage = { role: 'assistant', content: data.message };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
  };

  return (
    <div className="chat-container" style={{ '--persona-color': personaData.color }}>
      <div className="chat-persona-info">
        <div className="persona-avatar">
          {personaData.avatar}
        </div>
        <div className="persona-details">
          <h2 className="persona-name">{personaData.name}</h2>
          <p className="persona-title">{personaData.title}</p>
        </div>
      </div>

      <div className="chat-messages" ref={chatContainerRef}>
        {messages.length === 0 && (
          <div className="welcome-message">
            <h3>👋 Welcome!</h3>
            <p>Start a conversation with {personaData.name}.</p>
            <p className="welcome-hint">Try one of the suggestions below or ask your own question!</p>
          </div>
        )}

        {messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            personaData={personaData}
          />
        ))}

        {isLoading && <TypingIndicator personaData={personaData} />}
        
        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            <div>
              <strong>Error:</strong> {error}
              <br />
              <small>
                {error.includes('API key') && 'Please check your OpenAI API key in the .env file.'}
                {error.includes('Rate limit') && 'Please wait a moment and try again.'}
              </small>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {messages.length === 0 && (
        <SuggestionChips
          suggestions={personaData.suggestions}
          onSuggestionClick={handleSuggestionClick}
          disabled={isLoading}
        />
      )}

      <form className="chat-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="chat-input"
          placeholder={`Ask ${personaData.name} anything...`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="chat-submit"
          disabled={!inputValue.trim() || isLoading}
        >
          {isLoading ? '⏳' : '➤'}
        </button>
      </form>
    </div>
  );
}

export default Chat;
