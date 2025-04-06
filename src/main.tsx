import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

// Initialize Tempo Devtools if available (only in Tempo environment)
if (import.meta.env.VITE_TEMPO === "true") {
  try {
    import("tempo-devtools")
      .then((module) => {
        const TempoDevtools = module.TempoDevtools;
        if (TempoDevtools) {
          TempoDevtools.init();
        }
      })
      .catch((err) => {
        console.warn("Tempo devtools not available:", err);
      });
  } catch (error) {
    console.warn("Tempo devtools initialization failed:", error);
  }
}

// Add error handling script for Tempo
if (import.meta.env.VITE_TEMPO === "true") {
  const script = document.createElement("script");
  script.src =
    "https://api.tempo.new/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js";
  document.body.appendChild(script);
}

// Get base path from environment variable or use empty string
const basename = import.meta.env.VITE_BASE_PATH || "";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="eagle-eye-theme">
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
