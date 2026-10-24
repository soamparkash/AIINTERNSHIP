// app/(company)/company/evaluations/page.tsx
"use client";

import React, { useState } from "react";

const INTERNS = [
  {
    id: "i1",
    name: "Aarav Sharma",
    role: "Cloud & AI Platform Engineering Intern",
    week: "Week 6 Check-In",
    codeQuality: 9.2,
    delivery: 9.5,
    ppoStatus: "Recommended",
  },
  {
    id: "i2",
    name: "Diya Nair",
    role: "Autonomous Agent Evaluator",
    week: "Week 6 Check-In",
    codeQuality: 9.0,
    delivery: 9.1,
    ppoStatus: "Pending Evaluation",
  },
];

export default function CompanyEvaluationsPage() {
  const [interns, setInterns] = useState(INTERNS);

  const issuePPO = (id: string) => {
    setInterns((prev) =>
      prev.map((i) => (i.id === id ? { ...i, ppoStatus: "PPO Issued ✓" } : i))
    );
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">
          Intern Evaluations &amp; PPO Conversion
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Review weekly mentor telemetry and issue Pre-Placement Offers (PPO) to
          top-performing interns.
        </p>
      </div>

      <div className="space-y-4">
        {interns.map((intern) => (
          <div
            key={intern.id}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <h3 className="font-headline-sm text-on-surface">
                  {intern.name}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm">
                  {intern.ppoStatus}
                </span>
              </div>
              <p className="font-body-sm text-on-surface-variant">
                {intern.role} • {intern.week}
              </p>
              <div className="flex gap-4 pt-2 font-label-md">
                <span>
                  Code Quality:{" "}
                  <strong className="text-primary">
                    {intern.codeQuality}/10
                  </strong>
                </span>
                <span>
                  Sprint Delivery:{" "}
                  <strong className="text-primary">{intern.delivery}/10</strong>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => issuePPO(intern.id)}
              className="px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md transition-all"
            >
              {intern.ppoStatus === "PPO Issued ✓"
                ? "PPO Offer Sent ✓"
                : "Approve & Issue PPO"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}