import React, { Suspense, lazy } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Import Home component directly to avoid issues
import Home from "./components/home";

// Import internal pages directly to avoid lazy loading issues
import ACInstallationPage from "./pages/ac-installation";
import ACMaintenancePage from "./pages/ac-maintenance";
import IndustrialWashingPage from "./pages/industrial-washing";
import SparePartsPage from "./pages/spare-parts";

// Lazy load other pages for better performance
const AboutPage = lazy(() => import("./pages/about"));
const ServicesPage = lazy(() => import("./pages/services"));
const ContactPage = lazy(() => import("./pages/contact"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy"));
const TermsOfService = lazy(() => import("./pages/terms-of-service"));

function App() {
  // Only use Tempo routes in development environment
  if (
    import.meta.env.MODE === "development" &&
    import.meta.env.VITE_TEMPO === "true"
  ) {
    try {
      const routes = require("tempo-routes");
      useRoutes(routes);
    } catch (error) {
      console.warn("Tempo routes not available:", error);
    }
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="animate-pulse">Loading...</div>
        </div>
      }
    >
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/spare-parts" element={<SparePartsPage />} />
          <Route
            path="/industrial-washing"
            element={<IndustrialWashingPage />}
          />
          <Route path="/ac-maintenance" element={<ACMaintenancePage />} />
          <Route path="/ac-installation" element={<ACInstallationPage />} />

          {/* Add Tempo route matcher only in development environment */}
          {import.meta.env.MODE === "development" &&
            import.meta.env.VITE_TEMPO === "true" && (
              <Route path="/tempobook/*" element={<div />} />
            )}

          {/* Catch-all route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </Suspense>
  );
}

export default App;
