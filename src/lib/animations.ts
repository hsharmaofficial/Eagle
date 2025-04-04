import { isInViewport } from "./scroll";

/**
 * Sets up animations for elements with data-animate attribute
 * Migrated from main.js setupScrollAnimations function
 */
export const setupScrollAnimations = () => {
  // Add scroll animations to elements with data-animate attribute
  const animatedElements = document.querySelectorAll("[data-animate]");

  if (animatedElements.length > 0) {
    // Function to add animation class when element is in viewport
    const handleScroll = () => {
      animatedElements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains("animated")) {
          const animation = element.getAttribute("data-animate");
          element.classList.add("animated", animation || "");
        }
      });
    };

    // Initial check and add scroll event listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Return cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }

  // Return empty cleanup if no animated elements
  return () => {};
};

/**
 * Shows tooltip on mouseenter
 * Migrated from main.js showTooltip function
 */
export const showTooltip = (event: MouseEvent) => {
  const tooltip = event.target as HTMLElement;
  const tooltipText = tooltip.getAttribute("data-tooltip");

  if (!tooltipText) return;

  const tooltipElement = document.createElement("div");
  tooltipElement.className =
    "tooltip absolute bg-gray-900 text-white text-xs rounded py-1 px-2 -mt-8";
  tooltipElement.textContent = tooltipText;

  tooltip.appendChild(tooltipElement);
};

/**
 * Hides tooltip on mouseleave
 * Migrated from main.js hideTooltip function
 */
export const hideTooltip = (event: MouseEvent) => {
  const tooltip = event.target as HTMLElement;
  const tooltipElement = tooltip.querySelector(".tooltip");

  if (tooltipElement) {
    tooltipElement.remove();
  }
};

/**
 * Initializes tooltips for elements with data-tooltip attribute
 * Migrated from main.js initializeComponents function
 */
export const initializeTooltips = () => {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseenter", showTooltip as EventListener);
    tooltip.addEventListener("mouseleave", hideTooltip as EventListener);
  });

  // Return cleanup function
  return () => {
    tooltips.forEach((tooltip) => {
      tooltip.removeEventListener("mouseenter", showTooltip as EventListener);
      tooltip.removeEventListener("mouseleave", hideTooltip as EventListener);
    });
  };
};

/**
 * Switches tab content when tab button is clicked
 * Migrated from main.js switchTab function
 */
export const switchTab = (event: MouseEvent) => {
  const tabButton = event.target as HTMLElement;
  const tabGroup = tabButton.getAttribute("data-tab-group");
  const tabId = tabButton.getAttribute("data-tab-button");

  if (!tabGroup || !tabId) return;

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
};

/**
 * Initializes tabs for elements with data-tab-button attribute
 * Migrated from main.js initializeComponents function
 */
export const initializeTabs = () => {
  const tabButtons = document.querySelectorAll("[data-tab-button]");

  tabButtons.forEach((button) => {
    button.addEventListener("click", switchTab as EventListener);
  });

  // Return cleanup function
  return () => {
    tabButtons.forEach((button) => {
      button.removeEventListener("click", switchTab as EventListener);
    });
  };
};
