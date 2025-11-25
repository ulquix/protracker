import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { ThemeProvider } from 'next-themes'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='system' attribute='class' enableSystem={true} storageKey='food-theme'>
<Analytics/>
<SpeedInsights />
    <App />
    </ThemeProvider>
  </StrictMode>,
)
