import React, { Suspense, lazy } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Import Home component directly to avoid issues
import Home from "./components/home";

// Lazy load other pages for better performance
const AboutPage = lazy(() => import("./pages/about"));
const ServicesPage = lazy(() => import("./pages/services"));
const ContactPage = lazy(() => import("./pages/contact"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy"));
const TermsOfService = lazy(() => import("./pages/terms-of-service"));

// Enhanced page components with proper content
const SparePartsPage = () => (
  <div className="min-h-screen">
    <div className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-[#2563eb]/10 via-transparent to-[#ec4899]/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-md">
            Spare Parts
          </h1>
          <p className="text-xl text-foreground font-medium max-w-2xl mx-auto drop-shadow-md">
            Genuine replacement components for all your cooling systems
          </p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Panel AC Parts</h3>
          <p className="text-muted-foreground mb-4">
            High-quality replacement parts for all major Panel AC brands.
          </p>
          <button className="text-primary hover:underline">Enquire Now</button>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Chiller Components</h3>
          <p className="text-muted-foreground mb-4">
            Specialized parts for industrial chillers and cooling systems.
          </p>
          <button className="text-primary hover:underline">Enquire Now</button>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">HVAC Accessories</h3>
          <p className="text-muted-foreground mb-4">
            Complete range of accessories for HVAC maintenance and repair.
          </p>
          <button className="text-primary hover:underline">Enquire Now</button>
        </div>
      </div>
    </div>
  </div>
);

const IndustrialWashingPage = () => (
  <div className="min-h-screen">
    <div className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-[#2563eb]/10 via-transparent to-[#ec4899]/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-md">
            Industrial Component Washing
          </h1>
          <p className="text-xl text-foreground font-medium max-w-2xl mx-auto drop-shadow-md">
            Advanced hydrocarbon-based washing technology for precision cleaning
          </p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            State-of-the-Art Washing Technology
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our industrial component washing services utilize advanced
            hydrocarbon-based washing technology for superior cleaning results.
            We specialize in precision cleaning of automotive and industrial
            components with thorough contaminant removal.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2 mt-2"></div>
              <span>Hydrocarbon-Based Cleaning for Superior Results</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2 mt-2"></div>
              <span>Precision Component Washing for Critical Parts</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2 mt-2"></div>
              <span>Eco-Friendly Solutions for Sustainable Operations</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2 mt-2"></div>
              <span>Industry-Leading Technology for Optimal Cleaning</span>
            </li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Request a Washing Service Quote
          </h3>
          <p className="text-muted-foreground mb-6">
            Fill out the form below to get a customized quote for your
            industrial washing needs.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Person
              </label>
              <input
                type="text"
                className="w-full p-2 border border-border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Component Type
              </label>
              <input
                type="text"
                className="w-full p-2 border border-border rounded-md"
              />
            </div>
            <button className="w-full bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white py-2 rounded-md hover:opacity-90 transition-opacity">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ACMaintenancePage = () => (
  <div className="min-h-screen">
    <div className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-[#2563eb]/10 via-transparent to-[#ec4899]/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-md">
            AC Maintenance Services
          </h1>
          <p className="text-xl text-foreground font-medium max-w-2xl mx-auto drop-shadow-md">
            Professional maintenance to keep your cooling systems running
            efficiently
          </p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-lg p-2 mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Regular Servicing</h3>
          <p className="text-muted-foreground">
            Scheduled maintenance to ensure optimal performance and prevent
            breakdowns.
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-lg p-2 mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path>
              <path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path>
              <path d="M7.539 3.545a10 10 0 0 1 8.922 0"></path>
              <path d="M16.461 20.455a10 10 0 0 1-8.922 0"></path>
              <path d="M5.575 5.575a10 10 0 0 1 12.85 0"></path>
              <path d="M18.425 18.425a10 10 0 0 1-12.85 0"></path>
              <path d="M4.273 8.208a10 10 0 0 1 15.454 0"></path>
              <path d="M19.727 15.792a10 10 0 0 1-15.454 0"></path>
              <path d="M3.682 11.368a10 10 0 0 1 16.636 0"></path>
              <path d="M20.318 12.632a10 10 0 0 1-16.636 0"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">
            Efficiency Optimization
          </h3>
          <p className="text-muted-foreground">
            Fine-tuning your systems to maximize energy efficiency and reduce
            costs.
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-lg p-2 mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 8v4l3 3"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">24/7 Emergency Support</h3>
          <p className="text-muted-foreground">
            Round-the-clock assistance for urgent repairs and system failures.
          </p>
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Our Maintenance Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Inspection</h3>
            <p className="text-sm text-muted-foreground">
              Thorough assessment of your cooling system
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Cleaning</h3>
            <p className="text-sm text-muted-foreground">
              Deep cleaning of all components
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Servicing</h3>
            <p className="text-sm text-muted-foreground">
              Repair and replacement of worn parts
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">4</span>
            </div>
            <h3 className="font-semibold mb-2">Testing</h3>
            <p className="text-sm text-muted-foreground">
              Performance verification and final checks
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ACInstallationPage = () => (
  <div className="min-h-screen">
    <div className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-[#2563eb]/10 via-transparent to-[#ec4899]/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-md">
            AC Installation Services
          </h1>
          <p className="text-xl text-foreground font-medium max-w-2xl mx-auto drop-shadow-md">
            Expert installation of Panel ACs, Chillers, and HVAC systems
          </p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Professional Installation Services
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our team of certified technicians provides expert installation
            services for all types of cooling systems, ensuring optimal
            performance and longevity. We handle everything from site assessment
            to final testing and commissioning.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Site Assessment</h3>
                <p className="text-muted-foreground">
                  Comprehensive evaluation of your space to determine the
                  optimal cooling solution.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Custom Solutions</h3>
                <p className="text-muted-foreground">
                  Tailored installation plans based on your specific
                  requirements and space constraints.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Professional Installation
                </h3>
                <p className="text-muted-foreground">
                  Expert installation by certified technicians following
                  industry best practices.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Testing & Commissioning
                </h3>
                <p className="text-muted-foreground">
                  Thorough testing and commissioning to ensure your system
                  operates at peak efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581146037057-8911db415bc7?w=800&q=80"
            alt="AC Installation"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Get a Free Installation Quote
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team will provide a detailed quote based on your specific
              requirements.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
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
