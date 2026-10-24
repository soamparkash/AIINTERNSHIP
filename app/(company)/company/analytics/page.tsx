// app/(company)/company/analytics/page.tsx
"use client";

import React, { useState } from "react";

const ROLE_METRICS = [
  {
    role: "Cloud & AI Platform Engineering Intern",
    applications: 64,
    shortlisted: 18,
    allocated: 8,
    capacity: 10,
    avgAffinity: 93.4,
  },
  {
    role: "Autonomous Agent Evaluator",
    applications: 48,
    shortlisted: 14,
    allocated: 6,
    capacity: 8,
    avgAffinity: 91.2,
  },
  {
    role: "Fullstack FinTech Microservices Intern",
    applications: 30,
    shortlisted: 10,
    allocated: 4,
    capacity: 6,
    avgAffinity: 89.6,
  },
];

export default function CompanyAnalyticsPage() {
  const [timeframe, setTimeframe] = useState<"round1" | "all">("round1");

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm">
            Enterprise Telemetry
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Recruitment &amp; Allocation Analytics
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Track funnel conversion, AI affinity distributions, and seat fill
            velocity across your engineering cohorts.
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-surface-container rounded-xl self-start">
          <button
            type="button"
            onClick={() => setTimeframe("round1")}
            className={`px-3.5 py-1.5 rounded-lg font-label-sm transition-all ${
              timeframe === "round1"
                ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                : "text-on-surface-variant"
            }`}
          >
            Round 1 (Current)
          </button>
          <button
            type="button"
            onClick={() => setTimeframe("all")}
            className={`px-3.5 py-1.5 rounded-lg font-label-sm transition-all ${
              timeframe === "all"
                ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                : "text-on-surface-variant"
            }`}
          >
            Full Cycle 2026
          </button>
        </div>
      </div>

      {/* 4 Properly Styled KPI Cards with Material Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
              Active Internships
            </span>
            <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">
                work
              </span>
            </div>
          </div>
          <div className="mt-4">
            <div className="font-headline-lg text-3xl font-bold text-on-surface">
              6
            </div>
            <div className="font-label-sm text-secondary mt-1">
              24 Total Approved Seats
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
              Total Applications
            </span>
            <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">
                description
              </span>
            </div>
          </div>
          <div className="mt-4">
            <div className="font-headline-lg text-3xl font-bold text-on-surface">
              {timeframe === "round1" ? "142" : "318"}
            </div>
            <div className="font-label-sm text-primary mt-1">
              +24% vs previous cohort
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
              AI Shortlisted
            </span>
            <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">
                auto_awesome
              </span>
            </div>
          </div>
          <div className="mt-4">
            <div className="font-headline-lg text-3xl font-bold text-primary">
              42
            </div>
            <div className="font-label-sm text-on-surface-variant mt-1">
              &gt;85% Affinity Threshold
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
              Allocated &amp; Joined
            </span>
            <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">
                verified
              </span>
            </div>
          </div>
          <div className="mt-4">
            <div className="font-headline-lg text-3xl font-bold text-secondary">
              18 / 24
            </div>
            <div className="font-label-sm text-secondary mt-1">
              75% Seat Fill Rate
            </div>
          </div>
        </div>
      </div>

      {/* Role-by-Role Funnel & Affinity Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-on-surface">
              Applications &amp; Allocation Funnel per Role
            </h2>
            <span className="font-label-sm text-on-surface-variant">
              Live Telemetry
            </span>
          </div>

          <div className="space-y-6">
            {ROLE_METRICS.map((item) => (
              <div key={item.role} className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-label-lg text-on-surface">
                    {item.role}
                  </span>
                  <div className="flex items-center gap-3 font-label-sm">
                    <span className="text-on-surface-variant">
                      {item.applications} Applied
                    </span>
                    <span className="text-primary font-semibold">
                      {item.shortlisted} Shortlisted
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-bold">
                      {item.allocated}/{item.capacity} Allocated
                    </span>
                  </div>
                </div>
                <div className="w-full h-3 rounded-full bg-surface-container overflow-hidden flex">
                  <div
                    className="bg-primary h-full"
                    style={{ width: `${(item.shortlisted / item.applications) * 100}%` }}
                    title="Shortlisted"
                  />
                  <div
                    className="bg-secondary h-full"
                    style={{ width: `${(item.allocated / item.applications) * 100}%` }}
                    title="Allocated"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Conversion Ring Card */}
        <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="font-headline-sm text-on-surface">
              Offer Acceptance Rate
            </h2>
            <p className="font-body-sm text-on-surface-variant mt-1">
              Percentage of Round 1 AI-allocated candidates who accepted their
              offer.
            </p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  className="text-surface-container"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                />
                <path
                  className="text-primary"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="94, 100"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                />
              </svg>
              <div className="absolute text-center">
                <div className="font-headline-lg text-2xl font-extrabold text-primary">
                  94.4%
                </div>
                <div className="font-label-sm text-[10px] uppercase text-on-surface-variant">
                  Acceptance
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-outline-variant/20 flex justify-between font-label-sm">
            <span className="text-on-surface-variant">Avg Time to Fill</span>
            <span className="text-secondary font-bold">2.4 Days (AI Fast-Track)</span>
          </div>
        </div>
      </div>
    </div>
  );
}