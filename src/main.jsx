import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IncidentContextProvider } from './Context/fetchIncident'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IncidentContextProvider>
      <App />
    </IncidentContextProvider>
  </StrictMode>,
)
