import React, { Suspense, lazy } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import CookieConsent from "./components/CookieConsent";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { MessageCircle } from "lucide-react";

// Lazy load components for better performance
const Home = lazy(() => import("./components/home"));
const AboutPage = lazy(() => import("./pages/about"));
const ServicesPage = lazy(() => import("./pages/services"));
const ContactPage = lazy(() => import("./pages/contact"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy"));
const TermsOfService = lazy(() => import("./pages/terms-of-service"));
const SparePartsPage = lazy(() => import("./pages/spare-parts"));
const IndustrialWashingPage = lazy(() => import("./pages/industrial-washing"));
const ACMaintenancePage = lazy(() => import("./pages/ac-maintenance"));
const ACInstallationPage = lazy(() => import("./pages/ac-installation"));

function App() {
  // Add Tempo routes if in Tempo environment
  let tempoRoutes = null;
  if (import.meta.env.VITE_TEMPO === "true") {
    try {
      // @ts-ignore - This import is dynamically created by Tempo
      const routes = require("tempo-routes").default;
      tempoRoutes = useRoutes(routes);
    } catch (e) {
      console.error("Failed to load Tempo routes", e);
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
      <div className="min-h-screen relative">
        <div className="fixed inset-0 bg-gradient-to-br from-[#2563eb]/10 via-transparent to-[#ec4899]/10 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        </div>
        <div className="relative z-10">
          <Navbar />
          <main>
            {/* Render Tempo routes if available */}
            {tempoRoutes}
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
              {/* Add tempo route matcher */}
              {import.meta.env.VITE_TEMPO === "true" && (
                <Route path="/tempobook/*" element={null} />
              )}
              {/* Catch-all route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <a
            href="https://wa.me/919911397792"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </a>
          <CookieConsent />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
