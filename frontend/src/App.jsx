import { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import PersonaSwitcher from './components/PersonaSwitcher';

const personas = {
  anshuman: {
    name: 'Anshuman Singh',
    title: 'Co-founder, Scaler & InterviewBit',
    avatar: '👨‍💼',
    color: '#4F46E5',
    suggestions: [
      'How did your time at Facebook shape Scaler?',
      'Why do you believe skills matter more than degrees?',
      'What\'s your advice for someone who failed to get into IIT?',
      'How did you build InterviewBit from scratch?',
    ],
  },
  abhimanyu: {
    name: 'Abhimanyu Saxena',
    title: 'Co-founder, Scaler | Ex-Fab.com',
    avatar: '👨‍💻',
    color: '#0891B2',
    suggestions: [
      'How did you build your first startup in college?',
      'What\'s the story behind founding InterviewBit?',
      'How is Scaler different from a regular engineering degree?',
      'What does consistency mean to you as a founder?',
    ],
  },
  kshitij: {
    name: 'Kshitij Mishra',
    title: 'Dean, Scaler School of Technology',
    avatar: '👨‍🏫',
    color: '#DC2626',
    suggestions: [
      'How do I get better at DSA without just grinding LeetCode?',
      'What\'s your advice for someone struggling in their first year of CS?',
      'How did you end up becoming a teacher?',
      'What\'s the most important thing to master before system design?',
    ],
  },
};

function App() {
  const [selectedPersona, setSelectedPersona] = useState('anshuman');
  const [chatHistories, setChatHistories] = useState({
    anshuman: [],
    abhimanyu: [],
    kshitij: []
  });

  const handleSetMessages = (updater) => {
    setChatHistories((prev) => {
      const currentMessages = prev[selectedPersona] || [];
      const newMessages = typeof updater === 'function' ? updater(currentMessages) : updater;
      return {
        ...prev,
        [selectedPersona]: newMessages
      };
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🎓 Scaler Personas AI</h1>
        <p className="app-subtitle">Chat with Scaler Academy's founders</p>
      </header>

      <PersonaSwitcher
        personas={personas}
        selectedPersona={selectedPersona}
        onSelectPersona={setSelectedPersona}
      />

      <Chat
        persona={selectedPersona}
        personaData={personas[selectedPersona]}
        messages={chatHistories[selectedPersona]}
        setMessages={handleSetMessages}
      />
    </div>
  );
}

export default App;
