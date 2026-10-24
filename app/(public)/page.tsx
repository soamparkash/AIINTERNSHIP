// app/(public)/page.tsx
import React from "react";
import Link from "next/link";
import { HeroSection } from "@/components/common/HeroSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />

      {/* Role Portals Hub */}
      <section
        id="portals"
        className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              National Allocation Portals
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Unified GovTech infrastructure serving students, partner
              enterprises, and ministry auditors.
            </p>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Sovereign Merit AI v4.2
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Student Portal Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">
                    school
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
                  DigiLocker Enabled
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Student Candidate Portal
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  View live statutory allocations, simulate skill boosts with
                  the What-If Engine, and download QR onboarding passes.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-outline-variant/20 text-label-md">
                <div className="flex justify-between py-1">
                  <span className="text-on-surface-variant">
                    Deterministic Skill Matching
                  </span>
                  <span className="text-primary font-semibold">Active</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-on-surface-variant">
                    Counterfactual Simulator
                  </span>
                  <span className="text-secondary font-semibold">Included</span>
                </div>
              </div>
            </div>
            <Link
              href="/student/dashboard"
              className="mt-6 w-full py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-all"
            >
              <span>Open Student Dashboard</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Company Portal Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">
                    business_center
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm">
                  500+ Enterprises
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Enterprise Partner Portal
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Publish internship requisitions, inspect pre-vetted AI
                  candidate slates, and manage mentor evaluations.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-outline-variant/20 text-label-md">
                <div className="flex justify-between py-1">
                  <span className="text-on-surface-variant">
                    MCA Verified Onboarding
                  </span>
                  <span className="text-primary font-semibold">Automated</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-on-surface-variant">
                    Skill-Audited Shortlists
                  </span>
                  <span className="text-secondary font-semibold">Tier-1</span>
                </div>
              </div>
            </div>
            <Link
              href="/company/dashboard"
              className="mt-6 w-full py-2.5 rounded-xl bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-on-surface transition-all"
            >
              <span>Open Company Portal</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Admin Governance Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">
                    Gavel
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Ministry Oversight
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Admin &amp; Fairness Console
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Execute national AI matching rounds, audit Section 12-A
                  affirmative quotas, and oversee capacity reallocation.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-outline-variant/20 text-label-md">
                <div className="flex justify-between py-1">
                  <span className="text-on-surface-variant">
                    Immutable Audit Logs
                  </span>
                  <span className="text-primary font-semibold">Real-Time</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-on-surface-variant">
                    Quota Fairness Telemetry
                  </span>
                  <span className="text-secondary font-semibold">Verified</span>
                </div>
              </div>
            </div>
            <Link
              href="/admin/dashboard"
              className="mt-6 w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>Open Admin Console</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Transparency & Governance Section */}
      <section
        id="features"
        className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-16 mb-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold uppercase tracking-wider mb-2">
            Guaranteed Fair Allocation
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Engineered for 100% Transparency
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Backed by statutory quotas and open algorithms. No privileged
            bypasses, no manual tampering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[24px]">
                balance
              </span>
            </div>
            <h4 className="font-headline-sm text-body-lg font-bold text-on-surface mb-1">
              Deterministic Matching
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Mathematical matching rules verified by autonomous public proofs.
              Every allocation step can be audited.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[24px]">
                verified_user
              </span>
            </div>
            <h4 className="font-headline-sm text-body-lg font-bold text-on-surface mb-1">
              Proctored Verification
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              NASSCOM &amp; AICTE certified digital skill badges securely
              imported through verified DigiLocker identities.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[24px]">
                policy
              </span>
            </div>
            <h4 className="font-headline-sm text-body-lg font-bold text-on-surface mb-1">
              Section 12-A Compliance
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Full compliance with national affirmative action, rural college
              reservation, and female representation tiers.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[24px]">
                security
              </span>
            </div>
            <h4 className="font-headline-sm text-body-lg font-bold text-on-surface mb-1">
              Tamper-Proof Pass
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              QR-authenticated digital onboarding pass instantly honored by top
              enterprise HR departments nationwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}