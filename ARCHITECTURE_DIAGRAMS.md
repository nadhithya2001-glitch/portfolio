# AI Chat System - Visual Flow & Architecture

## 🎯 High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           YOUR PORTFOLIO                                 │
│                      (Next.js Frontend - Port 3000)                      │
│                                                                           │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                    Home Page (page.tsx)                         │    │
│  │                                                                 │    │
│  │  ┌──────────────────────────────────────────────────────────┐  │    │
│  │  │  Sections:                                               │  │    │
│  │  │  - Hero                                                  │  │    │
│  │  │  - About                                                 │  │    │
│  │  │  - Skills                                                │  │    │
│  │  │  - Projects                                              │  │    │
│  │  │  - Certifications                                        │  │    │
│  │  │  - Contact                                               │  │    │
│  │  │  - Footer                                                │  │    │
│  │  └──────────────────────────────────────────────────────────┘  │    │
│  │                                                                 │    │
│  │  ┌──────────────────────────────────────────────────────────┐  │    │
│  │  │              AIChat Component (Widget)                  │  │    │
│  │  │        (Bottom-Right Corner - Floating Button)          │  │    │
│  │  │                                                          │  │    │
│  │  │  ┌─ Closed State ──────────────────────────────────┐   │  │    │
│  │  │  │ [🤖 AI Assistant] ← Click to Open              │   │  │    │
│  │  │  └──────────────────────────────────────────────────┘   │  │    │
│  │  │                                                          │  │    │
│  │  │  ┌─ Open State ────────────────────────────────────┐    │  │    │
│  │  │  │ ┌──────────────────────────────────────────┐   │    │  │    │
│  │  │  │ │ 🤖 AI Assistant      [✕]               │   │    │  │    │
│  │  │  │ ├──────────────────────────────────────────┤   │    │  │    │
│  │  │  │ │ 👋 Hi, I'm your assistant              │   │    │  │    │
│  │  │  │ │ Ask me about projects...               │   │    │  │    │
│  │  │  │ │                                          │   │    │  │    │
│  │  │  │ │ > You: Tell me about projects          │   │    │  │    │
│  │  │  │ │ < Bot: I have worked on...             │   │    │  │    │
│  │  │  │ │                                          │   │    │  │    │
│  │  │  │ │ [Input Field...] [Send]                │   │    │  │    │
│  │  │  │ └──────────────────────────────────────────┘   │    │  │    │
│  │  │  └──────────────────────────────────────────────────┘    │  │    │
│  │  └──────────────────────────────────────────────────────────┘  │    │
│  └─────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
                          HTTP/REST API ↓
┌─────────────────────────────────────────────────────────────────────────┐
│                         AI BACKEND (FastAPI)                             │
│                    (Python Server - Port 8000)                           │
│                                                                           │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                  FastAPI Application                            │    │
│  │                                                                 │    │
│  │  Endpoints:                                                     │    │
│  │  GET /             → Health Check ✓                            │    │
│  │  GET /docs         → Swagger UI                                │    │
│  │  POST /api/chat    → Chat Processing ↓                         │    │
│  │                                                                 │    │
│  │  ┌─────────────────────────────────────────────────────────┐   │    │
│  │  │ /api/chat Endpoint Flow                                │   │    │
│  │  │                                                         │   │    │
│  │  │ 1. Receive ChatRequest                                │   │    │
│  │  │    {                                                  │   │    │
│  │  │      "message": "user question",                      │   │    │
│  │  │      "chat_history": [...]                            │   │    │
│  │  │    }                                                  │   │    │
│  │  │                ↓                                       │   │    │
│  │  │ 2. Validate Input                                     │   │    │
│  │  │    - Check message not empty                          │   │    │
│  │  │    - Verify format                                    │   │    │
│  │  │                ↓                                       │   │    │
│  │  │ 3. Build Message Context                              │   │    │
│  │  │    [                                                  │   │    │
│  │  │      {role: "system", content: SYSTEM_PROMPT},       │   │    │
│  │  │      {role: "user", content: "Hello"},               │   │    │
│  │  │      {role: "assistant", content: "Hi!"},            │   │    │
│  │  │      {role: "user", content: "current question"}     │   │    │
│  │  │    ]                                                  │   │    │
│  │  │                ↓                                       │   │    │
│  │  │ 4. Call OpenAI API                                    │   │    │
│  │  │    client.chat.completions.create(                   │   │    │
│  │  │      model="gpt-3.5-turbo",                           │   │    │
│  │  │      messages=messages,                               │   │    │
│  │  │      temperature=0.7,                                 │   │    │
│  │  │      max_tokens=500                                   │   │    │
│  │  │    )                                                  │   │    │
│  │  │                ↓                                       │   │    │
│  │  │ 5. Process Response                                   │   │    │
│  │  │    - Extract text from response                       │   │    │
│  │  │    - Get timestamp                                    │   │    │
│  │  │                ↓                                       │   │    │
│  │  │ 6. Return ChatResponse                                │   │    │
│  │  │    {                                                  │   │    │
│  │  │      "response": "AI generated answer",               │   │    │
│  │  │      "timestamp": "2024-01-15T10:30:10",             │   │    │
│  │  │      "success": true                                  │   │    │
│  │  │    }                                                  │   │    │
│  │  └─────────────────────────────────────────────────────┘   │    │
│  │                                                                 │    │
│  │  Key Components:                                                │    │
│  │  - CORS Middleware (Allow Frontend)                            │    │
│  │  - Error Handling                                              │    │
│  │  - Logging                                                     │    │
│  │  - System Prompt Management                                    │    │
│  └─────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
                      HTTPS API ↓
┌─────────────────────────────────────────────────────────────────────────┐
│                         OpenAI API Services                              │
│                        (External - Cloud)                                │
│                                                                           │
│  GPT-3.5-Turbo Model                                                    │
│  ├── Understands context from chat history                              │
│  ├── Applies system prompt instructions                                 │
│  ├── Generates contextual responses                                     │
│  └── Returns to backend ↑                                               │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📊 Message Flow Sequence Diagram

```
User                Frontend               Backend              OpenAI API
 │                    │                      │                      │
 │─ Types message ──>│                      │                      │
 │                    │                      │                      │
 │                    │─ Update UI ─────────│                      │
 │                    │ (add user message)   │                      │
 │                    │                      │                      │
 │                    │─ POST /api/chat ───>│                      │
 │                    │ {message, history}   │                      │
 │                    │                      │                      │
 │                    │                      │─ Validate input     │
 │                    │                      │ - Build context    │
 │                    │                      │ - Prepare messages │
 │                    │                      │                      │
 │                    │                      │─ POST /chat ──────>│
 │                    │                      │ completions/create  │
 │                    │                      │                      │
 │                    │                      │                      │ (Processing...)
 │                    │                      │                      │
 │                    │ (⏳ Waiting - 2-5s)  │                      │
 │                    │                      │<─ Response ────────│
 │                    │                      │ {choices[0].message}│
 │                    │<─ ChatResponse ─────│                      │
 │                    │ {response, timestamp}│                      │
 │                    │                      │                      │
 │<─ Display Message─│                      │                      │
 │  (Auto-scroll)     │                      │                      │
 │                    │                      │                      │
 └──────────────────────────────────────────────────────────────────┘
```

---

## 🔄 State Management Flow

```
AIChat Component State:

┌─ Initial State ──────────────────────────────────┐
│ {                                                │
│   isOpen: false              ← Widget closed    │
│   messages: []               ← No messages      │
│   input: ""                  ← Empty input      │
│   isLoading: false           ← Not loading      │
│ }                                               │
└──────────────┬───────────────────────────────────┘
               │
         User clicks widget
               │
         setIsOpen(true)
               │
         ↓
┌─ Widget Open State ──────────────────────────────┐
│ {                                                │
│   isOpen: true               ← Widget visible   │
│   messages: []               ← Ready for chat   │
│   input: ""                  ← Input ready      │
│   isLoading: false           ← Waiting for user│
│ }                                               │
└──────────────┬───────────────────────────────────┘
               │
         User types + sends message
               │
         ↓
┌─ Sending Message State ──────────────────────────┐
│ {                                                │
│   isOpen: true                                  │
│   messages: [                                   │
│     { role: 'user', content: 'Hi!' }           │
│   ]                                             │
│   input: ""                  ← Cleared after send│
│   isLoading: true            ← API call pending │
│ }                                               │
└──────────────┬───────────────────────────────────┘
               │
         API response received
               │
         ↓
┌─ Got Response State ─────────────────────────────┐
│ {                                                │
│   isOpen: true                                  │
│   messages: [                                   │
│     { role: 'user', content: 'Hi!' },           │
│     { role: 'assistant', content: 'Hello!...' } │
│   ]                                             │
│   input: ""                                     │
│   isLoading: false           ← Ready for next   │
│ }                                               │
└──────────────┬───────────────────────────────────┘
               │
         User can send another message
               │ (repeats flow)
```

---

## 🔐 Data Flow & Privacy

```
User Input (Browser)
    │
    ├─ Local Storage: Message history in browser state
    │
    └─→ Sent to Backend (HTTPS)
            │
            ├─ Temporarily held for context
            │
            └─→ Sent to OpenAI API (HTTPS)
                    │
                    ├─ Processed by AI model
                    │
                    └─→ Response returned
                            │
                            └─→ Backend returns to Frontend
                                    │
                                    └─→ Displayed in UI

⚠️ Important:
- Messages are NOT permanently stored by default
- Each conversation starts fresh (unless you add persistence)
- OpenAI retains data per their policy (30 days default)
- API key should NEVER be exposed to frontend
```

---

## 🎨 Component Architecture

```
src/app/page.tsx (Main Page)
├── Navbar Component
├── Hero Component
├── About Component
├── Skills Component
├── Projects Component
├── Certifications Component
├── Contact Component
├── Footer Component
└── AIChat Component ← You are here!
    ├── Closed State (Float Button)
    ├── Open State (Chat Widget)
    │   ├── Header
    │   │   ├── Title "Portfolio AI Assistant"
    │   │   └── Close Button
    │   ├── Messages Container
    │   │   ├── Welcome Message (if empty)
    │   │   ├── Message Items (map)
    │   │   │   ├── User Messages (right align)
    │   │   │   ├── Assistant Messages (left align)
    │   │   │   └── Timestamps
    │   │   └── Loading Indicator
    │   └── Input Section
    │       ├── Text Input Field
    │       └── Send Button
    └── Hooks
        ├── useState (messages, input, isOpen, isLoading)
        ├── useRef (messagesEndRef for scroll)
        └── useEffect (scroll on new message)
```

---

## 📝 API Contract Summary

```
REQUEST: POST /api/chat
├─ Content-Type: application/json
├─ Body:
│  {
│    "message": "string (required)",
│    "chat_history": [
│      {
│        "role": "user|assistant",
│        "content": "string",
│        "timestamp": "ISO 8601 (optional)"
│      }
│    ] (optional)
│  }
└─ Timeout: ~10-30 seconds

RESPONSE: 200 OK
├─ Content-Type: application/json
├─ Body:
│  {
│    "response": "string",
│    "timestamp": "ISO 8601",
│    "success": boolean
│  }
└─ Size: Usually 50-500 bytes

ERROR RESPONSES:
├─ 400 Bad Request
│  {"detail": "Message cannot be empty"}
├─ 500 Internal Server Error
│  {"detail": "Error message"}
└─ Network Error
   Connection timeout or refused
```

---

## 🔌 Integration Points

```
Frontend ← HTTP → Backend ← HTTPS → OpenAI
   ↓                          ↓
 React             FastAPI + Python     GPT-3.5-Turbo
 Hooks             Pydantic Models      LLM Engine
 State             CORS Middleware      API Keys
 Events            Validation           Temperature
 DOM                Error Handling       Max Tokens
```

---

## 📦 Deployment Architecture

```
LOCAL DEVELOPMENT
├── Frontend: http://localhost:3000
├── Backend: http://localhost:8000
└── OpenAI: https://api.openai.com

PRODUCTION
├── Frontend: https://yourdomain.com (Vercel)
├── Backend: https://api.yourdomain.com (Railway/Render)
└── OpenAI: https://api.openai.com (Cloud)

┌─────────────────┐
│  Vercel         │ (Frontend)
│  yourdomain.com │
└────────┬────────┘
         │ HTTPS
┌────────▼─────────┐
│  Railway/Render  │ (Backend)
│  api.yourdomain  │
└────────┬─────────┘
         │ HTTPS
┌────────▼─────────┐
│   OpenAI API     │
│   api.openai.com │
└──────────────────┘
```

---

## 🎯 Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Response Time | < 3s | Backend latency + OpenAI API |
| Uptime | 99.9% | Server availability |
| Accuracy | High | User satisfaction |
| Error Rate | < 1% | Failed requests |
| User Retention | High | Conversation continuation |

---

**Version**: 1.0.0
**Last Updated**: May 18, 2026
