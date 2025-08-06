import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './commonfiles/ThemeContext.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
//--using vanilla bootstrap - not react bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />    
    </ThemeProvider>

  </StrictMode>,
)
