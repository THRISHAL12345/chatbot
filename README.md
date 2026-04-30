# Scaler Persona AI Chatbot 🚀

A highly responsive, multi-persona AI chatbot built for a Scaler/InterviewBit assignment. This application lets users have real, multi-turn conversations with three distinct personalities: **Anshuman Singh**, **Abhimanyu Saxena**, and **Kshitij Mishra**. 

The app features a **Clean Minimalist Modern UI**, extremely fast AI inference via **Groq**, and seamless state management that remembers your chat history when switching between personas.

🔗 **Live Demo:** [https://chatbot-scalerassignment.netlify.app/](https://chatbot-scalerassignment.netlify.app/)

## ✨ Features
- **Three Distinct Personas:** Custom-engineered system prompts for three different personalities, complete with unique communication styles, backgrounds, and values.
- **Blazing Fast AI:** Powered by the **Groq API** (`llama-3.3-70b-versatile`), eliminating capacity limits and providing instant streaming-like responses.
- **Premium UI/UX:** A stunning minimalist layout with elegant typography (Inter), soft drop shadows, floating cards, and beautiful transitions.
- **Persistent State:** Chat histories are saved independently for each persona during your session, allowing you to seamlessly switch back and forth without losing context.
- **Serverless Architecture:** The Express backend is wrapped as a serverless function and hosted entirely on Netlify for seamless full-stack deployment.

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Vanilla CSS
- **Backend:** Node.js, Express, `serverless-http`
- **AI Provider:** Groq SDK (Llama-3.3-70b)
- **Deployment:** Netlify (Static Hosting + Netlify Functions)

## 🚀 Running Locally

To run this project on your local machine, you'll need two terminal windows.

### 1. Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Add your **Groq API Key** to the new `.env` file:
   ```env
   GROQ_API_KEY=your_actual_key_here
   PORT=3001
   ```
5. Start the Express server:
   ```bash
   npm start
   ```

### 2. Frontend Setup
1. Open a second terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser!

## 📝 Assignment Requirements Fulfilled
- [x] Includes three separate, meticulously researched system prompts.
- [x] Includes 3 few-shot examples per persona.
- [x] Prevents prompt injection (configured in backend prompts).
- [x] Multi-turn memory (remembers context of the conversation).
- [x] Persona switching resets/separates the conversation correctly.
- [x] Frontend allows chatting and switching personas.
- [x] Uses modern CSS layout and rich aesthetics (Clean Minimalist).
- [x] No placeholders; fully functioning end-to-end.
- [x] Codebase is clean, components are separated, and `.env` is properly ignored.
- [x] **Live project deployed and functional.**
