import './PersonaSwitcher.css';

function PersonaSwitcher({ personas, selectedPersona, onSelectPersona }) {
  return (
    <div className="persona-switcher">
      {Object.entries(personas).map(([key, persona]) => (
        <button
          key={key}
          className={`persona-button ${selectedPersona === key ? 'active' : ''}`}
          onClick={() => onSelectPersona(key)}
          style={{
            '--button-color': persona.color,
          }}
        >
          <span className="persona-button-avatar">{persona.avatar}</span>
          <span className="persona-button-name">{persona.name.split(' ')[0]}</span>
        </button>
      ))}
    </div>
  );
}

export default PersonaSwitcher;
