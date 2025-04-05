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
    small: "h-4",
    medium: "h-[18px]",
    large: "h-8",
  };

  // Use the provided className or default to the size class
  const logoClass = className || sizeClasses[size];

  return (
    <div className="flex items-center">
      <img
        src="https://res.cloudinary.com/dsegbtegv/image/upload/v1740843828/EE_q7uckg.png"
        alt="Eagle Eye Enterprise Logo"
        className={logoClass}
      />
    </div>
  );
};

export default Logo;
