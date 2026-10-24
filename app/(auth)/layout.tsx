// app/(auth)/layout.tsx
import React from "react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-background font-body-md text-on-surface antialiased">
      {/* Left Column: Auth Form Container */}
      <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-surface-container-lowest border-r border-outline-variant/30">
        {/* Top Brand Header */}
        <div className="flex items-center justify-between">
          <Link className="flex items-center gap-2.5 group" href="/">
            <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary font-headline-md font-bold text-sm shadow-sm">
              AI
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-headline-sm text-[16px] font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                  SmartAlloc AI
                </span>
                <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[10px] font-semibold">
                  v2.4
                </span>
              </div>
              <span className="font-label-sm text-[10px] text-on-surface-variant">
                AI Smart Allocation Engine
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[15px]">
              arrow_back
            </span>
            Back to Home
          </Link>
        </div>

        {/* Center Form Content */}
        <div className="max-w-md w-full mx-auto my-8">{children}</div>

        {/* Bottom Metadata Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-outline-variant/20 font-label-sm text-[11px] text-on-surface-variant">
          <span>© 2026 SmartAlloc AI. All rights reserved.</span>
          <div className="flex items-center gap-1.5 text-secondary font-semibold">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span>Allocation Engine Online</span>
          </div>
        </div>
      </div>

      {/* Right Column: Visual Showcase with 3D Illustration */}
      <div className="hidden lg:flex lg:col-span-6 flex-col justify-center items-center p-12 bg-surface-container relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-tertiary/10 blur-3xl pointer-events-none" />

        <div className="max-w-lg w-full space-y-6 relative z-10">
          <div className="relative bg-surface-container-lowest rounded-3xl p-3 border border-outline-variant/30 shadow-xl overflow-hidden group">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container">
              <img
                src="/hero-illustration.png"
                alt="AI Smart Internship and Career Allocation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 shadow-md">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-label-sm text-[11px] text-on-surface font-bold">
                  Multi-Criteria AI Matching
                </span>
              </div>

              <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[11px] font-bold shadow-md">
                <span className="material-symbols-outlined text-[14px]">
                  verified
                </span>
                99.4% Precision
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 border border-outline-variant/30 shadow-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold text-label-md shrink-0">
                    AI
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-bold leading-tight">
                      Real-Time Skill Telemetry
                    </div>
                    <div className="text-secondary font-label-sm text-[11px] font-semibold">
                      Instant Student ↔ Enterprise Allocation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-center px-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Deterministic AI Internship Allocation
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Connect verified student skill profiles, proctored assessments,
              and counterfactual career simulations with enterprise engineering
              teams.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-surface-container-lowest/80 rounded-2xl p-3.5 border border-outline-variant/30 text-center">
              <div className="font-headline-sm font-bold text-primary">
                88.4%
              </div>
              <div className="font-label-sm text-[10px] text-on-surface-variant uppercase mt-0.5">
                Avg Match Score
              </div>
            </div>
            <div className="bg-surface-container-lowest/80 rounded-2xl p-3.5 border border-outline-variant/30 text-center">
              <div className="font-headline-sm font-bold text-on-surface">
                500+
              </div>
              <div className="font-label-sm text-[10px] text-on-surface-variant uppercase mt-0.5">
                Partner Companies
              </div>
            </div>
            <div className="bg-surface-container-lowest/80 rounded-2xl p-3.5 border border-outline-variant/30 text-center">
              <div className="font-headline-sm font-bold text-secondary">
                Zero-Bias
              </div>
              <div className="font-label-sm text-[10px] text-on-surface-variant uppercase mt-0.5">
                Audit Verified
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}