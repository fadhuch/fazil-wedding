import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RsvpViewerPage from './pages/RsvpViewerPage.jsx'
import WelcomePage from './pages/WelcomePage.jsx'
import './index.css'

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'

const getRootComponent = () => {
  if (pathname === '/rsvp-viewer') return <RsvpViewerPage />
  if (pathname === '/invitation/2026') return <App eventType="both" />
  if (pathname === '/nikkah-invitation/9346') return <App eventType="Nikkah" />
  if (pathname === '/reception-invitation/2122') return <App eventType="Wedding" />
  return <WelcomePage />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {getRootComponent()}
  </StrictMode>,
)
