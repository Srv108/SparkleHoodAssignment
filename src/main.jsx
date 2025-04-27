import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IncidentContextProvider } from './Context/fetchIncident'
import { ModalContextProvider } from './Context/modal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalContextProvider>
      <IncidentContextProvider>
        <App />
      </IncidentContextProvider>
    </ModalContextProvider>
  </StrictMode>,
)
