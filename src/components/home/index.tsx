import React from "react";
import HeroSection from "../sections/HeroSection";
import TrustIndicatorsComponent from "../sections/TrustIndicators";
import OurClients from "../sections/OurClients";
import Contact from "../sections/Contact";
import AboutUs from "../sections/AboutUs";
import EnhancedServices from "../sections/EnhancedServices";
import WhyChooseUs from "../sections/WhyChooseUs";
import Testimonials from "../sections/Testimonials";
import ServiceShowcase from "../sections/ServiceShowcase";

const Home = () => {
  return (
    <div className="relative">
      <main className="relative">
        <HeroSection />
        <div className="relative z-10 space-y-0">
          <div className="bg-gradient-to-r from-[#2563eb]/5 to-[#ec4899]/5">
            <TrustIndicatorsComponent />
            <ServiceShowcase />
            <OurClients />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/10 to-transparent transform -skew-y-6 scale-110" />
            <AboutUs />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#ec4899]/10 to-transparent transform skew-y-6 scale-110" />
            <EnhancedServices />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563eb]/10 to-[#ec4899]/5 transform -skew-y-3 scale-110" />
            <WhyChooseUs />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563eb]/10 to-[#ec4899]/5 transform -skew-y-3 scale-110" />
            <Testimonials />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tl from-[#ec4899]/10 to-[#2563eb]/5 transform skew-y-3 scale-110" />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
