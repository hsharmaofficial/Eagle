import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useFormValidation } from "@/hooks/useFormValidation";
import { isValidEmail, isValidPhone, isEmpty } from "@/lib/form-validation";

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  botcheck?: string;
}

interface QuoteRequestFormProps {
  onSubmit?: (data: QuoteFormData) => void;
  isSticky?: boolean;
  isModal?: boolean;
  onSuccess?: () => void;
}

const QuoteRequestForm = ({
  onSubmit,
  isSticky = true,
  isModal = false,
  onSuccess,
}: QuoteRequestFormProps) => {
  const initialValues: QuoteFormData = {
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
    botcheck: "",
  };

  const validationRules = {
    name: (value: string) => !isEmpty(value),
    email: (value: string) => isValidEmail(value),
    phone: (value: string) => isValidPhone(value),
    serviceType: (value: string) => !isEmpty(value),
    message: (value: string) => !isEmpty(value),
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
  } = useFormValidation<QuoteFormData>(initialValues, validationRules);

  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );
  const [statusMessage, setStatusMessage] = useState("");

  // Check for pre-filled service type from spare parts page
  React.useEffect(() => {
    const enquiredPartName = localStorage.getItem("enquiredPartName");
    if (enquiredPartName) {
      setValues((prev) => ({
        ...prev,
        serviceType: `Enquiry about ${enquiredPartName}`,
      }));
      // Clear the storage after using it
      localStorage.removeItem("enquiredPartName");
    }
  }, [setValues]);

  // Add a second effect that runs on every render to catch direct DOM updates
  React.useEffect(() => {
    const serviceTypeInput = document.querySelector(
      "#serviceType",
    ) as HTMLInputElement;
    if (
      serviceTypeInput &&
      serviceTypeInput.value.startsWith("Enquiry about")
    ) {
      setValues((prev) => ({
        ...prev,
        serviceType: serviceTypeInput.value,
      }));
    }
  });

  const handleFormSubmit = async (data: QuoteFormData) => {
    if (onSubmit) {
      onSubmit(data);
      return;
    }

    setSubmitStatus(null);

    try {
      // Log form submission for debugging
      console.log("Submitting form data:", data);

      // Simulate API call with a delay for demo purposes
      // In production, uncomment the actual API call below
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Define API response type
      type ApiResponse = {
        success: boolean;
        message?: string;
      };

      // Simulated successful response
      const result: ApiResponse = { success: true };

      /* Actual API call - uncomment in production
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f6a883af-83c0-42ac-bf31-6561607932d0",
          name: data.name,
          email: data.email,
          phone: data.phone,
          service_type: data.serviceType,
          message: data.message,
          subject: "New Quote Request from Eagle Eye Enterprise Website",
          botcheck: data.botcheck,
        }),
      });

      const result = await response.json();
      */

      if (result.success) {
        // Track form submission event (for analytics integration)
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "form_submission", {
            event_category: "Quote Request",
            event_label: data.serviceType,
          });
        }

        setSubmitStatus("success");
        setStatusMessage(
          "Thank you for your request. We'll get back to you shortly!",
        );
        reset();

        // Store submission in localStorage to prevent spam
        localStorage.setItem("lastFormSubmission", new Date().toISOString());

        if (onSuccess) {
          // Call onSuccess callback after a delay to allow the user to see the success message
          setTimeout(() => {
            onSuccess();
          }, 2000);
        }
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <Card
      className={`bg-card border-border p-8 rounded-lg shadow-lg w-full
      ${isSticky && !isModal ? "sticky top-4" : ""}`}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Request a Quote
          </h2>
          <p className="text-muted-foreground mt-2">
            Get a free consultation for your needs
          </p>
        </div>

        {submitStatus && (
          <div
            className={`p-4 rounded-md ${submitStatus === "success" ? "bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-400"} mb-4 flex items-center gap-2`}
          >
            {submitStatus === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <p>{statusMessage}</p>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <p className="text-sm text-red-500">Name is required</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <p className="text-sm text-red-500">Invalid email address</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.phone && errors.phone && (
            <p className="text-sm text-red-500">Invalid phone number</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type</Label>
          <Input
            id="serviceType"
            name="serviceType"
            placeholder="AC Maintenance / Industrial Washing Machine"
            value={values.serviceType}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.serviceType && errors.serviceType && (
            <p className="text-sm text-red-500">Service type is required</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Please describe your service needs..."
            className="min-h-[100px]"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.message && errors.message && (
            <p className="text-sm text-red-500">Message is required</p>
          )}
        </div>

        {/* Honeypot field to prevent spam */}
        <div className="opacity-0 absolute left-[-9999px] top-[-9999px]">
          <input
            type="text"
            name="botcheck"
            value={values.botcheck || ""}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#2563eb] to-[#ec4899] hover:from-[#0033e4]/90 hover:to-[#FA008A]/90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Quote Request"}
        </Button>

        <div className="text-center text-sm text-muted-foreground mt-4">
          <span className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            We'll get back to you within 24 hours
          </span>
        </div>
      </form>
    </Card>
  );
};

export default QuoteRequestForm;
