import React from "react";
import PageHeader from "@/components/sections/PageHeader";
import AboutUs from "@/components/sections/AboutUs";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About Eagle Eye Enterprise"
        subtitle="Over 20 years of excellence in cooling & industrial solutions"
      />
      <div className="py-20">
        <AboutUs />
      </div>
    </div>
  );
};

export default AboutPage;
