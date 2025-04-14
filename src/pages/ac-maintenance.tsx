import React from "react";
import PageHeader from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuoteRequestForm from "@/components/forms/QuoteRequestForm";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Clock,
  Wrench,
} from "lucide-react";

const ACMaintenancePage = () => (
  <div className="min-h-screen">
    <PageHeader
      title="AC Maintenance Services"
      subtitle="Professional maintenance to keep your cooling systems running efficiently"
    />
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Comprehensive Maintenance Solutions
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Regular maintenance is crucial for ensuring the longevity and
            efficiency of your cooling systems. Our expert technicians provide
            comprehensive maintenance services to keep your equipment running at
            peak performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-lg p-2 mb-4 flex items-center justify-center">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regular Servicing</h3>
              <p className="text-muted-foreground">
                Scheduled maintenance to ensure optimal performance and prevent
                breakdowns.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-lg p-2 mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Efficiency Optimization
              </h3>
              <p className="text-muted-foreground">
                Fine-tuning your systems to maximize energy efficiency and
                reduce costs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-lg p-2 mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                24/7 Emergency Support
              </h3>
              <p className="text-muted-foreground">
                Round-the-clock assistance for urgent repairs and system
                failures.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              Why Regular Maintenance Matters
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span>Extends equipment lifespan by up to 40%</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span>Reduces energy consumption by 15-20%</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span>Prevents costly emergency repairs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span>Ensures consistent cooling performance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span>Maintains healthy air quality</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <QuoteRequestForm isSticky={true} />
        </div>
      </div>

      {/* Maintenance Process */}
      <div className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Our Maintenance Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Inspection</h3>
            <p className="text-sm text-muted-foreground">
              Thorough assessment of your cooling system components and
              performance
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Cleaning</h3>
            <p className="text-sm text-muted-foreground">
              Deep cleaning of all components including coils, filters, and fans
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Servicing</h3>
            <p className="text-sm text-muted-foreground">
              Repair and replacement of worn parts, refrigerant top-up if needed
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">4</span>
            </div>
            <h3 className="font-semibold mb-2">Testing</h3>
            <p className="text-sm text-muted-foreground">
              Performance verification, efficiency testing, and final
              adjustments
            </p>
          </div>
        </div>
      </div>

      {/* Maintenance Packages */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Annual Maintenance Contracts (AMC)
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          Our comprehensive AMC plans ensure your cooling systems operate at
          peak efficiency year-round. Choose from our flexible maintenance
          packages designed to meet your specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-[#2563eb]/10 to-[#ec4899]/10 p-4 text-center">
              <h3 className="text-xl font-semibold">Basic Plan</h3>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">₹12,000</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Quarterly Maintenance Visits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Basic System Cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Performance Check</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Email Support</span>
                </li>
              </ul>
              <Button
                className="w-full bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white hover:opacity-90 transition-opacity"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Started
              </Button>
            </div>
          </Card>

          <Card className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <div className="bg-gradient-to-r from-[#2563eb]/20 to-[#ec4899]/20 p-4 text-center">
              <h3 className="text-xl font-semibold">Standard Plan</h3>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">₹24,000</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Bi-Monthly Maintenance Visits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Deep System Cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Performance Optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Priority Phone Support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Minor Repairs Included</span>
                </li>
              </ul>
              <Button
                className="w-full bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white hover:opacity-90 transition-opacity"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Started
              </Button>
            </div>
          </Card>

          <Card className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-[#2563eb]/10 to-[#ec4899]/10 p-4 text-center">
              <h3 className="text-xl font-semibold">Premium Plan</h3>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">₹36,000</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Monthly Maintenance Visits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Comprehensive System Cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Advanced Performance Optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>24/7 Emergency Support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>All Repairs Included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <Button
                className="w-full bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white hover:opacity-90 transition-opacity"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Started
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1581092580497-0d23cbdf1dc?w=800&q=80"
            alt="AC Maintenance"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Benefits of Regular Maintenance
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Regular maintenance of your cooling systems offers numerous benefits
            that go beyond just keeping your equipment running. Here's why our
            maintenance services are essential for your business:
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Prevent Costly Breakdowns
                </h3>
                <p className="text-muted-foreground">
                  Regular maintenance identifies and addresses potential issues
                  before they lead to system failure, saving you from expensive
                  emergency repairs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Improve Energy Efficiency
                </h3>
                <p className="text-muted-foreground">
                  Well-maintained systems consume less energy, reducing your
                  utility bills and environmental footprint.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Extend Equipment Lifespan
                </h3>
                <p className="text-muted-foreground">
                  Regular servicing significantly extends the operational life
                  of your cooling systems, maximizing your investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#2563eb]/10 to-[#ec4899]/10 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Ensure Your AC Systems Run at Peak Efficiency?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Contact our team today to schedule a maintenance visit or discuss our
          Annual Maintenance Contract options.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white px-8 py-6 text-lg rounded-lg hover:opacity-90 transition-opacity"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Schedule Maintenance
        </Button>
      </div>
    </div>
  </div>
);

export default ACMaintenancePage;
