import React from "react";
import PageHeader from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuoteRequestForm from "@/components/forms/QuoteRequestForm";

const IndustrialWashingPage = () => (
  <div className="min-h-screen">
    <PageHeader
      title="Industrial Component Washing"
      subtitle="Advanced hydrocarbon-based washing technology for precision cleaning"
    />
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

          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
              alt="Industrial Washing Equipment"
              className="rounded-lg w-full h-auto object-cover shadow-md"
            />
          </div>
        </div>
        <div>
          <Card className="border border-border rounded-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Request a Washing Service Quote
              </h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below to get a customized quote for your
                industrial washing needs.
              </p>
              <QuoteRequestForm isSticky={false} />
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Washing Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Initial Assessment</h3>
            <p className="text-muted-foreground">
              Thorough evaluation of components and contaminants to determine
              optimal cleaning approach
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Pre-Treatment</h3>
            <p className="text-muted-foreground">
              Specialized pre-treatment to break down stubborn contaminants and
              prepare surfaces
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Precision Washing</h3>
            <p className="text-muted-foreground">
              Advanced hydrocarbon-based washing with controlled temperature and
              pressure parameters
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Inspection</h3>
            <p className="text-muted-foreground">
              Rigorous quality control to ensure components meet cleanliness
              specifications
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M12 12h.01" />
                <path d="M17 12h.01" />
                <path d="M7 12h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Automotive Manufacturing
            </h3>
            <p className="text-muted-foreground">
              Precision cleaning for engine components, transmission parts, and
              critical automotive assemblies
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
                <path d="M2 22h20" />
                <path d="M3 10v12" />
                <path d="M6 10v12" />
                <path d="M9 10v12" />
                <path d="M12 10v12" />
                <path d="M15 10v12" />
                <path d="M18 10v12" />
                <path d="M21 10v12" />
                <path d="M4 2v8" />
                <path d="M20 2v8" />
                <path d="M12 2v8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Aerospace Industry</h3>
            <p className="text-muted-foreground">
              Specialized cleaning for high-precision aerospace components with
              strict quality requirements
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
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Medical Device Manufacturing
            </h3>
            <p className="text-muted-foreground">
              Ultra-clean washing solutions for medical components requiring
              sterile conditions
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Improve Your Component Cleaning Process?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Contact our team today to discuss your industrial washing requirements
          and discover how our advanced cleaning technology can enhance your
          manufacturing process.
        </p>
        <Button className="bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white px-8 py-3 text-lg rounded-md hover:opacity-90 transition-opacity">
          Schedule a Consultation
        </Button>
      </div>
    </div>
  </div>
);

export default IndustrialWashingPage;
