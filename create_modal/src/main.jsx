import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// it initializes a react application by rendering the App component into the DOM element with id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
