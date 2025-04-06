import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Lazy load components for better performance
const Home = lazy(() => import("./components/home/index"));
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
  // Tempo routes removed

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <MainLayout>
        {/* Tempo routes removed */}
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
          {/* Tempo route matcher removed */}
          {/* Catch-all route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </Suspense>
  );
}

export default App;
