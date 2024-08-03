import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
// import { SparklesPreview } from './components/Main/HomePage.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
      {/* <SparklesPreview /> */}
    </ThemeProvider>
  </React.StrictMode>,
)
