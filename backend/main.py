"""
Portfolio AI Agent Backend
Handles chat requests and AI reasoning for portfolio assistant
"""

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

# Initialize FastAPI app
app = FastAPI(
    title="Portfolio AI Agent",
    description="AI Assistant for portfolio interactions",
    version="1.0.0"
)

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize OpenAI client
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY environment variable is not set")

client = OpenAI(api_key=OPENAI_API_KEY)

# System prompt for the AI agent
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


# Data Models
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


# Routes
@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "ok",
        "service": "Portfolio AI Agent",
        "version": "1.0.0"
    }


@app.post("/api/chat")
async def chat(request: ChatRequest) -> ChatResponse:
    """
    Main chat endpoint
    Receives user message and returns AI response
    """
    try:
        if not request.message or not request.message.strip():
            raise HTTPException(status_code=400, detail="Message cannot be empty")

        # Build message history for context
        messages = [
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            }
        ]

        # Add chat history if provided
        if request.chat_history:
            for msg in request.chat_history:
                messages.append({
                    "role": msg.role,
                    "content": msg.content
                })

        # Add current user message
        messages.append({
            "role": "user",
            "content": request.message
        })

        # Call OpenAI API
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            temperature=0.7,
            max_tokens=500,
            top_p=0.9,
        )

        # Extract response content
        ai_response = response.choices[0].message.content

        return ChatResponse(
            response=ai_response,
            timestamp=datetime.now().isoformat(),
            success=True
        )

    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        print(f"Error in chat endpoint: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Error processing request: {str(e)}"
        )


@app.post("/api/chat/stream")
async def chat_stream(request: ChatRequest):
    """
    Streaming chat endpoint for real-time responses
    Returns Server-Sent Events (SSE) stream
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

        if request.chat_history:
            for msg in request.chat_history:
                messages.append({
                    "role": msg.role,
                    "content": msg.content
                })

        messages.append({
            "role": "user",
            "content": request.message
        })

        # Call OpenAI API with streaming
        stream = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            temperature=0.7,
            max_tokens=500,
            stream=True,
        )

        # Stream the response
        async def generate():
            for chunk in stream:
                if chunk.choices[0].delta.content:
                    yield f"data: {chunk.choices[0].delta.content}\n\n"
            yield "data: [DONE]\n\n"

        from fastapi.responses import StreamingResponse
        return StreamingResponse(
            generate(),
            media_type="text/event-stream"
        )

    except Exception as e:
        print(f"Error in stream endpoint: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Error processing request: {str(e)}"
        )


@app.get("/api/health")
async def health_check():
    """Health check endpoint for monitoring"""
    return {
        "status": "healthy",
        "service": "Portfolio AI Agent",
        "timestamp": datetime.now().isoformat()
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
