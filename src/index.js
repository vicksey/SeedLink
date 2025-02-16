import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"

const GOOGLE_CLOUD_CLIENTID = process.env.GOOGLE_CLOUD_CLIENTID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={`${GOOGLE_CLOUD_CLIENTID}.apps.googleusercontent.com`}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>
)