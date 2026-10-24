// app/(admin)/admin/rules/page.tsx
"use client";

import React, { useState } from "react";

const INITIAL_RULES = [
  {
    id: "RULE-01",
    title: "Strict Proctored Assessment Verification",
    desc: "Require candidates to complete at least 1 proctored domain assessment before Round 1 matching.",
    enabled: true,
  },
  {
    id: "RULE-02",
    title: "Single Primary Offer Lock",
    desc: "Prevent a single candidate from holding multiple concurrent primary internship offers.",
    enabled: true,
  },
  {
    id: "RULE-03",
    title: "Automated 48-Hour Waitlist Promotion",
    desc: "Automatically promote the next highest-affinity waitlisted candidate if an offer expires.",
    enabled: true,
  },
];

export default function AdminRulesPage() {
  const [rules, setRules] = useState(INITIAL_RULES);

  const toggleRule = (id: string) => {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r))
    );
  };

  return (
    <div className="py-8 space-y-6">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">
          Deterministic Engine Rules
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Enable or disable hard allocation constraints enforced during AI
          matching runs.
        </p>
      </div>

      <div className="space-y-4">
        {rules.map((r) => (
          <div
            key={r.id}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex items-center justify-between gap-6"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-primary font-bold">
                  {r.id}
                </span>
                <h3 className="font-headline-sm text-on-surface">{r.title}</h3>
              </div>
              <p className="font-body-sm text-on-surface-variant">{r.desc}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleRule(r.id)}
              className={`px-4 py-2 rounded-xl font-label-md transition-colors ${
                r.enabled
                  ? "bg-secondary-fixed text-on-secondary-fixed-variant font-bold"
                  : "bg-surface-container text-on-surface-variant"
              }`}
            >
              {r.enabled ? "Enabled ✓" : "Disabled"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}