import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  return (
    <ul className={`space-y-2 ${className}`}>
      <li>
        <a
          href="tel:+919911397792"
          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer select-text"
        >
          <Phone className="w-4 h-4" />
          +91 99113 97792
        </a>
      </li>
      <li>
        <a
          href="tel:+919990002435"
          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer select-text"
        >
          <Phone className="w-4 h-4" />
          +91 99900 02435
        </a>
      </li>
      <li>
        <a
          href="mailto:contact@eagleeyeac.com"
          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer select-text"
        >
          <Mail className="w-4 h-4" />
          contact@eagleeyeac.com
        </a>
      </li>
      <li className="flex items-start gap-2 text-muted-foreground select-text">
        <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
        <span>1125, Sector-6, Part-II, Dharuhera, Haryana</span>
      </li>
    </ul>
  );
};

export default SocialLinks;
