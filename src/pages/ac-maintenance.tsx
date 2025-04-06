import React from "react";
import PageHeader from "@/components/sections/PageHeader";

const ACMaintenancePage = () => (
  <div className="min-h-screen">
    <PageHeader
      title="AC Maintenance Services"
      subtitle="Professional maintenance to keep your cooling systems running efficiently"
    />
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

      <div className="mt-16 bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">
            Annual Maintenance Contracts (AMC)
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our comprehensive AMC plans ensure your cooling systems operate at
            peak efficiency year-round. Choose from our flexible maintenance
            packages designed to meet your specific needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-center">
                Basic Plan
              </h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">₹12,000</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Quarterly Maintenance Visits</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Basic System Cleaning</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Performance Check</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Email Support</span>
                </li>
              </ul>
              <button className="w-full py-2 bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white rounded-md hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>

            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow relative bg-gradient-to-r from-[#2563eb]/5 to-[#ec4899]/5">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Standard Plan
              </h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">₹24,000</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Bi-Monthly Maintenance Visits</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Deep System Cleaning</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Performance Optimization</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Priority Phone Support</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Minor Repairs Included</span>
                </li>
              </ul>
              <button className="w-full py-2 bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white rounded-md hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>

            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-center">
                Premium Plan
              </h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">₹36,000</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Monthly Maintenance Visits</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Comprehensive System Cleaning</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Advanced Performance Optimization</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>24/7 Emergency Support</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>All Repairs Included</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <button className="w-full py-2 bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white rounded-md hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ACMaintenancePage;
