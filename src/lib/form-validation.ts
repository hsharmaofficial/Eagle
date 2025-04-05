/**
 * Form validation utilities
 */

// Email validation regex
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// Phone number validation regex (supports international formats)
export const PHONE_REGEX = /^\+?[0-9\s\-()]{7,20}$/;

/**
 * Validates an email address
 * @param email - Email address to validate
 * @returns Boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

/**
 * Validates a phone number
 * @param phone - Phone number to validate
 * @returns Boolean indicating if phone number is valid
 */
export const isValidPhone = (phone: string): boolean => {
  return PHONE_REGEX.test(phone);
};

/**
 * Checks if a string is empty or only contains whitespace
 * @param value - String to check
 * @returns Boolean indicating if string is empty
 */
export const isEmpty = (value: string): boolean => {
  return value.trim() === "";
};

/**
 * Validates form data with custom validation rules
 * @param data - Object containing form data
 * @param rules - Object containing validation rules
 * @returns Object containing validation errors
 */
export const validateForm = (
  data: Record<string, any>,
  rules: Record<string, (value: any) => boolean>,
): Record<string, string> => {
  const errors: Record<string, string> = {};

  Object.entries(rules).forEach(([field, validator]) => {
    if (data[field] !== undefined && !validator(data[field])) {
      errors[field] = `Invalid ${field}`;
    }
  });

  return errors;
};

/**
 * Checks if a form has been submitted recently to prevent spam
 * @param minInterval - Minimum interval in milliseconds between submissions
 * @returns Boolean indicating if a submission is allowed
 */
export const canSubmitForm = (minInterval = 60000): boolean => {
  const lastSubmission = localStorage.getItem("lastFormSubmission");
  if (!lastSubmission) return true;

  const lastSubmissionTime = new Date(lastSubmission).getTime();
  const currentTime = new Date().getTime();

  return currentTime - lastSubmissionTime > minInterval;
};
