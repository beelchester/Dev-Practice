import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
// ! npm i react-router-dom
import {BrowserRouter} from "react-router-dom"
// Now wrap the app with this component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
