# ⚙️ Customization Guide for AI Assistant

How to customize the AI Chat for your specific needs

---

## 1. 🎨 Customize Chat UI Colors

Edit `src/components/AIChat.tsx`:

### Change Header Gradient
```typescript
// Line ~75 - Change from purple-blue to your colors
className="bg-gradient-to-r from-purple-600 to-blue-600"

// Options:
// from-pink-600 to-red-600      (Red theme)
// from-green-600 to-emerald-600 (Green theme)
// from-indigo-600 to-purple-600 (Indigo theme)
// from-yellow-600 to-orange-600 (Orange theme)
```

### Change Button Colors
```typescript
// Line ~115 - User message background
className="bg-purple-600 text-white"

// Change to:
className="bg-blue-600 text-white"
```

### Change Assistant Message Color
```typescript
// Line ~115 - Assistant message background
className="bg-slate-700 text-slate-100"

// Change to:
className="bg-gray-700 text-gray-100"
```

---

## 2. 🤖 Customize AI Personality

Edit `backend/main.py` → `SYSTEM_PROMPT` (line ~50):

### Current (Generic)
```python
SYSTEM_PROMPT = """You are an AI assistant representing Adhithya N's professional portfolio. 
Your role is to:
1. Answer questions about Adhithya's experience...
"""
```

### Example 1: More Technical
```python
SYSTEM_PROMPT = """You are a technical AI assistant for Adhithya N's portfolio.

Expertise areas:
- Python, Data Science, Machine Learning
- Generative AI and LLMs
- Full-stack development
- Cloud technologies (AWS, GCP)

You are knowledgeable, detailed, and help with technical questions. 
When answering, provide specific examples from Adhithya's portfolio."""
```

### Example 2: More Friendly/Casual
```python
SYSTEM_PROMPT = """You're like Adhithya's digital friend helping visitors learn about them!

About Adhithya:
- Passionate about AI and tech
- Always learning and growing
- Loves helping others
- Based in [Your City]

Be warm, friendly, and enthusiastic! Share Adhithya's story in a conversational way."""
```

### Example 3: Business Focused
```python
SYSTEM_PROMPT = """You are a professional business development assistant for Adhithya N.

Your goals:
- Identify if visitor is potential client or employer
- Highlight relevant experience and accomplishments
- Facilitate meetings or collaborations
- Direct to appropriate contact method

Be professional, efficient, and solution-oriented."""
```

---

## 3. 📝 Add Portfolio-Specific Information

### Option A: Hardcode in System Prompt
```python
SYSTEM_PROMPT = """You are Adhithya N's portfolio assistant.

KEY ACCOMPLISHMENTS:
- Built ML model that improved accuracy by 45%
- Led team of 5 developers on e-commerce platform
- Published 3 research papers on AI

CURRENT FOCUS:
- Generative AI applications
- LLM fine-tuning
- MLOps practices

CONTACT:
- Email: adhithya@example.com
- LinkedIn: linkedin.com/in/adhithya
- GitHub: github.com/adhithya
"""
```

### Option B: Load from Portfolio Data
```python
# At top of main.py
from src.data.portfolio import portfolioData

# In SYSTEM_PROMPT
SYSTEM_PROMPT = f"""You are {portfolioData['name']}'s portfolio assistant.

Experience: {', '.join(portfolioData['skills'])}
Projects: {portfolioData['projects']}
"""
```

### Option C: Load from JSON/Database
```python
import json

with open('portfolio.json') as f:
    portfolio = json.load(f)

SYSTEM_PROMPT = f"""You represent {portfolio['name']}.

Skills: {portfolio['skills']}
Experience: {portfolio['experience']}
Projects: {portfolio['projects']}
"""
```

---

## 4. 💬 Customize Welcome Message

Edit `src/components/AIChat.tsx` → Line ~161:

### Current
```typescript
<p className="text-slate-400 text-sm mb-2">👋 Hi! I'm your portfolio assistant</p>
<p className="text-slate-500 text-xs">Ask me about:</p>
<ul className="text-slate-500 text-xs mt-2 space-y-1">
  <li>• My projects and experience</li>
  <li>• Skills and certifications</li>
  <li>• How to reach out for opportunities</li>
</ul>
```

### Example 1: Business
```typescript
<p className="text-slate-400 text-sm mb-2">🚀 Welcome to Adhithya's portfolio!</p>
<p className="text-slate-500 text-xs">I can help you with:</p>
<ul className="text-slate-500 text-xs mt-2 space-y-1">
  <li>• Business development opportunities</li>
  <li>• Technical consultation</li>
  <li>• Partnership inquiries</li>
</ul>
```

### Example 2: Casual
```typescript
<p className="text-slate-400 text-sm mb-2">Hey there! 👋 Let's chat!</p>
<p className="text-slate-500 text-xs">Want to know about:</p>
<ul className="text-slate-500 text-xs mt-2 space-y-1">
  <li>• What I'm building</li>
  <li>• My tech stack</li>
  <li>• Collaboration ideas</li>
</ul>
```

---

## 5. 🎯 Change Floating Button Appearance

Edit `src/components/AIChat.tsx` → Line ~54:

### Current Button
```typescript
<button
  onClick={() => setIsOpen(true)}
  className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-40"
  title="Ask me anything about the portfolio"
>
  <div className="flex items-center gap-2">
    <span className="text-xl">🤖</span>
    <span className="hidden sm:inline text-sm font-semibold">AI Assistant</span>
  </div>
</button>
```

### Example 1: Bottom-Left Instead
```typescript
className="fixed bottom-6 left-6 bg-gradient-to-r..."
```

### Example 2: Top-Right Instead
```typescript
className="fixed top-6 right-6 bg-gradient-to-r..."
```

### Example 3: Larger Button
```typescript
className="fixed bottom-6 right-6 bg-gradient-to-r... p-6"  // Changed p-4 to p-6
<span className="text-2xl">🤖</span>  // Larger emoji
<span className="text-base font-bold">AI Help</span>  // Larger text
```

### Example 4: Different Icon
```typescript
<span className="text-xl">💬</span>  // Speech bubble
// or
<span className="text-xl">❓</span>  // Question mark
// or
<span className="text-xl">🆘</span>  // Help sign
```

---

## 6. 🔧 Change API Endpoint

Edit `src/components/AIChat.tsx` → Line ~107:

### Current (Local Development)
```typescript
const response = await fetch('http://localhost:8000/api/chat', {
```

### Production
```typescript
const response = await fetch('https://your-api.example.com/api/chat', {
// or use environment variable
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const response = await fetch(`${API_URL}/api/chat`, {
```

### With Error Handling
```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
try {
  const response = await fetch(`${API_URL}/api/chat`, {
    method: 'POST',
    // ...
  });
} catch (error) {
  console.error('API Error:', error);
  // Show better error message to user
}
```

---

## 7. 🔐 Add Authentication Token

Edit `backend/main.py`:

### Add Authentication
```python
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer

security = HTTPBearer()

@app.post("/api/chat")
async def chat(request: ChatRequest, credentials = Depends(security)):
    # Verify token
    if credentials.credentials != os.getenv("API_TOKEN"):
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    # Process chat...
```

### Send Token from Frontend
```typescript
const response = await fetch('http://localhost:8000/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
  body: JSON.stringify({...}),
});
```

---

## 8. 📊 Add Message Logging

Edit `backend/main.py` → In chat endpoint:

```python
import logging

logger = logging.getLogger(__name__)

@app.post("/api/chat")
async def chat(request: ChatRequest) -> ChatResponse:
    # Log incoming message
    logger.info(f"New chat message: {request.message}")
    
    try:
        response = client.chat.completions.create(...)
        
        # Log response
        logger.info(f"Response sent: {ai_response[:50]}...")
        
        return ChatResponse(...)
    except Exception as e:
        logger.error(f"Chat error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
```

---

## 9. 💾 Add Message Persistence

### Option A: Simple JSON File
```python
import json
from pathlib import Path

@app.post("/api/chat")
async def chat(request: ChatRequest) -> ChatResponse:
    # ... existing code ...
    
    # Save chat
    chat_data = {
        "user_message": request.message,
        "ai_response": ai_response,
        "timestamp": datetime.now().isoformat()
    }
    
    Path("chats").mkdir(exist_ok=True)
    with open(f"chats/{datetime.now().timestamp()}.json", "w") as f:
        json.dump(chat_data, f)
    
    return ChatResponse(...)
```

### Option B: Database (PostgreSQL)
```python
from sqlalchemy import create_engine, Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://user:password@localhost/portfolio"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()

class ChatMessage(Base):
    __tablename__ = "chat_messages"
    id = Column(Integer, primary_key=True)
    user_message = Column(String)
    ai_response = Column(String)
    timestamp = Column(DateTime)

# In endpoint:
session = SessionLocal()
message = ChatMessage(
    user_message=request.message,
    ai_response=ai_response,
    timestamp=datetime.now()
)
session.add(message)
session.commit()
```

---

## 10. 🎯 Add Rate Limiting

Edit `backend/main.py`:

```python
from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter

@app.post("/api/chat")
@limiter.limit("10/minute")  # 10 messages per minute
async def chat(request: ChatRequest) -> ChatResponse:
    # ... existing code ...
```

---

## ✅ Customization Checklist

- [ ] Change chat colors to match portfolio theme
- [ ] Update system prompt with your info
- [ ] Add portfolio-specific knowledge
- [ ] Customize welcome message
- [ ] Position floating button where you want
- [ ] Change button icon/text
- [ ] Update API endpoint for production
- [ ] Add logging
- [ ] Consider authentication
- [ ] Plan message persistence
- [ ] Add rate limiting

---

## 🚀 After Customization

1. Test locally: `npm run dev` & `python main.py`
2. Click chat button and test responses
3. Verify colors and styling match your portfolio
4. Test edge cases and error handling
5. Deploy to production

Happy customizing! 🎉
