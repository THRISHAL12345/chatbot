import './SuggestionChips.css';

function SuggestionChips({ suggestions, onSuggestionClick, disabled }) {
  return (
    <div className="suggestion-chips">
      <p className="suggestion-label">💡 Quick start questions:</p>
      <div className="suggestion-chips-container">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="suggestion-chip"
            onClick={() => onSuggestionClick(suggestion)}
            disabled={disabled}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestionChips;
