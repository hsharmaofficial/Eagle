import React, { Suspense, lazy } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Import Home component directly to avoid issues
import Home from "./components/home";

="tel"
                  className="w-full p-2 border border-border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Installation Type
                </label>
                <select className="w-full p-2 border border-border rounded-md">
                  <option>Panel AC</option>
                  <option>Chiller</option>
                  <option>HVAC System</option>
                  <option>Other</option>
                </select>
              </div>
              <button className="w-full bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white py-2 rounded-md hover:opacity-90 transition-opacity">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
