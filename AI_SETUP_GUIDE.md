# 🚀 Full Stack AI Agent Setup Guide

Complete setup for running your portfolio with AI Chat Assistant

---

## 📊 Architecture Overview

```
Your Next.js Portfolio (Port 3000)
        ↓
AIChat Component (React)
        ↓
FastAPI Backend (Port 8000)
        ↓
OpenAI API (GPT-3.5-turbo)
```

---

## 🎯 Phase 1: Frontend Setup (Next.js)

### Prerequisites
- Node.js v18+ installed
- npm installed

### Steps

```bash
# Navigate to project root
cd d:\RESUME

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in browser
```

✅ You should see the portfolio with a **🤖 AI Assistant** button in bottom-right

---

## 🎯 Phase 2: Backend Setup (FastAPI)

### Prerequisites
- Python 3.8+ installed
- pip installed
- OpenAI API key (get from https://platform.openai.com/api-keys)

### Steps

#### 2.1: Setup Virtual Environment

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate it
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate
```

#### 2.2: Install Dependencies

```bash
pip install -r requirements.txt
```

#### 2.3: Setup Environment Variables

```bash
# Copy example file
copy .env.example .env

# Edit .env with your OpenAI API key
# (Open .env file and add: OPENAI_API_KEY=sk-...)
```

#### 2.4: Run the Backend

```bash
python main.py
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8000
INFO:     Application startup complete
```

### 2.5: Test the API

- Visit http://localhost:8000/docs
- Click on "POST /api/chat"
- Click "Try it out"
- Enter message: "Tell me about your experience"
- Click "Execute"
- You should get a response!

---

## ✅ Final Test: Full Integration

1. **Frontend running:** http://localhost:3000
2. **Backend running:** http://localhost:8000
3. **Click the 🤖 AI Assistant button** in bottom-right
4. **Send a message:** "What are your skills?"
5. **See the response!** 🎉

---

## 🔧 Troubleshooting

### Frontend Issues

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Module not found error:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Backend Issues

**Python not recognized:**
- Install Python from https://www.python.org/
- Restart terminal after installation

**Port 8000 already in use:**
```bash
# Find process using port 8000 and kill it
# Or change port in main.py
```

**OpenAI API key not working:**
- Verify key format: starts with `sk-`
- Check account has API credits
- Test key in OpenAI dashboard

**Connection refused:**
- Make sure backend is running
- Check both services on correct ports
- Verify CORS settings in main.py

### Chat Not Working

**Check backend is running:** `http://localhost:8000/docs`  
**Check frontend console:** Press F12 → Console → look for errors  
**Check both servers communicating:**

```bash
# From another terminal:
curl http://localhost:8000/api/health
```

---

## 🚀 Deployment (Production)

### Option 1: Heroku

**Frontend (Vercel):**
```bash
npm install -g vercel
vercel
```

**Backend (Heroku):**
```bash
heroku create your-portfolio-api
git push heroku main
heroku config:set OPENAI_API_KEY=sk-...
```

### Option 2: Docker

See `docker-compose.yml` in root directory

```bash
docker-compose up
```

---

## 📚 API Reference

### Chat Endpoint

**POST** `/api/chat`

Request:
```json
{
  "message": "What projects have you built?",
  "chat_history": []
}
```

Response:
```json
{
  "response": "Adhithya has built several projects including...",
  "timestamp": "2024-01-15T10:30:00.123456",
  "success": true
}
```

### Health Check

**GET** `/api/health`

Response:
```json
{
  "status": "healthy",
  "service": "Portfolio AI Agent",
  "timestamp": "2024-01-15T10:30:00.123456"
}
```

---

## 🎓 Next Steps / Advanced Features

### Phase 3: Add Memory (Persistence)

```python
# Add to backend:
from langchain.memory import ConversationBufferMemory
```

### Phase 4: Add Tool Calling

Enable the agent to:
- Send emails
- Schedule meetings
- Search your portfolio data

### Phase 5: Add RAG (Retrieval-Augmented Generation)

- Upload your projects/resume
- Agent searches your documents
- Provides more accurate answers

### Phase 6: Add Voice

- Speech-to-text input
- Text-to-speech responses
- Browser WebAPI

---

## 📞 Support

Having issues? Check:

1. **Frontend console** (F12 → Console tab)
2. **Backend logs** (terminal where you ran `python main.py`)
3. **API health:** http://localhost:8000/docs
4. **Network requests** (F12 → Network tab)

---

## 🎉 Congratulations!

You now have a full-stack AI-powered portfolio with:
- ✅ Beautiful Next.js frontend
- ✅ Intelligent AI chat assistant
- ✅ FastAPI backend
- ✅ OpenAI integration

**Next:** Customize the system prompt in `backend/main.py` to better match your experience!
