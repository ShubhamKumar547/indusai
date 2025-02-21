import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mainfile from './components/Main/Mainfile.jsx'
import ContextProvider from './contexts/Context.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App/>
  </ContextProvider>
  
)
