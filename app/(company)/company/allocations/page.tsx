// app/(company)/company/allocations/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

interface AllocatedIntern {
  id: string;
  name: string;
  college: string;
  role: string;
  location: string;
  duration: string;
  stipend: string;
  affinity: number;
  skills: string[];
  status: "Approved & Onboarded" | "Approved" | "Recommended" | "Waitlist Replaced";
  passCode: string;
}

const INITIAL_ALLOCATIONS: AllocatedIntern[] = [
  {
    id: "alloc-1",
    name: "Aarav Sharma",
    college: "B.Tech CSE • Full Stack Specialization",
    role: "Cloud & AI Platform Engineering Intern",
    location: "Bengaluru, Karnataka • Hybrid",
    duration: "01 Jul 2026 – 30 Sep 2026",
    stipend: "₹25,000/mo",
    affinity: 94.2,
    skills: ["PyTorch 100%", "FastAPI 100%", "Docker 95%"],
    status: "Approved & Onboarded",
    passCode: "PASS-CG-8841",
  },
  {
    id: "alloc-2",
    name: "Divya Nair",
    college: "B.Tech AI & Data Science",
    role: "Autonomous Agent Evaluator",
    location: "Hyderabad • Hybrid",
    duration: "15 Jul 2026 – 15 Oct 2026",
    stipend: "₹30,000/mo",
    affinity: 91.8,
    skills: ["Python 98%", "LangChain 94%", "RAG 91%"],
    status: "Approved",
    passCode: "PASS-CG-8842",
  },
  {
    id: "alloc-3",
    name: "Sneha Reddy",
    college: "B.Tech CSE • Cloud Computing",
    role: "Fullstack FinTech Microservices Intern",
    location: "Bengaluru, Karnataka • Hybrid",
    duration: "01 Jul 2026 – 30 Sep 2026",
    stipend: "₹25,000/mo",
    affinity: 86.5,
    skills: ["Next.js 94%", "Node.js 90%", "Kafka 85%"],
    status: "Recommended",
    passCode: "PASS-CG-8843",
  },
];

export default function CompanyAllocationsPage() {
  const [allocations, setAllocations] = useState<AllocatedIntern[]>(INITIAL_ALLOCATIONS);
  const [filter, setFilter] = useState<"all" | "approved" | "recommended">("all");
  const [selectedPass, setSelectedPass] = useState<AllocatedIntern | null>(null);

  const approveAllocation = (id: string) => {
    setAllocations((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status: "Approved & Onboarded" } : a
      )
    );
  };

  const triggerWaitlistSwap = (id: string) => {
    setAllocations((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              name: "Rohan Verma (Waitlist #1)",
              affinity: 89.5,
              status: "Approved",
            }
          : a
      )
    );
  };

  const filtered = allocations.filter((a) => {
    if (filter === "approved") return a.status.startsWith("Approved");
    if (filter === "recommended") return a.status === "Recommended";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm mb-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Round 1 AI Allocation Roster
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            Allocated Interns &amp; Onboarding
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Verify digital onboarding passes, confirm candidate check-ins, or
            trigger automated waitlist reallocations.
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-surface-container rounded-xl self-start">
          {(["all", "approved", "recommended"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`px-3.5 py-1.5 rounded-lg font-label-sm capitalize transition-all ${
                filter === tab
                  ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Summary KPI Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm flex items-center justify-between">
          <div>
            <div className="font-label-sm text-on-surface-variant uppercase">
              Total Allocated
            </div>
            <div className="font-headline-md text-2xl font-bold text-on-surface mt-1">
              {allocations.length} Candidates
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
            <span className="material-symbols-outlined">how_to_reg</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm flex items-center justify-between">
          <div>
            <div className="font-label-sm text-on-surface-variant uppercase">
              Avg Cohort Affinity
            </div>
            <div className="font-headline-md text-2xl font-bold text-primary mt-1">
              90.8% Match
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
            <span className="material-symbols-outlined">psychology</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm flex items-center justify-between">
          <div>
            <div className="font-label-sm text-on-surface-variant uppercase">
              Onboarding Verified
            </div>
            <div className="font-headline-md text-2xl font-bold text-secondary mt-1">
              {allocations.filter((a) => a.status.startsWith("Approved")).length}{" "}
              / {allocations.length} Passes Active
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined">qr_code_scanner</span>
          </div>
        </div>
      </div>

      {/* Allocation Cards */}
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:shadow-md transition-shadow"
          >
            <div className="space-y-2.5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {item.name}
                </h3>
                <span
                  className={`px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${
                    item.status.startsWith("Approved")
                      ? "bg-secondary-fixed text-on-secondary-fixed-variant"
                      : "bg-primary-fixed text-on-primary-fixed-variant"
                  }`}
                >
                  {item.status}
                </span>
                <span className="font-label-sm text-on-surface-variant">
                  Pass ID: {item.passCode}
                </span>
              </div>

              <div className="font-body-sm text-on-surface-variant">
                <strong className="text-on-surface">{item.role}</strong> •{" "}
                {item.location}
              </div>
              <div className="font-body-sm text-on-surface-variant">
                {item.duration} •{" "}
                <span className="text-primary font-semibold">
                  {item.stipend}
                </span>{" "}
                • {item.college}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-0.5 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[14px] text-secondary">
                      check
                    </span>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Ring + Actions */}
            <div className="flex flex-wrap items-center gap-4 shrink-0 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-outline-variant/20">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 flex items-center justify-center">
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
                      className="text-secondary"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray={`${item.affinity}, 100`}
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    />
                  </svg>
                  <span className="absolute font-label-md font-bold text-on-surface">
                    {Math.round(item.affinity)}%
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedPass(item)}
                  className="px-3.5 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-on-surface flex items-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[17px]">
                    qr_code_2
                  </span>
                  Verify Pass
                </button>

                {item.status === "Recommended" && (
                  <>
                    <button
                      type="button"
                      onClick={() => triggerWaitlistSwap(item.id)}
                      className="px-3.5 py-2 rounded-xl border border-outline-variant/50 hover:bg-surface-container font-label-md text-on-surface-variant"
                    >
                      Swap Waitlist
                    </button>
                    <button
                      type="button"
                      onClick={() => approveAllocation(item.id)}
                      className="px-4 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md shadow-xs transition-all"
                    >
                      Approve &amp; Issue Pass
                    </button>
                  </>
                )}

                {item.status !== "Recommended" && (
                  <Link
                    href="/company/evaluations"
                    className="px-4 py-2 rounded-xl bg-inverse-surface text-inverse-on-surface hover:bg-on-surface font-label-md transition-colors"
                  >
                    Open Evaluation →
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Onboarding Pass Modal */}
      {selectedPass && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 border border-outline-variant/30 shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-semibold">
                Digital Onboarding Pass • {selectedPass.passCode}
              </span>
              <button
                type="button"
                onClick={() => setSelectedPass(null)}
                className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface">
                {selectedPass.name}
              </h3>
              <p className="font-body-sm text-on-surface-variant">
                {selectedPass.role}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container flex items-center justify-between">
              <div className="space-y-1 text-body-sm">
                <div>
                  <span className="text-on-surface-variant">Duration: </span>
                  <strong className="text-on-surface">
                    {selectedPass.duration}
                  </strong>
                </div>
                <div>
                  <span className="text-on-surface-variant">Stipend: </span>
                  <strong className="text-primary">
                    {selectedPass.stipend}
                  </strong>
                </div>
                <div>
                  <span className="text-on-surface-variant">AI Affinity: </span>
                  <strong className="text-secondary">
                    {selectedPass.affinity}% Verified
                  </strong>
                </div>
              </div>
              <div className="w-16 h-16 rounded-xl bg-surface-container-lowest flex items-center justify-center border border-outline-variant/30">
                <span className="material-symbols-outlined text-[42px] text-on-surface">
                  qr_code_2
                </span>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedPass(null)}
                className="px-4 py-2 rounded-xl bg-surface-container font-label-md"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  approveAllocation(selectedPass.id);
                  setSelectedPass(null);
                }}
                className="px-5 py-2 rounded-xl bg-primary text-on-primary font-label-md"
              >
                Confirm Check-In ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}