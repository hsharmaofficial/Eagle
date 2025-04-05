import React from "react";
import { useTheme } from "../theme-provider";

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

const Logo = ({ className, size = "medium" }: LogoProps) => {
  const { theme } = useTheme();

  // Define size classes based on the size prop
  const sizeClasses = {
    small: "h-6",
    medium: "h-8", // Increased to h-8 which is 32px for better visibility
    large: "h-12",
  };

  // Use the provided className or default to the size class
  const logoClass = `${sizeClasses[size]} object-contain max-w-[180px] ${className || ""}`;

  return (
    <div className="flex items-center overflow-hidden">
      <img
        src="https://res.cloudinary.com/dsegbtegv/image/upload/v1740843828/EE_q7uckg.png"
        alt="Eagle Eye Enterprise Logo"
        className={logoClass}
      />
    </div>
  );
};

export default Logo;
