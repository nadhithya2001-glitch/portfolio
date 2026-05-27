# AI Chat Implementation - Technical Reference

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Frontend Implementation](#frontend-implementation)
3. [Backend Implementation](#backend-implementation)
4. [API Contract](#api-contract)
5. [Deployment Configuration](#deployment-configuration)

---

## Architecture Overview

### System Components

```
┌──────────────────┐
│   Next.js 14     │
│   (Port 3000)    │
│  AIChat.tsx      │
└────────┬─────────┘
         │
         │ HTTP/REST
         │
┌────────▼─────────┐
│   FastAPI        │
│   (Port 8000)    │
│   main.py        │
└────────┬─────────┘
         │
         │ HTTPS
         │
┌────────▼─────────────┐
│   OpenAI API         │
│   (gpt-3.5-turbo)    │
└──────────────────────┘
```

### Request/Response Cycle

```
1. User Types Message
   ↓
2. Frontend State Update
   ↓
3. POST to /api/chat
   ↓
4. Backend Validates Input
   ↓
5. Build Message Context
   ↓
6. Call OpenAI API
   ↓
7. Process Response
   ↓
8. Return JSON Response
   ↓
9. Update Frontend State
   ↓
10. Display Message
```

---

## Frontend Implementation

### Component: `src/components/AIChat.tsx`

#### Imports & Types

```typescript
import { useState, useRef, useEffect } from 'react';
import { Send, Loader, X } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
```

#### State Management

```typescript
const [isOpen, setIsOpen] = useState(false);           // Widget visibility
const [messages, setMessages] = useState<Message[]>([]); // Chat history
const [input, setInput] = useState('');                 // User input
const [isLoading, setIsLoading] = useState(false);      // Loading state
const messagesEndRef = useRef<HTMLDivElement>(null);   // Auto-scroll ref
```

#### Key Functions

**1. Auto-Scroll to Latest Message**
```typescript
const scrollToBottom = () => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
};

useEffect(() => {
  scrollToBottom();
}, [messages]);
```

**2. Send Message to Backend**
```typescript
const sendMessage = async () => {
  if (!input.trim()) return;

  // Add user message to UI
  const userMessage: Message = {
    id: Date.now().toString(),
    role: 'user',
    content: input,
    timestamp: new Date(),
  };

  setMessages((prev) => [...prev, userMessage]);
  setInput('');
  setIsLoading(true);

  try {
    // API call
    const response = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: input,
        chat_history: messages,
      }),
    });

    if (!response.ok) throw new Error('Failed to get response');

    const data = await response.json();

    // Add assistant response
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: data.response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
  } catch (error) {
    // Error handling
    const errorMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: 'Sorry, I encountered an error. Please try again.',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, errorMessage]);
  } finally {
    setIsLoading(false);
  }
};
```

#### UI Sections

**Closed State** (Float Button):
```typescript
<button
  onClick={() => setIsOpen(true)}
  className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 
             to-blue-600 text-white p-4 rounded-full shadow-lg 
             hover:shadow-xl transform hover:scale-110 transition-all 
             duration-200 z-40"
>
  <span className="text-xl">🤖</span>
  <span>AI Assistant</span>
</button>
```

**Open State** (Chat Widget):
```typescript
<div className="fixed bottom-6 right-6 w-96 h-[600px] 
                bg-gradient-to-br from-slate-900 to-slate-800 
                rounded-lg shadow-2xl flex flex-col border 
                border-slate-700 z-50">
  {/* Header */}
  {/* Messages */}
  {/* Input */}
</div>
```

---

## Backend Implementation

### Server: `backend/main.py`

#### Imports & Setup

```python
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
import os
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI(
    title="Portfolio AI Agent",
    description="AI Assistant for portfolio interactions",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize OpenAI
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)
```

#### System Prompt

```python
SYSTEM_PROMPT = """You are an AI assistant representing Adhithya N's professional portfolio. 

Your role is to:
1. Answer questions about Adhithya's professional experience, skills, and projects
2. Provide information about education and certifications
3. Guide visitors on how to contact Adhithya for opportunities
4. Demonstrate technical knowledge and communication skills
5. Be professional, friendly, and concise

Important information about Adhithya:
- Data Science & AI enthusiast
- Python developer
- Interested in Generative AI and Machine Learning
- Open to software and AI professional opportunities
- Passionate about learning and technology

When answering:
- Be specific and factual
- Reference actual projects when relevant
- Offer next steps (e.g., "Would you like to know more about...?")
- Keep responses concise (2-3 sentences typically)
- If you don't know something, suggest contacting Adhithya directly

Note: You are representing Adhithya, so use "Adhithya" instead of "I" when talking about professional background."""
```

#### Data Models

```python
class Message(BaseModel):
    role: str
    content: str
    timestamp: Optional[str] = None

class ChatRequest(BaseModel):
    message: str
    chat_history: Optional[List[Message]] = None

class ChatResponse(BaseModel):
    response: str
    timestamp: str
    success: bool
```

#### API Endpoints

**Health Check**:
```python
@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "ok",
        "service": "Portfolio AI Agent",
        "version": "1.0.0"
    }
```

**Main Chat Endpoint**:
```python
@app.post("/api/chat")
async def chat(request: ChatRequest) -> ChatResponse:
    """
    Main chat endpoint
    Receives user message and returns AI response
    """
    try:
        if not request.message or not request.message.strip():
            raise HTTPException(status_code=400, detail="Message cannot be empty")

        # Build message history
        messages = [
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            }
        ]

        # Add chat history
        if request.chat_history:
            for msg in request.chat_history:
                messages.append({
                    "role": msg.role,
                    "content": msg.content
                })

        # Add current message
        messages.append({
            "role": "user",
            "content": request.message
        })

        # Call OpenAI
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            temperature=0.7,
            max_tokens=500,
            top_p=0.9,
        )

        ai_response = response.choices[0].message.content

        return ChatResponse(
            response=ai_response,
            timestamp=datetime.now().isoformat(),
            success=True
        )

    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

---

## API Contract

### Endpoint: POST `/api/chat`

#### Request

**URL**: `http://localhost:8000/api/chat`

**Headers**:
```
Content-Type: application/json
```

**Body** (JSON):
```json
{
  "message": "Tell me about your projects",
  "chat_history": [
    {
      "role": "user",
      "content": "Hello, who are you?",
      "timestamp": "2024-01-15T10:30:00"
    },
    {
      "role": "assistant",
      "content": "I'm Adhithya's portfolio assistant!",
      "timestamp": "2024-01-15T10:30:05"
    }
  ]
}
```

**Field Descriptions**:
- `message` (string, required): User's current message
- `chat_history` (array, optional): Previous messages for context

#### Response

**Status**: 200 OK

**Body** (JSON):
```json
{
  "response": "I have worked on several projects including machine learning models and web applications...",
  "timestamp": "2024-01-15T10:30:10.123456",
  "success": true
}
```

**Field Descriptions**:
- `response` (string): AI assistant's response
- `timestamp` (string): ISO 8601 timestamp of response
- `success` (boolean): Operation success status

#### Error Responses

**400 Bad Request** (Empty message):
```json
{
  "detail": "Message cannot be empty"
}
```

**500 Internal Server Error**:
```json
{
  "detail": "Internal server error message"
}
```

### cURL Examples

**Basic Request**:
```bash
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What are your main skills?",
    "chat_history": []
  }'
```

**With Chat History**:
```bash
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Can you elaborate on that?",
    "chat_history": [
      {
        "role": "user",
        "content": "What are your main skills?",
        "timestamp": "2024-01-15T10:30:00"
      },
      {
        "role": "assistant",
        "content": "My main skills include...",
        "timestamp": "2024-01-15T10:30:05"
      }
    ]
  }'
```

---

## Deployment Configuration

### Environment Variables

**File**: `.env` (Backend Root)

```env
# OpenAI Configuration
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Server Configuration
HOST=0.0.0.0
PORT=8000
ENVIRONMENT=production

# CORS Settings
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# Optional: Rate Limiting
RATE_LIMIT=100  # requests per minute
```

### Docker Configuration

**Backend Dockerfile**:
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

**Frontend .env.local**:
```
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
```

### Docker Compose

```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      OPENAI_API_KEY: ${OPENAI_API_KEY}
    restart: unless-stopped

  frontend:
    build: .
    ports:
      - "3000:3000"
    environment:
      NEXT_PUBLIC_API_URL: http://backend:8000
    depends_on:
      - backend
    restart: unless-stopped
```

### Production Deployment Steps

**1. Railway/Render Backend**:
```bash
# Set environment variables in dashboard
OPENAI_API_KEY = sk-...

# Update CORS in main.py for production domain
allow_origins=["https://yourdomain.com"]
```

**2. Vercel Frontend**:
```bash
# Environment variables in Vercel dashboard
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

**3. Update Frontend API Endpoint**:
```typescript
// src/components/AIChat.tsx
const response = await fetch(
  process.env.NEXT_PUBLIC_API_URL + '/api/chat',
  { ... }
);
```

---

## Performance Tuning

### Frontend Optimization
```typescript
// Add error boundaries
// Implement message virtualization
// Debounce input events
```

### Backend Optimization
```python
# Add response caching
# Implement request queuing
# Add async request handling
# Monitor API usage and costs
```

### Database Considerations
```python
# For persistent chat history:
# - Add SQLAlchemy ORM
# - Implement PostgreSQL or MongoDB
# - Add user authentication
# - Create conversation management endpoints
```

---

## Security Best Practices

1. **API Key Management**
   - Never commit `.env` file
   - Use environment variables
   - Rotate keys regularly
   - Monitor usage

2. **CORS Security**
   - Restrict to known domains
   - Use HTTPS in production
   - Validate origins

3. **Input Validation**
   - Validate message length
   - Sanitize user input
   - Rate limiting

4. **Error Handling**
   - Don't expose sensitive errors
   - Log errors securely
   - Monitor exceptions

---

## Monitoring & Logging

### Backend Logging

```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# In endpoints
logger.info(f"Chat request from user")
logger.error(f"Error processing chat: {str(e)}")
```

### Metrics to Track

- Request latency
- Error rates
- API usage costs
- User conversation patterns
- Response quality feedback

---

**Version**: 1.0.0
**Last Updated**: May 18, 2026
