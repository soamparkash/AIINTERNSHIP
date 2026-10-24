// components/common/PageHeader.tsx
import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  badge,
  actions,
  children,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant/30 mb-6">
      <div className="space-y-1">
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            {badge}
          </div>
        )}
        <h1 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            {description}
          </p>
        )}
      </div>
      {(actions || children) && (
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {actions}
          {children}
        </div>
      )}
    </div>
  );
}

export default PageHeader;