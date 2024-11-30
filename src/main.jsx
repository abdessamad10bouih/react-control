import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EmpruntProvider from './context/EmpruntContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmpruntProvider>
      <App />
    </EmpruntProvider>
  </StrictMode>,
)
