import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='system' attribute='class' enableSystem={true} storageKey='food-theme'>

    <App />
    </ThemeProvider>
  </StrictMode>,
)
