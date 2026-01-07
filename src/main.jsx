import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
import AppTest from './AppTest'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTest />
  </React.StrictMode>
)
