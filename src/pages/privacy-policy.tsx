import React from "react";
import PageHeader from "@/components/sections/PageHeader";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Privacy Policy"
        subtitle="Our commitment to protecting your privacy"
      />
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-semibold mb-6">Privacy Policy</h2>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-medium mb-3">1. Introduction</h3>
            <p className="text-muted-foreground">
              Eagle Eye Enterprise ("we", "our", or "us") respects your privacy
              and is committed to protecting your personal data. This privacy
              policy will inform you about how we look after your personal data
              when you visit our website and tell you about your privacy rights
              and how the law protects you.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium mb-3">2. The Data We Collect</h3>
            <p className="text-muted-foreground">
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>
                Identity Data: includes first name, last name, username or
                similar identifier
              </li>
              <li>
                Contact Data: includes billing address, delivery address, email
                address and telephone numbers
              </li>
              <li>
                Technical Data: includes internet protocol (IP) address, browser
                type and version, time zone setting and location, browser
                plug-in types and versions, operating system and platform
              </li>
              <li>
                Usage Data: includes information about how you use our website,
                products and services
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-medium mb-3">
              3. How We Use Your Data
            </h3>
            <p className="text-muted-foreground">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>To provide you with the services you have requested</li>
              <li>To respond to your inquiries</li>
              <li>To improve our website and services</li>
              <li>
                To send you marketing communications if you have opted in to
                receive them
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-medium mb-3">4. Contact Us</h3>
            <p className="text-muted-foreground">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:
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

export default PrivacyPolicy;
