# 🎪 AI Chat Assistant - Reference Card

**Print this or bookmark it for quick reference!**

---

## ⚡ Quick Commands

### Start Backend
```bash
cd backend
venv\Scripts\activate
python main.py
```

### Start Frontend
```bash
npm run dev
```

### Visit Website
```
http://localhost:3000
```

### View API Docs
```
http://localhost:8000/docs
```

### Health Check
```bash
curl http://localhost:8000/api/health
```

---

## 📂 File Locations

| What | Where |
|-----|-------|
| Chat Component | `src/components/AIChat.tsx` |
| Backend Server | `backend/main.py` |
| System Prompt | `backend/main.py` line ~50 |
| Config | `backend/.env` |
| Setup Guide | `AI_SETUP_GUIDE.md` |
| API Docs | http://localhost:8000/docs |

---

## 🎨 Customization Quick Tips

### Change Chat Colors
File: `src/components/AIChat.tsx`
```
Line 75:  Header gradient
Line 115: User message color
Line 115: AI message color
```

### Change AI Personality
File: `backend/main.py`
```
Line ~50: SYSTEM_PROMPT
Edit the prompt text
```

### Change Welcome Message
File: `src/components/AIChat.tsx`
```
Line ~161: Welcome text
Line ~164: Tips list
```

### Change Button Position
File: `src/components/AIChat.tsx`
```
Line 54: "fixed bottom-6 right-6"
         Change to: bottom-6 left-6 / top-6 right-6
```

---

## 🔧 Key Settings

### OpenAI Model
```python
# backend/main.py line ~115
model="gpt-3.5-turbo"
```

### API Endpoint
```typescript
// src/components/AIChat.tsx line ~107
'http://localhost:8000/api/chat'
```

### CORS Origins
```python
# backend/main.py line ~21
allow_origins=["http://localhost:3000", ...]
```

### Temperature
```python
# backend/main.py line ~116
temperature=0.7
```

### Max Tokens
```python
# backend/main.py line ~117
max_tokens=500
```

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Backend won't start | Check Python version (3.8+) |
| Frontend won't start | Check Node.js version (18+) |
| Chat not responding | Check .env has API key |
| Port 8000 in use | Use: `python main.py -p 8001` |
| Port 3000 in use | Use: `npm run dev -- -p 3001` |
| Import errors | Run: `pip install -r requirements.txt` |
| CORS errors | Backend is configured, shouldn't happen |

---

## 📡 API Endpoints

### Chat Endpoint
```
POST /api/chat
Content-Type: application/json

Request:
{
  "message": "Your question",
  "chat_history": []
}

Response:
{
  "response": "AI answer",
  "timestamp": "2024-01-15T10:30:00",
  "success": true
}
```

### Health Check
```
GET /api/health

Response:
{
  "status": "healthy",
  "service": "Portfolio AI Agent",
  "timestamp": "2024-01-15T10:30:00"
}
```

---

## 🔐 Security Checklist

- [ ] .env file created (not .env.example)
- [ ] OpenAI API key in .env
- [ ] .env added to .gitignore
- [ ] Never commit .env to git
- [ ] Backend on private port (8000 is ok for local)

---

## 📊 Performance

| Metric | Value |
|--------|-------|
| Chat Response | ~2-3 seconds |
| UI Response | ~100ms |
| API Latency | Depends on OpenAI |
| Token Cost | ~$0.0005 per message |
| Max Message Length | 500 tokens |

---

## 🚀 Deployment Checklist

### Before Deploying
- [ ] Test locally (30 min)
- [ ] Customize AI prompt (15 min)
- [ ] Verify error handling
- [ ] Check security
- [ ] Build frontend: `npm run build`

### Frontend (Vercel)
```bash
npm install -g vercel
vercel
```

### Backend (Heroku)
```bash
heroku create app-name
git push heroku main
heroku config:set OPENAI_API_KEY=sk-...
```

---

## 📚 Documentation Map

```
START HERE
    ↓
AI_QUICK_START.md (3 min)
    ↓
    ├─→ Just want to run it?
    │   └─→ AI_SETUP_GUIDE.md
    │
    ├─→ Want to understand?
    │   └─→ AI_VISUAL_GUIDE.md
    │
    └─→ Want to customize?
        └─→ CUSTOMIZATION_GUIDE.md
```

---

## 🎯 Success Indicators

✅ Working if:
- Backend starts without errors
- Frontend loads at localhost:3000
- 🤖 button visible
- Chat opens when clicked
- Can type message
- AI responds
- No console errors

---

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| Setup backend | 10 min |
| Setup frontend | 5 min |
| Get API key | 5 min |
| Test locally | 5 min |
| **Total** | **25 min** |
| Customize | 1-2 hours |
| Deploy | 1-2 hours |

---

## 🔗 Useful Links

- OpenAI API: https://platform.openai.com/
- Next.js Docs: https://nextjs.org/docs
- FastAPI Docs: https://fastapi.tiangolo.com/
- Vercel Deploy: https://vercel.com
- Heroku Deploy: https://heroku.com

---

## 💡 Pro Tips

1. **Copy system prompt** → Save to file → Backup before changes
2. **Test API first** → Use http://localhost:8000/docs
3. **Check logs** → Backend logs show all requests
4. **Monitor costs** → Set OpenAI usage alerts
5. **Version control** → Commit after customization

---

## 🎪 Environment Variables

```bash
# backend/.env

# Required
OPENAI_API_KEY=sk-your-key-here

# Optional but recommended
HOST=0.0.0.0
PORT=8000
DEBUG=False

# Portfolio info
PORTFOLIO_OWNER=Adhithya N
PORTFOLIO_EMAIL=adhithya@example.com
```

---

## 🎨 Color Palette

Predefined gradients you can use:

```
Purple to Blue:    from-purple-600 to-blue-600
Red to Orange:     from-red-600 to-orange-600
Green to Emerald:  from-green-600 to-emerald-600
Indigo to Purple:  from-indigo-600 to-purple-600
Pink to Rose:      from-pink-600 to-rose-600
```

Use in: `src/components/AIChat.tsx`

---

## 📞 Quick Help

**Can't find something?**
- Use browser Find (Ctrl+F) to search docs
- Check `AI_CHAT_INDEX.md` for navigation
- See `FINAL_SUMMARY.md` for overview

**Want to explore more?**
- See `CUSTOMIZATION_GUIDE.md` section 9-10
- Check `backend/agent.py` for advanced features

---

## ✨ What's Next After Setup?

1. ✅ Get it running (today)
2. ✅ Customize colors (today)
3. ✅ Update system prompt (today)
4. → Deploy to production (this week)
5. → Add advanced features (next week)
6. → Monitor and improve (ongoing)

---

## 🎉 Remember

- **It's working!** No need to rebuild everything
- **Just run the commands** and it works
- **Customization is easy** - just edit text
- **Documentation is complete** - everything explained
- **You got this!** 🚀

---

**Print this page or bookmark it!**

Everything you need to know is here.

Good luck! 🌟
