import { useState, useCallback } from "react";
import { validateForm } from "@/lib/form-validation";

type ValidationRules<T> = {
  [K in keyof T]?: (value: T[K]) => boolean;
};

type ValidationErrors<T> = {
  [K in keyof T]?: string;
};

/**
 * Custom hook for form validation
 * @param initialValues - Initial form values
 * @param validationRules - Validation rules for each field
 * @returns Form state and helper functions
 */
export function useFormValidation<T extends Record<string, any>>(
  initialValues: T,
  validationRules: ValidationRules<T>,
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors<T>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle field change
  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));

      // Validate field if it's been touched
      if (touched[name as keyof T]) {
        const fieldRule = validationRules[name as keyof T];
        if (fieldRule && !fieldRule(value)) {
          setErrors((prev) => ({ ...prev, [name]: `Invalid ${name}` }));
        } else {
          setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[name as keyof T];
            return newErrors;
          });
        }
      }
    },
    [validationRules, touched],
  );

  // Mark field as touched on blur
  const handleBlur = useCallback(
    (
      e: React.FocusEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      // Validate field on blur
      const fieldRule = validationRules[name as keyof T];
      if (fieldRule && !fieldRule(values[name as keyof T])) {
        setErrors((prev) => ({ ...prev, [name]: `Invalid ${name}` }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name as keyof T];
          return newErrors;
        });
      }
    },
    [validationRules, values],
  );

  // Validate all fields
  const validateAll = useCallback(() => {
    const validationErrors = validateForm(
      values,
      validationRules as Record<string, (value: any) => boolean>,
    );

    setErrors(validationErrors as ValidationErrors<T>);

    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {} as Record<keyof T, boolean>,
    );
    setTouched(allTouched);

    return Object.keys(validationErrors).length === 0;
  }, [values, validationRules]);

  // Handle form submission
  const handleSubmit = useCallback(
    (onSubmit: (values: T) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      const isValid = validateAll();
      if (isValid) {
        onSubmit(values);
      }

      setIsSubmitting(false);
    },
    [values, validateAll],
  );

  // Reset form
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({} as Record<keyof T, boolean>);
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
  };
}
