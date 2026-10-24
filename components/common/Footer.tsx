// components/common/Footer.tsx
import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-sm font-bold text-body-md">
                AI
              </div>
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">
                SmartAlloc AI
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              AI-powered smart internship allocation and career readiness
              platform matching students with enterprise roles.
            </p>
          </div>

          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface font-semibold mb-3">
              Student Modules
            </h4>
            <ul className="space-y-2">
              <li className="font-body-sm text-body-sm">
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="/student/what-if"
                >
                  What-If Skill Simulator
                </Link>
              </li>
              <li className="font-body-sm text-body-sm">
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="/student/assessments"
                >
                  Technical Assessments
                </Link>
              </li>
              <li className="font-body-sm text-body-sm">
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="/student/allocations"
                >
                  Allocation Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface font-semibold mb-3">
              Portals
            </h4>
            <ul className="space-y-2">
              <li className="font-body-sm text-body-sm">
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="/student/dashboard"
                >
                  Student Portal
                </Link>
              </li>
              <li className="font-body-sm text-body-sm">
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="/company/dashboard"
                >
                  Company Recruitment Portal
                </Link>
              </li>
              <li className="font-body-sm text-body-sm">
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="/admin/dashboard"
                >
                  Admin Allocation Console
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface font-semibold mb-3">
              System Status
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
              AI Matching &amp; Allocation Engine v2.4
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm text-secondary font-semibold">
                All Allocation Services Online
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 SmartAlloc AI — AI Smart Allocation Engine. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 font-label-sm text-label-sm text-on-surface-variant">
            <Link className="hover:text-primary transition-colors" href="/student/settings">
              Settings
            </Link>
            <Link className="hover:text-primary transition-colors" href="/student/profile">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;