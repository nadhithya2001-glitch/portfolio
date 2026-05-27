# FastAPI Backend Setup Instructions

## 📋 Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- OpenAI API key

## 🚀 Setup Steps

### 1. Create Python Virtual Environment

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Setup Environment Variables

```bash
# Copy example env file
cp .env.example .env

# Edit .env and add your OpenAI API key
# OPENAI_API_KEY=sk-...
```

Get your OpenAI API key from: https://platform.openai.com/api-keys

### 4. Run the Server

```bash
python main.py
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8000
```

### 5. Test the API

Open in your browser: http://localhost:8000/docs

This opens the interactive API documentation where you can test endpoints.

## 📡 API Endpoints

### 1. **POST /api/chat**
Chat endpoint (regular response)

Request:
```json
{
  "message": "Tell me about your projects",
  "chat_history": []
}
```

Response:
```json
{
  "response": "Adhithya has worked on several projects including...",
  "timestamp": "2024-01-15T10:30:00",
  "success": true
}
```

### 2. **POST /api/chat/stream**
Streaming chat endpoint (real-time responses)

### 3. **GET /api/health**
Health check endpoint

### 4. **GET /** 
Root health check

## 🔧 Troubleshooting

**Port 8000 already in use:**
```bash
python main.py
# Or modify main.py port parameter
```

**Import errors:**
```bash
pip install --upgrade -r requirements.txt
```

**OpenAI API key issues:**
- Check `.env` file has correct key
- Verify key has required permissions
- Check account has credits

## 🔗 Integration with Frontend

The frontend (Next.js) will connect to: `http://localhost:8000/api/chat`

Make sure:
1. Backend is running on port 8000
2. CORS is enabled (already configured)
3. OpenAI API key is set

## 📚 Next Steps

1. ✅ Backend running
2. ✅ Frontend running (`npm run dev`)
3. Test chat functionality
4. Add memory/persistence
5. Deploy to production
