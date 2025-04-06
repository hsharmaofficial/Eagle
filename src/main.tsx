import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

// Initialize Tempo Devtools if available
let TempoDevtools;
try {
  if (import.meta.env.VITE_TEMPO === "true") {
    // Only import in Tempo environment
    import("tempo-devtools")
      .then((module) => {
        TempoDevtools = module.TempoDevtools;
        TempoDevtools.init();
      })
      .catch((err) => {
        console.warn("Tempo devtools not available:", err);
      });
  }
} catch (error) {
  console.warn("Tempo devtools initialization failed:", error);
}

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
