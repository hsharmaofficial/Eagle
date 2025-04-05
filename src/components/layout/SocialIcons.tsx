import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

interface SocialIconsProps {
  className?: string;
}

const SocialIcons = ({ className = "" }: SocialIconsProps) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a
        href="#"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="sr-only">Facebook</span>
        <Facebook className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="sr-only">Instagram</span>
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="sr-only">Twitter</span>
        <Twitter className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="sr-only">LinkedIn</span>
        <Linkedin className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialIcons;
