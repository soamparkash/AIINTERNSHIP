// app/(company)/company/applications/page.tsx
"use client";

import React, { useState } from "react";

const INITIAL_APPLICATIONS = [
  {
    id: "app-1",
    candidate: "Aarav Sharma",
    college: "B.Tech CSE (Full Stack)",
    role: "Cloud & AI Platform Engineering Intern",
    appliedDate: "18 Oct 2026",
    affinity: 94.2,
    skills: ["PyTorch", "FastAPI", "Docker"],
    status: "Shortlisted",
  },
  {
    id: "app-2",
    candidate: "Diya Nair",
    college: "B.Tech AI & Data Science",
    role: "Autonomous Agent Evaluator",
    appliedDate: "19 Oct 2026",
    affinity: 91.8,
    skills: ["Python", "LangChain", "HuggingFace"],
    status: "Under Review",
  },
  {
    id: "app-3",
    candidate: "Rohan Verma",
    college: "B.Tech CSE (Cloud)",
    role: "Cloud & AI Platform Engineering Intern",
    appliedDate: "20 Oct 2026",
    affinity: 89.5,
    skills: ["Kubernetes", "AWS", "Terraform"],
    status: "Under Review",
  },
];

export default function CompanyApplicationsPage() {
  const [apps, setApps] = useState(INITIAL_APPLICATIONS);
  const [statusFilter, setStatusFilter] = useState("All");

  const updateStatus = (id: string, status: string) => {
    setApps((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const filtered = apps.filter(
    (a) => statusFilter === "All" || a.status === statusFilter
  );

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            Applicant Pipeline
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Review incoming applications ranked automatically by AI skill
            affinity.
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-surface-container rounded-xl self-start">
          {["All", "Under Review", "Shortlisted", "Allocated"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setStatusFilter(tab)}
              className={`px-3 py-1.5 rounded-lg font-label-sm transition-all ${
                statusFilter === tab
                  ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                  : "text-on-surface-variant"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((app) => (
          <div
            key={app.id}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="font-headline-sm text-on-surface">
                  {app.candidate}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm font-bold">
                  {app.affinity}% Match
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm">
                  {app.status}
                </span>
              </div>
              <p className="font-body-sm text-on-surface-variant">
                {app.college} • Applied for{" "}
                <strong className="text-on-surface">{app.role}</strong> on{" "}
                {app.appliedDate}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {app.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => updateStatus(app.id, "Shortlisted")}
                className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-on-surface"
              >
                Shortlist
              </button>
              <button
                type="button"
                onClick={() => updateStatus(app.id, "Allocated")}
                className="px-5 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md"
              >
                {app.status === "Allocated" ? "Allocated ✓" : "Allocate Role"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}