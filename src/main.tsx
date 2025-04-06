import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

// Initialize Tempo Devtools only in development environment
if (import.meta.env.DEV && import.meta.env.VITE_TEMPO === "true") {
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

// Get base path from environment variable or use empty string
const basename = import.meta.env.VITE_BASE_PATH || "";

// Error handler for React rendering
window.addEventListener("error", (event) => {
  console.error("Global error caught:", event.error);
});

// Create root with error handling
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found");
} else {
  const root = ReactDOM.createRoot(rootElement);

  try {
    root.render(
      <React.StrictMode>
        <ThemeProvider defaultTheme="light" storageKey="eagle-eye-theme">
          <BrowserRouter basename={basename}>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </React.StrictMode>,
    );
  } catch (error) {
    console.error("Error rendering React application:", error);
    rootElement.innerHTML =
      '<div style="padding: 20px; text-align: center;"><h1>Something went wrong</h1><p>Please try refreshing the page.</p></div>';
  }
}
