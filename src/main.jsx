import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertApp } from './components/GifExpertAppComponent/GifExpertApp.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
