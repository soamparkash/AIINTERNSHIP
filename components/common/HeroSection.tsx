// components/common/HeroSection.tsx
"use client";

import React from "react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 pt-10 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
              PM Internship Scheme AI Allocation Engine 2025 • Round 1 Live
            </span>
          </div>

          <h1 className="font-headline-xl text-4xl sm:text-5xl lg:text-headline-xl text-on-surface tracking-tight">
            Sovereign Merit{" "}
            <span className="text-primary">AI Internship</span> Allocation
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Deterministic skill matching, NASSCOM &amp; AICTE proctored
            verification, and statutory affirmative quota compliance connecting
            India&apos;s top talent with 500+ partner enterprises.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/student/dashboard"
              className="px-6 py-3.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center gap-2 shadow-sm hover:bg-primary-container transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">
                rocket_launch
              </span>
              Launch Student Portal
            </Link>
            <Link
              href="/company/dashboard"
              className="px-5 py-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center gap-2 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">
                domain
              </span>
              Enterprise Partner Hub
            </Link>
            <Link
              href="/admin/dashboard"
              className="px-4 py-3.5 rounded-xl border border-outline-variant/40 hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                admin_panel_settings
              </span>
              Ministry Admin
            </Link>
          </div>

          {/* 4 Telemetry Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                  Openings
                </span>
                <div className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">
                    work
                  </span>
                </div>
              </div>
              <div className="mt-2 font-headline-sm text-[20px] font-bold text-on-surface">
                420,000+
              </div>
              <div className="text-on-surface-variant font-label-sm text-[11px] mt-0.5">
                500+ Top Enterprises
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                  Stipend DBT
                </span>
                <div className="w-7 h-7 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">
                    payments
                  </span>
                </div>
              </div>
              <div className="mt-2 font-headline-sm text-[20px] font-bold text-on-surface">
                ₹25,000
              </div>
              <div className="text-secondary font-label-sm text-[11px] mt-0.5 flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">
                  verified
                </span>
                Direct Benefit
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                  Precision
                </span>
                <div className="w-7 h-7 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">
                    psychology
                  </span>
                </div>
              </div>
              <div className="mt-2 font-headline-sm text-[20px] font-bold text-primary">
                99.4%
              </div>
              <div className="text-primary font-label-sm text-[11px] font-semibold mt-0.5">
                Zero-Bias Audit
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                  Compliance
                </span>
                <div className="w-7 h-7 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">
                    policy
                  </span>
                </div>
              </div>
              <div className="mt-2 font-headline-sm text-[20px] font-bold text-on-surface">
                Sec 12-A
              </div>
              <div className="text-secondary font-label-sm text-[11px] font-semibold mt-0.5">
                100% Statutory
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Attached 3D Illustration */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-2xl transform rotate-2 pointer-events-none"></div>
            <div className="relative bg-surface-container-lowest rounded-3xl p-3 border border-outline-variant/30 shadow-lg overflow-hidden group">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container">
                <img
                  src="/hero-illustration.png"
                  alt="AI Smart Internship and Career Allocation Illustration"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/75 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-label-sm text-[11px] text-on-surface font-bold">
                    Round 1 Prime Allotment
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[11px] font-bold shadow-md">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  DigiLocker Verified
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 border border-outline-variant/30 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold text-label-md shrink-0">
                      AI
                    </div>
                    <div>
                      <div className="font-label-md text-label-md text-on-surface font-bold leading-tight">
                        Deterministic AI Engine v4.2
                      </div>
                      <div className="text-secondary font-label-sm text-[11px] font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">
                          check_circle
                        </span>
                        88.4% Avg Tier-1 Affinity
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-headline-sm text-headline-sm text-primary font-extrabold">
                      ₹25,000
                    </div>
                    <div className="font-label-sm text-[9px] uppercase tracking-wider text-on-surface-variant font-semibold">
                      Monthly DBT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;