import React from "react";
import PageHeader from "@/components/sections/PageHeader";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Terms of Service"
        subtitle="Please read our terms and conditions carefully"
      />
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-semibold mb-6">Terms of Service</h2>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-medium mb-3">1. Introduction</h3>
            <p className="text-muted-foreground">
              These terms and conditions outline the rules and regulations for
              the use of Eagle Eye Enterprise's website and services. By
              accessing this website or using our services, we assume you accept
              these terms and conditions in full. Do not continue to use Eagle
              Eye Enterprise's website or services if you do not accept all of
              the terms and conditions stated on this page.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium mb-3">2. Services</h3>
            <p className="text-muted-foreground">
              Eagle Eye Enterprise provides AC installation, maintenance, repair
              services, and industrial washing machine services. All services
              are subject to availability and may vary by location. We reserve
              the right to refuse service to anyone for any reason at any time.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium mb-3">
              3. Warranties and Liability
            </h3>
            <p className="text-muted-foreground">
              Our services come with warranties as specified at the time of
              service. We shall not be liable for any indirect, incidental,
              special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the services.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium mb-3">4. Governing Law</h3>
            <p className="text-muted-foreground">
              These terms and conditions are governed by and construed in
              accordance with the laws of India and you irrevocably submit to
              the exclusive jurisdiction of the courts in Haryana, India.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium mb-3">5. Contact Us</h3>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <div className="mt-2">
              <p className="text-muted-foreground">
                Email: contact@eagleeyeac.com
              </p>
              <p className="text-muted-foreground">Phone: +91 99113 97792</p>
              <p className="text-muted-foreground">
                Address: 1125, Sector-6, Part-II, Dharuhera, Haryana, India
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
