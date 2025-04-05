/**
 * Utility functions for form handling
 */

/**
 * Serializes form data to a URL-encoded string
 * @param data - Object containing form data
 * @returns URL-encoded string
 */
export const serializeFormData = (data: Record<string, any>): string => {
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
    )
    .join("&");
};

/**
 * Formats form data for submission to various APIs
 * @param data - Object containing form data
 * @param format - Format to convert to ('json', 'urlencoded', or 'formdata')
 * @returns Formatted data
 */
export const formatFormData = (
  data: Record<string, any>,
  format: "json" | "urlencoded" | "formdata" = "json",
) => {
  switch (format) {
    case "json":
      return JSON.stringify(data);
    case "urlencoded":
      return serializeFormData(data);
    case "formdata": {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      return formData;
    }
    default:
      return data;
  }
};

/**
 * Extracts form data from a form element
 * @param form - HTML form element
 * @returns Object containing form data
 */
export const extractFormData = (
  form: HTMLFormElement,
): Record<string, string> => {
  const formData = new FormData(form);
  const data: Record<string, string> = {};

  formData.forEach((value, key) => {
    data[key] = value.toString();
  });

  return data;
};

/**
 * Handles form submission with various options
 * @param url - URL to submit form to
 * @param data - Form data to submit
 * @param options - Additional options
 * @returns Promise with response
 */
export const submitForm = async (
  url: string,
  data: Record<string, any>,
  options: {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    headers?: Record<string, string>;
    format?: "json" | "urlencoded" | "formdata";
  } = {},
) => {
  const { method = "POST", headers = {}, format = "json" } = options;

  let requestHeaders = { ...headers };
  let body;

  switch (format) {
    case "json":
      body = JSON.stringify(data);
      requestHeaders = {
        ...requestHeaders,
        "Content-Type": "application/json",
      };
      break;
    case "urlencoded":
      body = serializeFormData(data);
      requestHeaders = {
        ...requestHeaders,
        "Content-Type": "application/x-www-form-urlencoded",
      };
      break;
    case "formdata":
      body = formatFormData(data, "formdata") as FormData;
      // Don't set Content-Type for FormData, browser will set it with boundary
      break;
    default:
      body = data;
  }

  const response = await fetch(url, {
    method,
    headers: requestHeaders,
    body: method !== "GET" ? body : undefined,
  });

  return response;
};
