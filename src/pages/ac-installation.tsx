import React from "react";
import PageHeader from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuoteRequestForm from "@/components/forms/QuoteRequestForm";
import { ArrowRight, CheckCircle, Settings, Wrench, Zap } from "lucide-react";

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
        <div>
          <QuoteRequestForm isSticky={true} />
        </div>
      </div>

      {/* Installation Process Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Installation Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Consultation</h3>
            <p className="text-muted-foreground">
              We discuss your requirements and assess your space to recommend
              the best cooling solution.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Planning</h3>
            <p className="text-muted-foreground">
              Our engineers create a detailed installation plan tailored to your
              specific needs.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Installation</h3>
            <p className="text-muted-foreground">
              Our certified technicians install your system with precision and
              attention to detail.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Testing</h3>
            <p className="text-muted-foreground">
              We thoroughly test and commission your system to ensure optimal
              performance.
            </p>
          </div>
        </div>
      </div>

      {/* Types of AC Systems */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Types of AC Systems We Install
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/60">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                alt="Panel AC"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-2 rounded-full">
                <Settings className="h-8 w-8 text-primary" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Panel AC Systems</h3>
              <p className="text-muted-foreground mb-4">
                Specialized cooling solutions for electrical panels, server
                rooms, and industrial enclosures.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Temperature control for sensitive equipment",
                  "Prevents overheating of electrical components",
                  "Extends equipment lifespan",
                  "Reduces maintenance costs",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="outline" className="w-full group">
                <a href="#quote-form">
                  <span>Request Quote</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </Card>

          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/60">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Chiller Systems"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-2 rounded-full">
                <Zap className="h-8 w-8 text-primary" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Chiller Systems</h3>
              <p className="text-muted-foreground mb-4">
                Industrial-grade cooling solutions for large facilities and
                manufacturing plants.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "High-capacity cooling for large spaces",
                  "Precise temperature control",
                  "Energy-efficient operation",
                  "Scalable solutions",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="outline" className="w-full group">
                <a href="#quote-form">
                  <span>Request Quote</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </Card>

          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/60">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?w=800&q=80"
                alt="HVAC Systems"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-2 rounded-full">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">HVAC Systems</h3>
              <p className="text-muted-foreground mb-4">
                Complete heating, ventilation, and air conditioning solutions
                for commercial and industrial spaces.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Integrated temperature control",
                  "Improved air quality",
                  "Year-round comfort",
                  "Custom designed for your space",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="outline" className="w-full group">
                <a href="#quote-form">
                  <span>Request Quote</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 bg-gradient-to-r from-[#2563eb]/10 to-[#ec4899]/10 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Install Your New AC System?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Contact our team today to schedule a consultation and get a customized
          quote for your AC installation needs.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white px-8 py-6 text-lg rounded-lg hover:opacity-90 transition-opacity"
        >
          Schedule a Consultation
        </Button>
      </div>
    </div>
  </div>
);

export default ACInstallationPage;
