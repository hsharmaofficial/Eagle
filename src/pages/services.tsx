import React from "react";
import PageHeader from "@/components/sections/PageHeader";
import EnhancedServices from "@/components/sections/EnhancedServices";
import ServiceShowcase from "@/components/sections/ServiceShowcase";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive solutions for your cooling and industrial washing needs"
      />
      <div className="py-20">
        <ServiceShowcase />
        <EnhancedServices />
      </div>
    </div>
  );
};

export default ServicesPage;
