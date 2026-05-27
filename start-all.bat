@echo off
REM Quick start script for Windows PowerShell
REM Starts both frontend and backend servers

echo.
echo ========================================
echo Portfolio AI Assistant - Quick Start
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js not found. Please install from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Python not found. Please install from https://www.python.org/
    pause
    exit /b 1
)

echo.
echo [1/4] Starting Frontend (Next.js on port 3000)...
start cmd /k "npm run dev"
echo [✓] Frontend started

echo.
echo [2/4] Starting Backend (FastAPI on port 8000)...
start cmd /k "cd backend && venv\Scripts\activate && python main.py"
echo [✓] Backend started

echo.
echo ========================================
echo Services Starting:
echo   - Frontend: http://localhost:3000
echo   - Backend:  http://localhost:8000
echo   - API Docs: http://localhost:8000/docs
echo ========================================
echo.
echo Open http://localhost:3000 in your browser!
echo.
pause
