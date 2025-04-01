// Main JavaScript file for Eagle Eye Enterprise website

document.addEventListener("DOMContentLoaded", function () {
  // Initialize any components that need JavaScript functionality
  initializeComponents();

  // Handle form submissions
  setupFormHandlers();

  // Setup scroll animations
  setupScrollAnimations();
});

function initializeComponents() {
  // This function will initialize any components that need JavaScript
  // For example, sliders, accordions, etc.

  // Initialize any tooltips
  const tooltips = document.querySelectorAll("[data-tooltip]");
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseenter", showTooltip);
    tooltip.addEventListener("mouseleave", hideTooltip);
  });

  // Initialize any tabs
  const tabButtons = document.querySelectorAll("[data-tab-button]");
  tabButtons.forEach((button) => {
    button.addEventListener("click", switchTab);
  });
}

function setupFormHandlers() {
  // Setup form validation and submission for all forms
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      // Only prevent default if the form doesn't have a specific handler
      if (!form.hasAttribute("data-has-handler")) {
        event.preventDefault();
        validateAndSubmitForm(form);
      }
    });
  });
}

function validateAndSubmitForm(form) {
  // Basic form validation
  let isValid = true;
  const requiredFields = form.querySelectorAll("[required]");

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add("border-red-500");

      // Add error message if it doesn't exist
      let errorMessage = field.parentNode.querySelector(".error-message");
      if (!errorMessage) {
        errorMessage = document.createElement("p");
        errorMessage.className = "text-sm text-red-500 error-message";
        errorMessage.textContent = "This field is required";
        field.parentNode.appendChild(errorMessage);
      }
    } else {
      field.classList.remove("border-red-500");

      // Remove error message if it exists
      const errorMessage = field.parentNode.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.remove();
      }
    }
  });

  // If the form is valid, submit it via AJAX
  if (isValid) {
    const formData = new FormData(form);

    // Show loading state
    const submitButton = form.querySelector('[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting...";

    // Create status message container if it doesn't exist
    let statusContainer = form.querySelector(".status-container");
    if (!statusContainer) {
      statusContainer = document.createElement("div");
      statusContainer.className =
        "status-container p-4 rounded-md mb-4 flex items-center gap-2";
      form.prepend(statusContainer);
    }

    // Simulate form submission (in a real app, this would be an actual AJAX call)
    setTimeout(() => {
      // Simulate successful submission
      statusContainer.className =
        "status-container p-4 rounded-md mb-4 flex items-center gap-2 bg-green-50 text-green-800";
      statusContainer.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><p>Thank you for your request. We\'ll get back to you shortly!</p>';

      // Reset form
      form.reset();

      // Reset button
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;

      // Hide status after some time for a new submission
      setTimeout(() => {
        statusContainer.style.display = "none";
      }, 5000);
    }, 1500);
  }
}

function setupScrollAnimations() {
  // Add scroll animations to elements with data-animate attribute
  const animatedElements = document.querySelectorAll("[data-animate]");

  if (animatedElements.length > 0) {
    // Check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Function to add animation class when element is in viewport
    const handleScroll = () => {
      animatedElements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains("animated")) {
          const animation = element.getAttribute("data-animate");
          element.classList.add("animated", animation);
        }
      });
    };

    // Initial check and add scroll event listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }
}

// Helper functions
function showTooltip(event) {
  const tooltip = event.target;
  const tooltipText = tooltip.getAttribute("data-tooltip");

  const tooltipElement = document.createElement("div");
  tooltipElement.className =
    "tooltip absolute bg-gray-900 text-white text-xs rounded py-1 px-2 -mt-8";
  tooltipElement.textContent = tooltipText;

  tooltip.appendChild(tooltipElement);
}

function hideTooltip(event) {
  const tooltip = event.target;
  const tooltipElement = tooltip.querySelector(".tooltip");

  if (tooltipElement) {
    tooltipElement.remove();
  }
}

function switchTab(event) {
  const tabButton = event.target;
  const tabGroup = tabButton.getAttribute("data-tab-group");
  const tabId = tabButton.getAttribute("data-tab-button");

  // Remove active class from all buttons in this group
  const allTabButtons = document.querySelectorAll(
    `[data-tab-group="${tabGroup}"]`,
  );
  allTabButtons.forEach((button) => {
    button.classList.remove("active", "bg-blue-600", "text-white");
    button.classList.add("bg-white", "text-gray-700");
  });

  // Add active class to clicked button
  tabButton.classList.remove("bg-white", "text-gray-700");
  tabButton.classList.add("active", "bg-blue-600", "text-white");

  // Hide all tab content for this group
  const allTabContent = document.querySelectorAll(
    `[data-tab-content-group="${tabGroup}"]`,
  );
  allTabContent.forEach((content) => {
    content.classList.add("hidden");
  });

  // Show the selected tab content
  const selectedContent = document.querySelector(
    `[data-tab-content="${tabId}"]`,
  );
  if (selectedContent) {
    selectedContent.classList.remove("hidden");
  }
}
