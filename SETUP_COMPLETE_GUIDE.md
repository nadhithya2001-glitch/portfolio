# Complete AI Chat Setup Guide

## 🎯 Objective

You have a **Next.js Portfolio** + **FastAPI Backend** + **OpenAI AI Agent** architecture. This guide will walk you through getting it running in 5 steps.

---

## Step 1: Get Your OpenAI API Key

### Prerequisites
- OpenAI Account (https://platform.openai.com/account/api-keys)
- Active subscription or free trial with credits

### Process
1. Visit https://platform.openai.com/account/api-keys
2. Click "Create new secret key"
3. Copy the key (you won't see it again)
4. Keep it safe - treat it like a password

### Example Key Format
```
sk-proj-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## Step 2: Backend Setup (FastAPI)

### 2.1 Create Environment File

**Location**: `backend/.env`

```env
OPENAI_API_KEY=sk-your-key-here
```

⚠️ **Important**: Add `.env` to `.gitignore` so you never commit your API key

### 2.2 Create Python Virtual Environment

**Windows PowerShell**:
```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
```

**macOS/Linux**:
```bash
cd backend
python -m venv venv
source venv/bin/activate
```

### 2.3 Install Dependencies

```bash
pip install -r requirements.txt
```

**What gets installed**:
- `fastapi` - Web framework
- `uvicorn` - Server
- `openai` - OpenAI client
- `python-dotenv` - Load .env files
- `langchain` - AI tools (optional)

### 2.4 Verify Installation

```bash
pip list
```

You should see:
```
fastapi          0.104.1
uvicorn          0.24.0
openai           1.3.0
python-dotenv    1.0.0
```

### 2.5 Start Backend Server

```bash
uvicorn main:app --reload --port 8000
```

**Expected Output**:
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete
```

### 2.6 Test Backend Health

**Option 1: Browser**
- Visit http://localhost:8000/

**Option 2: Terminal**
```bash
curl http://localhost:8000/
```

**Expected Response**:
```json
{
  "status": "ok",
  "service": "Portfolio AI Agent",
  "version": "1.0.0"
}
```

### 2.7 View Interactive API Docs

- Visit http://localhost:8000/docs
- Try the `/api/chat` endpoint with test data

---

## Step 3: Frontend Setup (Next.js)

### 3.1 Install Node Dependencies

**Location**: Root directory (not in backend)

```bash
npm install
```

### 3.2 Verify Installation

```bash
npm list next react react-dom
```

You should see:
```
next@14.0.0
react@18.2.0
react-dom@18.2.0
```

### 3.3 Start Frontend Dev Server

```bash
npm run dev
```

**Expected Output**:
```
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local
```

### 3.4 Verify Frontend Loads

- Visit http://localhost:3000 in browser
- Should see your portfolio website
- Look for "🤖 AI Assistant" button in bottom-right corner

---

## Step 4: Test Integration

### 4.1 Open Chat Widget

1. Go to http://localhost:3000
2. Click the "🤖 AI Assistant" button in bottom-right
3. Chat window should open

### 4.2 Send Test Message

Type any question, e.g.:
```
Tell me about your projects
```

### 4.3 Verify Response

- Should see your message appear
- Should see "Thinking..." loading state
- Should see AI response after a few seconds

### If It Works ✅
Great! Your system is properly configured. Go to Step 5.

### If It Doesn't Work ❌
Check the **Troubleshooting** section below.

---

## Step 5: Customize for Your Portfolio

### 5.1 Update System Prompt

**File**: `backend/main.py` (around line 44)

**Find this**:
```python
SYSTEM_PROMPT = """You are an AI assistant representing Adhithya N's professional portfolio.
```

**Update to**:
```python
SYSTEM_PROMPT = """You are an AI assistant representing [YOUR NAME]'s professional portfolio.

Your role is to:
1. Answer questions about [YOUR NAME]'s professional experience, skills, and projects
2. Provide information about education and certifications
3. Guide visitors on how to contact [YOUR NAME] for opportunities
...

Important information about [YOUR NAME]:
- [Your background/expertise]
- [Your tech stack]
- [Your goals]
- [Your contact method]
...
"""
```

### 5.2 Customize Widget Appearance

**File**: `src/components/AIChat.tsx` (around line 93)

**Change position** (line 93):
```typescript
// Bottom-right (current)
className="fixed bottom-6 right-6"

// Or bottom-left
className="fixed bottom-6 left-6"

// Or top-right
className="fixed top-6 right-6"
```

**Change size** (line 100):
```typescript
// Current: 384px wide, 600px tall
className="fixed bottom-6 right-6 w-96 h-[600px]"

// Or smaller
className="fixed bottom-6 right-6 w-80 h-[500px]"

// Or larger
className="fixed bottom-6 right-6 w-full sm:w-96 h-[600px]"
```

**Change colors** (line 104):
```typescript
// Current: purple to blue gradient
className="bg-gradient-to-r from-purple-600 to-blue-600"

// Or try other gradients
className="bg-gradient-to-r from-blue-600 to-cyan-600"
className="bg-gradient-to-r from-indigo-600 to-purple-600"
className="bg-gradient-to-r from-emerald-600 to-teal-600"
```

### 5.3 Adjust AI Behavior

**File**: `backend/main.py` (around line 123)

**Temperature** (Creativity):
```python
temperature=0.7  # 0=deterministic, 1=very creative
```
- `0.3` = More factual and consistent
- `0.7` = Balanced (current)
- `1.0` = More creative

**Max Tokens** (Response Length):
```python
max_tokens=500  # Maximum response length
```
- `250` = Shorter responses
- `500` = Medium (current)
- `1000` = Longer responses

**Model Selection**:
```python
model="gpt-3.5-turbo"  # Current (fast & cheap)
```
- `gpt-3.5-turbo` = Fast & affordable
- `gpt-4` = Smarter but slower & expensive
- `gpt-4-turbo-preview` = Better balance

---

## 🐛 Troubleshooting

### Problem: "OPENAI_API_KEY not found"

**Symptom**: Backend crashes with:
```
ValueError: OPENAI_API_KEY environment variable is not set
```

**Solution**:
1. Create `backend/.env` file
2. Add: `OPENAI_API_KEY=sk-your-key-here`
3. Restart backend

### Problem: Backend Refuses Connection

**Symptom**:
```
ERROR: Could not connect to localhost:8000
```

**Solution**:
1. Check if backend is running: `uvicorn main:app --reload --port 8000`
2. Check port 8000 isn't used by another app
3. Try different port: `uvicorn main:app --reload --port 8001`

### Problem: Chat Shows Error Message

**Symptom**: Chat says "Sorry, I encountered an error"

**Solution**:
1. Check backend console for errors
2. Verify API key is valid
3. Check OpenAI account has credits
4. Check CORS settings in `backend/main.py`

### Problem: Chat Widget Doesn't Appear

**Symptom**: No "🤖 AI Assistant" button visible

**Solution**:
1. Check if `AIChat.tsx` is imported in `src/app/page.tsx`
2. Look for import: `import AIChat from '@/components/AIChat'`
3. Look for usage: `<AIChat />`
4. Check browser console for errors (F12)

### Problem: Frontend Can't Connect to Backend

**Symptom**: Messages sent but no response

**Solution**:
1. Verify backend is running on port 8000
2. Check frontend API URL in `AIChat.tsx`:
   ```typescript
   const response = await fetch('http://localhost:8000/api/chat', {
   ```
3. Check CORS is enabled in `backend/main.py`:
   ```python
   allow_origins=["http://localhost:3000", "*"]
   ```

### Problem: Slow Response Times

**Symptom**: Takes 10+ seconds to get response

**Solution**:
- OpenAI API latency is normal (2-5 seconds)
- Check internet connection
- Reduce `max_tokens` to make responses shorter
- Try `gpt-3.5-turbo` instead of `gpt-4`

---

## 📊 What's Running Where?

| Service | URL | Port | Language | Command |
|---------|-----|------|----------|---------|
| Frontend | http://localhost:3000 | 3000 | React/Next.js | `npm run dev` |
| Backend API | http://localhost:8000 | 8000 | FastAPI/Python | `uvicorn main:app --reload` |
| API Docs | http://localhost:8000/docs | 8000 | Swagger UI | (auto) |
| OpenAI | https://api.openai.com | 443 | External API | (called by backend) |

---

## ✅ Success Checklist

- [ ] OpenAI API key obtained
- [ ] `.env` file created with API key
- [ ] Backend virtual environment created
- [ ] Dependencies installed (`pip install -r requirements.txt`)
- [ ] Backend running (`uvicorn main:app --reload`)
- [ ] Backend health check works
- [ ] Frontend dependencies installed (`npm install`)
- [ ] Frontend running (`npm run dev`)
- [ ] Portfolio loads at http://localhost:3000
- [ ] Chat widget appears
- [ ] Test message gets response
- [ ] System prompt customized
- [ ] Widget appearance customized

---

## 🚀 Next Steps After Setup

1. **Customize Content**: Update portfolio data in `src/data/portfolio.ts`
2. **Enhance Styling**: Modify Tailwind config in `tailwind.config.ts`
3. **Add More Features**: 
   - User feedback on responses
   - Chat history persistence
   - Multiple AI model options
4. **Deploy**:
   - Frontend to Vercel
   - Backend to Railway or Render
5. **Monitor**: Track API usage and costs

---

## 📞 Quick Command Reference

```bash
# Start everything
# Terminal 1 - Backend
cd backend && source venv/bin/activate && uvicorn main:app --reload

# Terminal 2 - Frontend
npm run dev

# Health checks
curl http://localhost:8000/  # Backend health
curl http://localhost:3000/  # Frontend health

# Stop servers
# Ctrl+C in each terminal

# Rebuild after changes
npm run build  # Frontend
uvicorn main:app --reload  # Backend (auto-reloads)
```

---

## 📚 Resources

- **Next.js**: https://nextjs.org/docs
- **FastAPI**: https://fastapi.tiangolo.com/
- **OpenAI API**: https://platform.openai.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **LangChain**: https://python.langchain.com/

---

**Last Updated**: May 18, 2026
**Version**: 1.0.0 Setup Guide
**Status**: Ready to Deploy ✅
