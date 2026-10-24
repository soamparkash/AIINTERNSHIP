// components/common/Logo.tsx
import React from "react";
import Link from "next/link";

interface LogoProps {
  href?: string;
  badgeText?: string;
  subtitle?: string;
}

export function Logo({
  href = "/",
  badgeText = "GovTech",
  subtitle = "PM Internship Scheme Initiative",
}: LogoProps) {
  return (
    <Link className="flex items-center gap-3 group" href={href}>
      <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary font-headline-md font-bold text-headline-sm shadow-sm shrink-0">
        AI
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface group-hover:text-primary transition-colors">
            AIInternAI
          </span>
          <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
            {badgeText}
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          {subtitle}
        </span>
      </div>
    </Link>
  );
}

export default Logo;