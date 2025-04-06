import React, { Suspense, lazy } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Lazy load components for better performance
const Home = lazy(() => import("./components/home"));
const AboutPage = lazy(() => import("./pages/about"));
const ServicesPage = lazy(() => import("./pages/services"));
const ContactPage = lazy(() => import("./pages/contact"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy"));
const TermsOfService = lazy(() => import("./pages/terms-of-service"));
const SparePartsPage = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold">Spare Parts</h1>
    <p>Coming soon...</p>
  </div>
);
const IndustrialWashingPage = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold">Industrial Washing</h1>
    <p>Coming soon...</p>
  </div>
);
const ACMaintenancePage = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold">AC Maintenance</h1>
    <p>Coming soon...</p>
  </div>
);
const ACInstallationPage = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold">AC Installation</h1>
    <p>Coming soon...</p>
  </div>
);

function App() {
  // Add Tempo routes for development environment
  if (import.meta.env.VITE_TEMPO === "true") {
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
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <MainLayout>
        {/* Main application routes */}
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
          {/* Add Tempo route matcher for development environment */}
          {import.meta.env.VITE_TEMPO === "true" && (
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
