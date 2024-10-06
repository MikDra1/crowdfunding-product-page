import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CrowdfundProvider } from './contexts/CrowfundProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CrowdfundProvider>
    <App />
    </CrowdfundProvider>
  </StrictMode>,
)
