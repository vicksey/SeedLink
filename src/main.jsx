import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router } from "react-router-dom";

const GOOGLE_CLOUD_CLIENTID = import.meta.env.VITE_GOOGLE_CLOUD_CLIENTID;

if (!GOOGLE_CLOUD_CLIENTID) {
    console.error("❌ Missing GOOGLE_CLOUD_CLIENTID. Make sure it's set in the .env file.");
} else {
    console.log("✅ Google Client ID Loaded!");

    console.log("Google Client ID:", import.meta.env.VITE_GOOGLE_CLOUD_CLIENTID);

}

ReactDOM.createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId={GOOGLE_CLOUD_CLIENTID}>
        <React.StrictMode>
            <Router>
                <App />  {/* ✅ App.js handles routes and Login */}
            </Router>
        </React.StrictMode>
    </GoogleOAuthProvider>
);
