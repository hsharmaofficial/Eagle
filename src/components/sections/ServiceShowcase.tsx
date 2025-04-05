import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "../ui/button";
import { setupScrollAnimations } from "@/lib/animations";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  features?: string[];
}

interface ServiceShowcaseProps {
  services?: ServiceCardProps[];
}

const defaultServices: ServiceCardProps[] = [
  {
    title: "AC Services",
    description:
      "Professional AC installation, maintenance, and repair services for residential and commercial properties.",
    imageUrl:
      "https://images.unsplash.com/photo-1621532316674-6eec9f6e56d9?auto=format&fit=crop&q=80&w=500",
    features: [
      "24/7 Emergency Support",
      "Annual Maintenance Contracts",
      "Skilled Technicians",
      "Genuine Spare Parts",
    ],
  },
  {
    title: "Industrial Washing Machine Services",
    description:
      "Expert maintenance and repair services for industrial washing machines and laundry equipment.",
    imageUrl:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=500",
    features: [
      "Hydrocarbon-Based Cleaning",
      "Precision Component Washing",
      "Eco-Friendly Solutions",
      "Industry-Leading Technology",
    ],
  },
];

const ServiceCard = ({
  title,
  description,
  imageUrl,
  features = [],
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="h-full bg-card border-border overflow-hidden hover:border-primary/50 transition-colors flex flex-col">
        <div className="h-48 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <CardDescription className="text-muted-foreground mb-4">
            {description}
          </CardDescription>

          <div className="mt-auto space-y-4">
            {isHovered && features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            <Button variant="outline" className="group w-full md:w-auto">
              <span className="flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServiceShowcase = ({
  services = defaultServices,
}: ServiceShowcaseProps) => {
  // Initialize scroll animations when component mounts
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <section
      id="services"
      className="w-full py-20 px-4 md:px-8 bg-background flex items-center"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          data-animate="fade-in"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From installation to maintenance, we provide end-to-end services for
            all your AC and industrial washing machine needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-animate="fade-in-up"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                features={service.features}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
