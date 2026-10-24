// components/common/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo href="/" />

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="#how-it-works"
              className="px-3.5 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              Allocation Engine
            </Link>
            <Link
              href="#features"
              className="px-3.5 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              Statutory Quotas
            </Link>
            <Link
              href="#portals"
              className="px-3.5 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              Role Portals
            </Link>
            <Link
              href="/student/dashboard"
              className="px-3.5 py-2 rounded-lg font-label-lg text-label-lg text-primary font-semibold hover:bg-surface-container transition-colors"
            >
              Live Student Portal
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant border border-secondary-fixed-dim/40">
            <span className="material-symbols-outlined text-[16px] text-secondary">
              verified_user
            </span>
            <span className="font-label-sm text-label-sm">
              DigiLocker Integrated
            </span>
          </div>

          <Link
            href="/login"
            className="px-4 py-2.5 rounded-xl font-label-lg text-label-lg text-on-surface hover:bg-surface-container transition-colors"
          >
            Sign In
          </Link>

          <Link
            href="/student/dashboard"
            className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center gap-2 shadow-sm hover:bg-primary-container transition-all"
          >
            <span>Enter Portal</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;