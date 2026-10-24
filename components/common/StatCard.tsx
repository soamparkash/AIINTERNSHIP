// components/common/StatCard.tsx
import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: string;
  icon?: React.ReactNode | React.ComponentType<{ className?: string }>;
  variant?: "primary" | "secondary" | "tertiary" | "default";
}

export function StatCard({
  title,
  value,
  subtitle,
  trend,
  icon,
  variant = "default",
}: StatCardProps) {
  const badgeColors = {
    primary: "bg-primary-fixed text-primary",
    secondary: "bg-secondary-fixed text-secondary",
    tertiary: "bg-tertiary-fixed text-tertiary",
    default: "bg-surface-container text-on-surface-variant",
  };

  // Safely render icon whether it's passed as a component reference or JSX element
  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon)) return icon;
    if (typeof icon === "function") {
      const IconComponent = icon as React.ComponentType<{ className?: string }>;
      return <IconComponent className="w-5 h-5" />;
    }
    return null;
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
          {title}
        </span>
        {icon && (
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center ${badgeColors[variant]}`}
          >
            {renderIcon()}
          </div>
        )}
      </div>
      <div className="mt-3">
        <div className="font-headline-md text-2xl font-bold text-on-surface">
          {value}
        </div>
        {(subtitle || trend) && (
          <div className="flex items-center gap-1.5 mt-1 font-label-sm text-[11px] text-secondary font-semibold">
            {trend && <span>{trend}</span>}
            {subtitle && (
              <span className="text-on-surface-variant font-normal">
                {subtitle}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCard;