# AI Chat Architecture Guide

## 📊 System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER INTERFACE (Next.js)                     │
├─────────────────────────────────────────────────────────────────┤
│  Portfolio Website (Port 3000)                                   │
│  ├── Next.js 14 App Router                                      │
│  ├── React 18 Components                                        │
│  ├── Tailwind CSS + Framer Motion                              │
│  └── AIChat Component (Floating Widget)                         │
└────────────────────────────┬────────────────────────────────────┘
                             │
                    HTTP/REST API
                   (POST /api/chat)
                             │
┌────────────────────────────▼────────────────────────────────────┐
│              BACKEND API (FastAPI - Python)                     │
├─────────────────────────────────────────────────────────────────┤
│  Backend Server (Port 8000)                                     │
│  ├── FastAPI Framework                                         │
│  ├── CORS Middleware (Allow Frontend)                          │
│  ├── Message Processing                                        │
│  ├── Chat History Management                                   │
│  └── System Prompt Configuration                              │
└────────────────────────────┬────────────────────────────────────┘
                             │
                   OpenAI API Integration
                  (GPT-3.5-Turbo)
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                  AI MODELS & AGENTS                             │
├─────────────────────────────────────────────────────────────────┤
│  ├── OpenAI (GPT-3.5-Turbo) ✅ Currently Implemented           │
│  ├── Claude Integration (Optional)                             │
│  ├── Google Gemini (Optional)                                  │
│  └── LangChain Agent (For Complex Reasoning)                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Current Implementation Status

### ✅ Already Implemented

#### 1. **Frontend - Next.js Chat Component**
- **File**: `src/components/AIChat.tsx`
- **Features**:
  - Floating chat widget (bottom-right corner)
  - Minimizable/maximizable interface
  - Message history with timestamps
  - Auto-scroll to latest messages
  - Loading states with spinner
  - Error handling
  - Professional UI with gradient theme

#### 2. **Backend - FastAPI Server**
- **File**: `backend/main.py`
- **Features**:
  - RESTful API endpoints
  - CORS middleware for frontend access
  - OpenAI API integration
  - Message history context management
  - Custom system prompt for portfolio assistant
  - Error handling and validation

#### 3. **Environment Setup**
- **File**: `backend/requirements.txt`
- **Packages**:
  - `fastapi` - Web framework
  - `uvicorn` - ASGI server
  - `openai` - OpenAI API client
  - `langchain` - AI agent framework (optional)
  - `python-dotenv` - Environment management

---

## 🚀 Quick Start Guide

### Prerequisites
- Python 3.8+
- Node.js 16+
- OpenAI API Key

### Step 1: Setup Backend

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
echo OPENAI_API_KEY=your_api_key_here > .env

# Run backend server
uvicorn main:app --reload --port 8000
```

### Step 2: Setup Frontend

```bash
# In root directory
npm install

# Run Next.js dev server
npm run dev
```

### Step 3: Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

---

## 📝 API Endpoint Documentation

### POST `/api/chat`

**Request Body**:
```json
{
  "message": "Tell me about your projects",
  "chat_history": [
    {
      "role": "user",
      "content": "Hello",
      "timestamp": "2024-01-15T10:30:00"
    },
    {
      "role": "assistant",
      "content": "Hi there! How can I help?",
      "timestamp": "2024-01-15T10:30:05"
    }
  ]
}
```

**Response**:
```json
{
  "response": "I have several exciting projects including...",
  "timestamp": "2024-01-15T10:30:10",
  "success": true
}
```

**Error Response** (400):
```json
{
  "detail": "Message cannot be empty"
}
```

---

## 🎯 System Prompt Architecture

The AI assistant uses a comprehensive system prompt that:

1. **Role Definition**: Represents the portfolio owner professionally
2. **Scope Setting**: Limits responses to portfolio-related queries
3. **Communication Style**: Professional, friendly, and concise
4. **Context Awareness**: Knows background, skills, and projects
5. **Action Orientation**: Provides next steps and contact information

### Current System Prompt Focus Areas:
- Professional experience and background
- Skills and technical expertise
- Projects and case studies
- Education and certifications
- Contact and opportunity information
- Technical knowledge demonstration

---

## 🔧 Configuration Guide

### Frontend Configuration

**File**: `src/components/AIChat.tsx`

Key configurable sections:
```typescript
// API endpoint (Line 42)
const response = await fetch('http://localhost:8000/api/chat', {

// Chat widget styling (Line 93)
className="fixed bottom-6 right-6 ..."

// Widget dimensions (Line 100)
className="fixed bottom-6 right-6 w-96 h-[600px] ..."
```

### Backend Configuration

**File**: `backend/main.py`

Key configurable sections:
```python
# CORS allowed origins (Line 23-28)
allow_origins=["http://localhost:3000", "http://localhost:3001", "*"]

# API Model (Line 123)
model="gpt-3.5-turbo"

# Temperature & Parameters (Line 124-127)
temperature=0.7
max_tokens=500
top_p=0.9
```

---

## 📦 Architecture Components

### Component Hierarchy

```
Next.js App
├── Layout (with Navbar)
├── Main Page Content
│   ├── Hero Section
│   ├── About Section
│   ├── Skills Section
│   ├── Projects Section
│   ├── Certifications Section
│   └── Contact Section
└── AIChat Component (Floating Widget)
    ├── Chat Header
    ├── Message List
    ├── Loading Indicator
    └── Input Field with Send Button
```

### Data Flow

```
User Input in AIChat
        ↓
Frontend State Update (messages)
        ↓
POST /api/chat Request
        ↓
Backend Process Message
        ↓
OpenAI API Call
        ↓
Parse Response
        ↓
ChatResponse Object
        ↓
Update Frontend Messages
        ↓
Display in Chat Widget
```

---

## 🎨 Customization Options

### 1. Change AI Model

**Backend** (`backend/main.py`, Line 123):
```python
# Current
model="gpt-3.5-turbo"

# Change to
model="gpt-4"
model="gpt-4-turbo-preview"
```

### 2. Adjust AI Behavior

**Backend** (`backend/main.py`, Line 124-127):
```python
temperature=0.7      # 0=deterministic, 1=creative
max_tokens=500       # Response length
top_p=0.9           # Diversity parameter
```

### 3. Customize Widget Appearance

**Frontend** (`src/components/AIChat.tsx`):
```typescript
// Position
className="fixed bottom-6 right-6"  // Change to bottom-6 left-6, etc.

// Size
className="w-96 h-[600px]"  // Adjust width and height

// Colors
className="bg-gradient-to-r from-purple-600 to-blue-600"
```

### 4. Modify System Prompt

**Backend** (`backend/main.py`, Line 44):
```python
SYSTEM_PROMPT = """You are an AI assistant representing Adhithya N...
```

---

## 🔌 Integration Options

### Option 1: Use Claude API
```python
# Install client
pip install anthropic

# Initialize
from anthropic import Anthropic
client = Anthropic(api_key=ANTHROPIC_API_KEY)
```

### Option 2: Use Google Gemini
```python
# Install client
pip install google-generativeai

# Initialize
import google.generativeai as genai
genai.configure(api_key=GEMINI_API_KEY)
```

### Option 3: Use LangChain Agents
```python
from langchain.agents import initialize_agent
from langchain.llms import OpenAI

llm = OpenAI(api_key=OPENAI_API_KEY)
agent = initialize_agent(
    tools=[...],
    llm=llm,
    agent="zero-shot-react-description",
    verbose=True
)
```

---

## 🐛 Troubleshooting

### Issue: CORS Error
**Solution**: Add frontend URL to `allow_origins` in `backend/main.py`

### Issue: API Timeout
**Solution**: Increase `max_tokens` or reduce `temperature` in backend config

### Issue: No Response from AI
**Solution**: Check if `OPENAI_API_KEY` is set correctly in `.env`

### Issue: Chat Widget Not Appearing
**Solution**: Ensure `AIChat` component is imported in `src/app/page.tsx`

---

## 📊 Performance Optimization

### Frontend
- Lazy load chat component
- Implement message virtualization for large chat histories
- Debounce input events

### Backend
- Implement caching for common queries
- Add rate limiting
- Use connection pooling for API requests

---

## 🔐 Security Considerations

### Current Implementation
- ✅ CORS protection
- ✅ Input validation
- ✅ Error handling

### Recommended Enhancements
- [ ] API Key protection (never expose in frontend)
- [ ] Rate limiting per IP
- [ ] Message length limits
- [ ] Authentication tokens
- [ ] Logging and monitoring

---

## 📈 Deployment Guide

### Deploy Backend (FastAPI)

**Option 1: Heroku**
```bash
heroku create your-app-name
git push heroku main
```

**Option 2: Railway/Render**
- Connect GitHub repo
- Set `OPENAI_API_KEY` environment variable
- Deploy

### Deploy Frontend (Next.js)

**Option 1: Vercel** (Recommended)
```bash
vercel deploy
```

**Option 2: Netlify**
- Connect GitHub repo
- Build command: `npm run build`
- Publish directory: `.next`

---

## 📚 File Reference

| File | Purpose | Status |
|------|---------|--------|
| `src/components/AIChat.tsx` | Chat UI Component | ✅ Complete |
| `backend/main.py` | Backend API | ✅ Complete |
| `backend/requirements.txt` | Python Dependencies | ✅ Complete |
| `package.json` | Node Dependencies | ✅ Complete |
| `.env` | Environment Variables | ⚠️ Needs Setup |
| `src/data/portfolio.ts` | Portfolio Content | ⚠️ May need updates |

---

## 🎓 Next Steps

1. **Set up `.env` file** with your OpenAI API key
2. **Run backend server** (`python backend/main.py`)
3. **Run frontend dev server** (`npm run dev`)
4. **Test chat functionality** at http://localhost:3000
5. **Customize system prompt** for your specific portfolio
6. **Deploy** to production (Vercel + Render/Railway)

---

## 📞 Support & Resources

- **OpenAI API Docs**: https://platform.openai.com/docs
- **FastAPI Docs**: https://fastapi.tiangolo.com/
- **Next.js Docs**: https://nextjs.org/docs
- **LangChain Docs**: https://python.langchain.com/

---

**Last Updated**: May 18, 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
