import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RsvpViewerPage from './pages/RsvpViewerPage.jsx'
import './index.css'

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const RootComponent = pathname === '/rsvp-viewer' ? RsvpViewerPage : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>,
)
