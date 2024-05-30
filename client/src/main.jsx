import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MainProvider } from './context/MainContext.jsx'
import MainNavigation from './navigation/MainNavigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <MainNavigation />
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
