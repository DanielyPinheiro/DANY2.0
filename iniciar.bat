@echo off
cd /d "%~dp0"
echo.
echo [Dany Tech Alquimia] Instalando dependências...
call npm install
if errorlevel 1 (
  echo Falha no npm install.
  pause
  exit /b 1
)
echo.
echo Preferência: porta 3000. Se estiver ocupada, o Vite escolhe outra:
echo Use a URL "Local:" que aparecer abaixo. (Ctrl+C para parar)
echo.
call npm run dev
pause
