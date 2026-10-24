// app/(student)/student/allocations/page.tsx
"use client";

import React, { useState } from "react";

export default function StudentAllocationsPage() {
  const [accepted, setAccepted] = useState(true);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm">
          Round 1 AI Allocation Result
        </span>
        <h1 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface mt-2">
          My Internship Allocation &amp; Onboarding Pass
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Review your primary matched role, verified skill affinity breakdown,
          and digital onboarding credentials.
        </p>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 border border-outline-variant/30 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-bold">
                {accepted ? "Offer Accepted & Locked ✓" : "Action Required"}
              </span>
              <span className="font-label-sm text-on-surface-variant">
                Pass ID: PASS-CG-8841
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl text-on-surface">
              Cloud &amp; AI Platform Engineering Intern
            </h2>
            <p className="font-body-md text-on-surface-variant">
              <strong>Capgemini Technology Services India</strong> • Bengaluru,
              Karnataka (Hybrid) • ₹25,000/month
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "PyTorch 100%",
                "FastAPI 100%",
                "Docker 95%",
                "SQL & Data Pipelines 92%",
              ].map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-label-sm font-semibold"
                >
                  ✓ {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => setAccepted(true)}
              className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg"
            >
              {accepted ? "Onboarding Confirmed ✓" : "Accept Allocation"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}