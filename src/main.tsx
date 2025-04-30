import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
// Polyfills for Node.js APIs
import { Buffer } from 'buffer'
import process from 'process'

// Add polyfills to window object
window.Buffer = Buffer
window.process = process

// Initialize Telegram WebApp SDK if available
if (typeof window !== 'undefined') {
  try {
    // Dynamically import Telegram WebApp SDK
    import('@twa-dev/sdk').then((WebApp) => {
      WebApp.default.ready();
      console.log('Telegram WebApp SDK initialized');
    }).catch(err => {
      console.warn('Failed to initialize Telegram WebApp SDK:', err);
    });
  } catch (error) {
    console.warn('Error initializing Telegram WebApp SDK:', error);
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
