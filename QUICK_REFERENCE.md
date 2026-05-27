# AI Chat - Quick Reference Card

## 🚀 Get Started in 5 Minutes

### 1️⃣ Setup OpenAI Key
```bash
# Create backend/.env
echo OPENAI_API_KEY=sk-your-key-here > backend/.env
```

### 2️⃣ Start Backend
```bash
cd backend
python -m venv venv
venv\Scripts\Activate  # Windows
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### 3️⃣ Start Frontend
```bash
npm install
npm run dev
```

### 4️⃣ Test
- Open http://localhost:3000
- Click 🤖 button
- Ask a question
- Done! ✅

---

## 📂 File Structure

```
project/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AIChat.tsx ✨ ← Chat Component
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── data/
│   │   └── portfolio.ts
│   └── styles/
│       └── globals.css
├── backend/
│   ├── main.py ✨ ← Backend API
│   ├── requirements.txt ✨
│   ├── .env ✨ ← Create this (API key here)
│   └── venv/ (virtual env)
├── package.json ✨
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## 🔧 Configuration Files

### `.env` (Backend)
```env
OPENAI_API_KEY=sk-xxxxx
```

### `package.json` (Frontend)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

### `backend/requirements.txt`
```
fastapi==0.104.1
uvicorn==0.24.0
openai==1.3.0
python-dotenv==1.0.0
```

---

## 🌐 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/` | Health check |
| GET | `/docs` | API documentation |
| POST | `/api/chat` | Send message |

### POST /api/chat Example
```json
{
  "message": "Tell me about your projects",
  "chat_history": []
}
```

### Response
```json
{
  "response": "I have worked on...",
  "timestamp": "2024-01-15T10:30:10",
  "success": true
}
```

---

## ⚙️ Key Parameters

### Backend Customization

**`backend/main.py`**

```python
# AI Model (line 123)
model="gpt-3.5-turbo"  # Change to "gpt-4"

# Behavior (line 124-127)
temperature=0.7        # 0-1, higher = more creative
max_tokens=500         # Response length limit
top_p=0.9             # Diversity control

# CORS (line 23-28)
allow_origins=["http://localhost:3000"]  # Add your domain

# System Prompt (line 44)
SYSTEM_PROMPT = """You are..."""  # Customize personality
```

### Frontend Customization

**`src/components/AIChat.tsx`**

```typescript
// API URL (line 42)
const response = await fetch('http://localhost:8000/api/chat', {

// Position (line 93)
className="fixed bottom-6 right-6"  // Change position

// Size (line 100)
className="w-96 h-[600px]"  # Change dimensions

// Colors (line 104)
className="bg-gradient-to-r from-purple-600 to-blue-600"
```

---

## 🧪 Testing

### Test Backend Health
```bash
curl http://localhost:8000/
# Expected: {"status":"ok","service":"Portfolio AI Agent","version":"1.0.0"}
```

### Test API Endpoint
```bash
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello","chat_history":[]}'
```

### View API Docs
```
http://localhost:8000/docs
```

---

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| OPENAI_API_KEY error | Create `backend/.env` with API key |
| Can't connect to backend | Check backend running on port 8000 |
| No chat widget visible | Ensure `AIChat` imported in `page.tsx` |
| Slow responses | Normal (2-5s), or reduce `max_tokens` |
| CORS error | Add frontend URL to `allow_origins` |
| API key rejected | Check key is valid, has credits |

---

## 📊 System Architecture

```
┌─────────────────────┐
│   Next.js (3000)    │ ← Your Portfolio
│   ├─ AIChat Widget  │
│   └─ Other Pages    │
└────────────┬────────┘
             │ HTTP
┌────────────▼────────┐
│ FastAPI (8000)      │ ← Your Backend
│ ├─ /api/chat        │
│ └─ /docs            │
└────────────┬────────┘
             │ HTTPS
┌────────────▼────────┐
│  OpenAI API         │ ← AI Engine
│  GPT-3.5-Turbo      │
└─────────────────────┘
```

---

## 🚀 Deployment Commands

### Build Frontend
```bash
npm run build
npm start  # Test production build
```

### Build Backend
```bash
# Backend is already in production mode with:
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Deploy to Vercel (Frontend)
```bash
vercel deploy
```

### Deploy to Railway (Backend)
```
1. Connect GitHub repo
2. Set OPENAI_API_KEY env var
3. Deploy (auto on push)
```

---

## 📈 Performance Tips

### Frontend Optimization
- Lazy load chat component
- Debounce input events
- Implement message virtualization

### Backend Optimization
- Cache common responses
- Add rate limiting
- Monitor API costs

### Cost Reduction
- Use `gpt-3.5-turbo` (cheaper than gpt-4)
- Reduce `max_tokens`
- Implement response caching

---

## 🔐 Security Checklist

- ✅ API key in `.env`, not in code
- ✅ `.gitignore` includes `.env`
- ✅ CORS restricted to known domains
- ✅ Input validation enabled
- ✅ No sensitive data in error messages
- ⚠️ Consider adding rate limiting
- ⚠️ Consider adding authentication

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [OpenAI API](https://platform.openai.com/docs)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🎯 Next Steps

1. ✅ Get OpenAI API key
2. ✅ Create `.env` file
3. ✅ Run backend: `uvicorn main:app --reload`
4. ✅ Run frontend: `npm run dev`
5. ✅ Test at http://localhost:3000
6. ⬜ Customize system prompt
7. ⬜ Customize widget appearance
8. ⬜ Deploy to production

---

## 💡 Pro Tips

- Use `/docs` endpoint for interactive API testing
- Keep API key in separate `.env` file
- Monitor OpenAI usage in dashboard
- Update system prompt regularly
- Test different models/temperatures
- Add user feedback on responses
- Implement chat history persistence

---

## 📞 Quick Links

| Resource | Link |
|----------|------|
| OpenAI Keys | https://platform.openai.com/account/api-keys |
| FastAPI UI | http://localhost:8000/docs |
| Frontend | http://localhost:3000 |
| Portfolio Data | `src/data/portfolio.ts` |

---

## 🎓 Architecture Summary

```
Your Website (Next.js)
    ↓
User clicks 🤖 button
    ↓
Chat widget opens
    ↓
User types message
    ↓
Frontend sends to Backend (FastAPI)
    ↓
Backend calls OpenAI API
    ↓
OpenAI returns response
    ↓
Backend sends to Frontend
    ↓
Chat displays response
    ↓
User sees answer
```

---

**Last Updated**: May 18, 2026  
**Version**: 1.0.0  
**Status**: Ready to Deploy ✅  
**Estimated Setup Time**: 5-10 minutes  
**Estimated Customization Time**: 15-30 minutes
