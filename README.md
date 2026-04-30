# 🎓 Scaler Personas AI Chatbot

A sophisticated persona-based AI chatbot that enables real conversations with three Scaler Academy co-founders: **Anshuman Singh**, **Abhimanyu Saxena**, and **Kshitij Mishra**. This project demonstrates advanced prompt engineering techniques including system prompts, few-shot learning, chain-of-thought reasoning, and persona emulation.

![Scaler Personas AI](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-orange)

## 🌟 Features

✅ **Three Distinct Personas** - Chat with Anshuman, Abhimanyu, or Kshitij, each with unique personalities and communication styles  
✅ **Intelligent Conversation** - GPT-4 powered responses that accurately reflect each founder's expertise and viewpoint  
✅ **Persona Switching** - Seamlessly switch between personas; conversations reset automatically  
✅ **Suggestion Chips** - Quick-start questions tailored to each persona's domain  
✅ **Typing Indicator** - Real-time visual feedback while the AI generates responses  
✅ **Error Handling** - Graceful error messages with actionable guidance  
✅ **Fully Responsive** - Beautiful UI that works perfectly on mobile, tablet, and desktop  
✅ **Modern Tech Stack** - React + Vite frontend, Express backend, OpenAI API integration

## 🚀 Live Demo

**Deployed Application:** [Add your deployment URL here]

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **CSS3** - Custom responsive styling with animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Minimalist web framework
- **Google Gemini API** - Gemini Pro for intelligent responses
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Google Gemini API Key** - [Get one here](https://makersuite.google.com/app/apikey)

## ⚙️ Installation & Setup

### 1. Add Your Google Gemini API Key

```bash
# Edit backend/.env file
# Replace 'your_gemini_api_key_here' with your actual Gemini API key
# Get it from: https://makersuite.google.com/app/apikey
# GEMINI_API_KEY=your-actual-key-here
```

### 2. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Run the Application

**Terminal 1 - Start Backend Server:**
```bash
cd backend
npm start
```
Backend runs on `http://localhost:3001`

**Terminal 2 - Start Frontend Dev Server:**
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:5173`

### 4. Open in Browser

Navigate to `http://localhost:5173` and start chatting!

## 🎯 Usage Guide

1. **Select a Persona** - Click on Anshuman, Abhimanyu, or Kshitij's button at the top
2. **Start Chatting** - Use the suggestion chips or type your own question
3. **Switch Personas** - Click another persona to reset and start a new conversation
4. **Watch the Magic** - Each persona responds with their unique style and expertise

## 🧠 Prompt Engineering Highlights

Each persona's system prompt includes:

- **Persona Description** - Detailed background, personality traits, and communication style
- **Few-Shot Examples** - 3+ example Q&A pairs demonstrating ideal responses
- **Chain-of-Thought Instructions** - Guides the model to reason step-by-step
- **Output Formatting** - Specifies response length, tone, and structure
- **Constraints** - Clear boundaries on what the persona should avoid

See `prompts.md` for the complete annotated prompts.

## 📁 Project Structure

```
chatbot-project/
├── backend/
│   ├── server.js           # Express server with OpenAI integration
│   ├── package.json        # Backend dependencies
│   └── .env.example        # Environment variables template
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Chat.jsx
│   │   │   ├── PersonaSwitcher.jsx
│   │   │   ├── Message.jsx
│   │   │   ├── SuggestionChips.jsx
│   │   │   └── TypingIndicator.jsx
│   │   ├── App.jsx         # Main app component
│   │   └── index.css       # Global styles
│   ├── package.json        # Frontend dependencies
│   └── .env.example        # Frontend environment template
├── prompts.md              # Annotated system prompts
├── reflection.md           # Project reflection (300-500 words)
├── README.md               # This file
├── .gitignore              # Git ignore rules
├── backend/.env            # Backend environment variables
└── frontend/.env           # Frontend environment variables
```

## 🔑 Environment Variables

### Backend (.env)
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3001  # or your deployed backend URL
```

## 🧪 Testing

### Test Backend API
```bash
curl http://localhost:3001/api/health
```

### Test Chat Endpoint
```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Hello"}],"persona":"anshuman"}'
```

## 🐛 Troubleshooting

**Issue:** Frontend can't connect to backend
- **Solution:** Ensure backend is running on port 3001 and CORS is enabled

**Issue:** Gemini API errors
- **Solution:** Verify your API key is correct from Google AI Studio

**Issue:** Port already in use
- **Solution:** Change PORT in backend/.env or kill the process using that port

## 📝 Assignment Requirements Checklist

- ✅ Three working personas with distinct system prompts
- ✅ Few-shot examples (3+ per persona)
- ✅ Chain-of-thought instructions
- ✅ Output format specifications
- ✅ Persona switching with conversation reset
- ✅ Suggestion chips per persona
- ✅ Typing indicator
- ✅ Responsive design (mobile + desktop)
- ✅ API key stored in environment variables
- ✅ Graceful error handling
- ✅ Clean chat interface
- ✅ README.md with setup instructions
- ✅ prompts.md with annotated prompts
- ✅ reflection.md (300-500 words)

## 🤝 Contributing

This is an assignment project, but feedback is welcome! Feel free to open an issue or reach out.

## 📄 License

MIT License - feel free to use this project for learning purposes.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- **Scaler Academy** for the inspiration and excellent education
- **Anshuman Singh**, **Abhimanyu Saxena**, and **Kshitij Mishra** for their public content that made researching these personas possible
- **Google** for the free Gemini API

---

**Built with ❤️ for the Scaler Prompt Engineering Course**
