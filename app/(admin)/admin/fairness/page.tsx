// app/(admin)/admin/fairness/page.tsx
"use client";

import React, { useState } from "react";

const QUOTA_DIMENSIONS = [
  {
    name: "Female STEM Representation",
    target: 35,
    achieved: 38.4,
    allocatedCount: 552,
    status: "Exceeds Target",
  },
  {
    name: "Tier-2 & Tier-3 Regional Engineering Colleges",
    target: 40,
    achieved: 41.2,
    allocatedCount: 592,
    status: "Compliant",
  },
  {
    name: "First-Generation / Affirmative Quota",
    target: 25,
    achieved: 26.8,
    allocatedCount: 385,
    status: "Compliant",
  },
];

export default function AdminFairnessPage() {
  const [minRegionalQuota, setMinRegionalQuota] = useState(40);
  const [minFemaleQuota, setMinFemaleQuota] = useState(35);
  const [savedNotice, setSavedNotice] = useState(false);

  return (
    <div className="py-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm">
            Algorithmic Fairness &amp; Parity Audit
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Quota &amp; Inclusion Telemetry
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Verify zero-bias meritocracy and affirmative representation across
            all allocated cohorts.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setSavedNotice(true);
            setTimeout(() => setSavedNotice(false), 2000);
          }}
          className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg self-start"
        >
          {savedNotice ? "Thresholds Saved ✓" : "Save Quota Policy"}
        </button>
      </div>

      {/* Parity Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {QUOTA_DIMENSIONS.map((q) => (
          <div
            key={q.name}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-semibold">
                {q.status}
              </span>
              <span className="font-label-sm text-on-surface-variant">
                Target: {q.target}%
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-on-surface">{q.name}</h3>
              <div className="font-headline-lg text-3xl font-bold text-primary mt-2">
                {q.achieved}%
              </div>
              <p className="font-body-sm text-on-surface-variant mt-0.5">
                {q.allocatedCount} candidates allocated in Round 1
              </p>
            </div>
            <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-secondary h-full rounded-full"
                style={{ width: `${Math.min(100, q.achieved * 1.8)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Policy Sliders */}
      <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-6">
        <h2 className="font-headline-sm text-on-surface">
          Calibrate Minimum Representation Constraints
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between font-label-md">
              <span>Minimum Regional / Tier-2 &amp; Tier-3 College Floor</span>
              <span className="text-primary font-bold">
                {minRegionalQuota}%
              </span>
            </div>
            <input
              type="range"
              min={20}
              max={60}
              value={minRegionalQuota}
              onChange={(e) => setMinRegionalQuota(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between font-label-md">
              <span>Minimum Female STEM Candidate Floor</span>
              <span className="text-primary font-bold">{minFemaleQuota}%</span>
            </div>
            <input
              type="range"
              min={20}
              max={50}
              value={minFemaleQuota}
              onChange={(e) => setMinFemaleQuota(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}