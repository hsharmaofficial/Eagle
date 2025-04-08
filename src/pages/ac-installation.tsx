import React from "react";
import PageHeader from "@/components/sections/PageHeader";

const ACInstallationPage = () => (
  <div className="min-h-screen">
    <PageHeader
      title="AC Installation Services"
      subtitle="Expert installation of Panel ACs, Chillers, and HVAC systems"
    />
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

      {/* Branded and Customized AC Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our AC Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1613274554329-70f997b53a39?w=800&q=80"
              alt="Branded ACs"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Branded ACs</h3>
              <p className="text-muted-foreground mb-4">
                We are authorized dealers for leading AC brands including
                Daikin, Mitsubishi, Carrier, and more. Our selection includes
                the latest models with advanced features like energy efficiency,
                smart controls, and improved air filtration systems.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Premium brands with manufacturer warranty</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Energy-efficient models for reduced power consumption
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Smart features with mobile app control</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?w=800&q=80"
              alt="Customized ACs"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">
                Customized AC Solutions
              </h3>
              <p className="text-muted-foreground mb-4">
                We design and build custom AC solutions tailored to your
                specific requirements. Our engineering team can create bespoke
                cooling systems for unique spaces, special industrial
                applications, or specific environmental conditions.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Tailored solutions for unique architectural spaces
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Specialized industrial cooling systems</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Custom capacity and performance specifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ACInstallationPage;
