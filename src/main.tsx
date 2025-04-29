import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Polyfills for Node.js APIs
import { Buffer } from 'buffer'
import process from 'process'

// Add polyfills to window object
window.Buffer = Buffer
window.process = process

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
