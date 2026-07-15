@echo off
setlocal

cd /d "%~dp0frontend"

echo [enterprise-ai-assistant] Cleaning Next.js runtime cache...
if exist ".next" rmdir /s /q ".next"

echo [enterprise-ai-assistant] Installing frontend dependencies if needed...
if not exist "node_modules" npm.cmd install

echo [enterprise-ai-assistant] Starting frontend on http://127.0.0.1:3000
npm.cmd run dev -- -H 127.0.0.1 -p 3000

endlocal
