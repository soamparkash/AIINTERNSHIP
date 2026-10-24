// app/(admin)/admin/ai-matching/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const BATCH_HISTORY = [
  {
    batchId: "BATCH-2026-R1",
    timestamp: "21 Oct 2026, 14:30 IST",
    candidatesProcessed: 4820,
    rolesMatched: 1438,
    avgAffinity: "92.4%",
    latency: "42ms",
    status: "Active Production",
  },
  {
    batchId: "BATCH-2026-SIM-04",
    timestamp: "19 Oct 2026, 18:15 IST",
    candidatesProcessed: 4790,
    rolesMatched: 1412,
    avgAffinity: "91.1%",
    latency: "39ms",
    status: "Archived Simulation",
  },
  {
    batchId: "BATCH-2026-SIM-03",
    timestamp: "15 Oct 2026, 11:00 IST",
    candidatesProcessed: 4610,
    rolesMatched: 1380,
    avgAffinity: "89.8%",
    latency: "44ms",
    status: "Archived Simulation",
  },
];

export default function AdminAIMatchingPage() {
  const [solverMode, setSolverMode] = useState<"deterministic" | "hybrid">(
    "deterministic"
  );

  return (
    <div className="py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm">
            Multi-Criteria Allocation Solver
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            AI Matching Engine Hub
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Inspect vector embedding pipelines, Gale-Shapley stability metrics,
            and historical matching runs.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start">
          <Link
            href="/admin/rules"
            className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-on-surface transition-colors"
          >
            Configure Rules
          </Link>
          <Link
            href="/admin/ai-matching/run"
            className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg flex items-center gap-2 shadow-sm hover:bg-primary-container transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            <span>Launch New Solver Run</span>
          </Link>
        </div>
      </div>

      {/* Solver Telemetry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-on-surface-variant uppercase">
              Embedding Model
            </span>
            <span className="material-symbols-outlined text-primary">hub</span>
          </div>
          <div className="font-headline-md text-xl font-bold text-on-surface mt-3">
            SkillVec-768d
          </div>
          <div className="font-label-sm text-secondary mt-1">
            Cosine + Assessment Weighted
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-on-surface-variant uppercase">
              Pareto Optimality
            </span>
            <span className="material-symbols-outlined text-secondary">
              verified
            </span>
          </div>
          <div className="font-headline-md text-xl font-bold text-on-surface mt-3">
            99.8% Stable
          </div>
          <div className="font-label-sm text-on-surface-variant mt-1">
            0 Blocking Pairs Detected
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-on-surface-variant uppercase">
              Avg Solver Latency
            </span>
            <span className="material-symbols-outlined text-tertiary">
              speed
            </span>
          </div>
          <div className="font-headline-md text-xl font-bold text-primary mt-3">
            42 ms
          </div>
          <div className="font-label-sm text-on-surface-variant mt-1">
            For 4,820 × 1,840 Matrix
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-on-surface-variant uppercase">
              Solver Mode
            </span>
            <span className="material-symbols-outlined text-primary">tune</span>
          </div>
          <div className="mt-2 flex gap-1.5">
            <button
              type="button"
              onClick={() => setSolverMode("deterministic")}
              className={`px-2.5 py-1 rounded-lg font-label-sm text-xs ${
                solverMode === "deterministic"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface-variant"
              }`}
            >
              Deterministic
            </button>
            <button
              type="button"
              onClick={() => setSolverMode("hybrid")}
              className={`px-2.5 py-1 rounded-lg font-label-sm text-xs ${
                solverMode === "hybrid"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface-variant"
              }`}
            >
              Hybrid ML
            </button>
          </div>
        </div>
      </div>

      {/* Batch Execution History Table */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between">
          <div>
            <h2 className="font-headline-sm text-on-surface">
              Solver Batch Execution History
            </h2>
            <p className="font-body-sm text-on-surface-variant">
              Cryptographically signed allocation runs and simulation snapshots.
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container/60 border-b border-outline-variant/30 font-label-sm text-[11px] uppercase text-on-surface-variant">
                <th className="py-3.5 px-5">Batch ID</th>
                <th className="py-3.5 px-5">Timestamp</th>
                <th className="py-3.5 px-5">Candidates</th>
                <th className="py-3.5 px-5">Roles Allocated</th>
                <th className="py-3.5 px-5">Avg Affinity</th>
                <th className="py-3.5 px-5">Latency</th>
                <th className="py-3.5 px-5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 font-body-sm">
              {BATCH_HISTORY.map((b) => (
                <tr
                  key={b.batchId}
                  className="hover:bg-surface-container/40 transition-colors"
                >
                  <td className="py-4 px-5 font-label-md text-primary font-bold">
                    {b.batchId}
                  </td>
                  <td className="py-4 px-5 text-on-surface-variant">
                    {b.timestamp}
                  </td>
                  <td className="py-4 px-5 font-semibold text-on-surface">
                    {b.candidatesProcessed.toLocaleString()}
                  </td>
                  <td className="py-4 px-5 font-semibold text-on-surface">
                    {b.rolesMatched.toLocaleString()}
                  </td>
                  <td className="py-4 px-5">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm font-bold">
                      {b.avgAffinity}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-on-surface-variant">
                    {b.latency}
                  </td>
                  <td className="py-4 px-5 text-right">
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-label-sm font-semibold ${
                        b.status === "Active Production"
                          ? "bg-secondary-fixed text-on-secondary-fixed-variant"
                          : "bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}