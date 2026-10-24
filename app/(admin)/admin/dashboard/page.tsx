// app/(admin)/admin/dashboard/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const RECENT_BATCH_ALLOCATIONS = [
  {
    id: "ALLOC-8841",
    student: "Aarav Sharma",
    company: "Capgemini India",
    role: "Cloud & AI Platform Engineering Intern",
    affinity: "94.2%",
    quota: "Merit Tier-1",
    status: "Locked & Verified",
  },
  {
    id: "ALLOC-8842",
    student: "Diya Nair",
    company: "Tata Consultancy Services",
    role: "Autonomous Agent Evaluator",
    affinity: "91.8%",
    quota: "Female STEM Priority",
    status: "Locked & Verified",
  },
  {
    id: "ALLOC-8843",
    student: "Rohan Verma",
    company: "ISRO ISTRAC",
    role: "Orbital Telemetry Analytics",
    affinity: "89.5%",
    quota: "Regional Tier-2 Quota",
    status: "Pending Confirmation",
  },
];

export default function AdminDashboardPage() {
  const [engineRunning, setEngineRunning] = useState(false);
  const [matchCount, setMatchCount] = useState(1420);

  const triggerQuickRebalance = () => {
    setEngineRunning(true);
    setTimeout(() => {
      setEngineRunning(false);
      setMatchCount((prev) => prev + 18);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full space-y-8">
      {/* 1. Top Engine Telemetry Banner */}
      <section>
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[26px]">
                memory
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="font-headline-sm text-on-surface">
                  Deterministic AI Allocation Engine v2.4 • Round 1 Active
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm">
                  Zero-Bias Verified
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                All multi-criteria constraints, skill verification proofs, and
                affirmative capacity quotas are balanced across 512 partner
                enterprises.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
            <button
              type="button"
              onClick={triggerQuickRebalance}
              className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-on-surface transition-colors whitespace-nowrap"
            >
              {engineRunning ? "Rebalancing..." : "Rebalance Waitlist"}
            </button>
            <Link
              href="/admin/ai-matching/run"
              className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg flex items-center gap-2 shadow-sm hover:bg-primary-container transition-all whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">
                play_arrow
              </span>
              <span>Run Allocation Engine</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Hero Section + 4 KPI Cards */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-label-sm text-on-surface-variant font-semibold">
                  Central Allocation Governance &amp; Fairness Telemetry
                </span>
              </div>
              <h1 className="font-headline-xl text-4xl sm:text-headline-xl text-on-surface tracking-tight">
                Allocation <span className="text-primary">Command Center</span>
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-xl">
                Execute deterministic matching batches, audit fairness quotas,
                and oversee live student-to-enterprise internship allocations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/admin/ai-matching/run"
                className="px-5 py-3 rounded-xl bg-primary text-on-primary font-label-lg flex items-center gap-2 shadow-sm hover:bg-primary-container transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  bolt
                </span>
                Execute Round 1 Batch
              </Link>
              <Link
                href="/admin/fairness"
                className="px-4 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg flex items-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">
                  balance
                </span>
                Inspect Fairness Metrics
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase">
                    Candidates
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      school
                    </span>
                  </div>
                </div>
                <div className="mt-2 font-headline-sm text-[20px] font-bold text-on-surface">
                  4,820
                </div>
                <div className="text-secondary font-label-sm text-[11px] mt-0.5">
                  94% Verified
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase">
                    Enterprises
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      domain
                    </span>
                  </div>
                </div>
                <div className="mt-2 font-headline-sm text-[20px] font-bold text-on-surface">
                  512
                </div>
                <div className="text-on-surface-variant font-label-sm text-[11px] mt-0.5">
                  1,840 Open Roles
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase">
                    Allocated
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      task_alt
                    </span>
                  </div>
                </div>
                <div className="mt-2 font-headline-sm text-[20px] font-bold text-primary">
                  {matchCount.toLocaleString()}
                </div>
                <div className="text-primary font-label-sm text-[11px] font-semibold mt-0.5">
                  91.2% Avg Affinity
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase">
                    Fairness Index
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      verified_user
                    </span>
                  </div>
                </div>
                <div className="mt-2 font-headline-sm text-[20px] font-bold text-secondary">
                  99.6%
                </div>
                <div className="text-secondary font-label-sm text-[11px] font-semibold mt-0.5">
                  Zero Disparity
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-2xl transform rotate-2 pointer-events-none"></div>
              <div className="relative bg-surface-container-lowest rounded-3xl p-3 border border-outline-variant/30 shadow-lg overflow-hidden group">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container">
                  <img
                    src="/hero-illustration.png"
                    alt="AI Smart Allocation Governance"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-label-sm text-[11px] text-on-surface font-bold">
                      Gale-Shapley + Skill Vector Solver
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 border border-outline-variant/30 shadow-lg flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold text-label-md shrink-0">
                        AI
                      </div>
                      <div>
                        <div className="font-label-md text-on-surface font-bold leading-tight">
                          National Batch #14 Verified
                        </div>
                        <div className="text-secondary font-label-sm text-[11px] font-semibold">
                          0 Quota Violations • 42ms Solver Latency
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Live Allocation Audit Feed (Zero Horizontal Scroll) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline-md text-on-surface">
              Recent Deterministic Allocations
            </h2>
            <p className="font-body-sm text-on-surface-variant">
              Real-time ledger of verified student-to-company matches produced
              by the AI solver.
            </p>
          </div>
          <Link
            href="/admin/allocations"
            className="font-label-md text-primary hover:underline flex items-center gap-1 whitespace-nowrap"
          >
            View All Allocations →
          </Link>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse table-auto">
            <thead>
              <tr className="bg-surface-container/60 border-b border-outline-variant/30 font-label-sm text-[11px] uppercase text-on-surface-variant">
                <th className="py-3.5 px-4">ID</th>
                <th className="py-3.5 px-4">Candidate</th>
                <th className="py-3.5 px-4">Enterprise &amp; Role</th>
                <th className="py-3.5 px-4">AI Affinity</th>
                <th className="py-3.5 px-4">Quota Tier</th>
                <th className="py-3.5 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 font-body-sm">
              {RECENT_BATCH_ALLOCATIONS.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-surface-container/40 transition-colors"
                >
                  <td className="py-3.5 px-4 font-label-md text-primary font-bold whitespace-nowrap">
                    {row.id}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                    {row.student}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-on-surface">
                      {row.company}
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      {row.role}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="inline-flex px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm font-bold">
                      {row.affinity}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-on-surface-variant text-xs">
                    {row.quota}
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-[11px] font-semibold ${
                        row.status === "Locked & Verified"
                          ? "bg-secondary-fixed text-on-secondary-fixed-variant"
                          : "bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          row.status === "Locked & Verified"
                            ? "bg-secondary"
                            : "bg-outline"
                        }`}
                      />
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}