// app/(admin)/admin/reallocation/page.tsx
"use client";

import React, { useState } from "react";

const SWAPS = [
  {
    id: "SWAP-104",
    student: "Sneha Reddy",
    fromRole: "Infosys Pune (On-site)",
    toRole: "Capgemini Bengaluru (Hybrid)",
    affinityDelta: "+2.4% Affinity",
    status: "Pending Admin Approval",
  },
];

export default function AdminReallocationPage() {
  const [swaps, setSwaps] = useState(SWAPS);

  return (
    <div className="py-8 space-y-6">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">
          Waitlist Reallocation &amp; Mutual Swaps
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Approve Pareto-improving role swaps and automated waitlist
          promotions.
        </p>
      </div>

      <div className="space-y-4">
        {swaps.map((s) => (
          <div
            key={s.id}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-label-md text-primary font-bold">
                  {s.id}
                </span>
                <h3 className="font-headline-sm text-on-surface">
                  {s.student}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm">
                  {s.affinityDelta}
                </span>
              </div>
              <p className="font-body-sm text-on-surface-variant mt-1">
                From: {s.fromRole} → To: <strong>{s.toRole}</strong>
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setSwaps((prev) =>
                  prev.map((item) =>
                    item.id === s.id
                      ? { ...item, status: "Approved & Reallocated ✓" }
                      : item
                  )
                )
              }
              className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-md"
            >
              {s.status === "Approved & Reallocated ✓"
                ? s.status
                : "Approve Reallocation"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}