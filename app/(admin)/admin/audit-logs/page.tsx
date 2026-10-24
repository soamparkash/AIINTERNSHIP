// app/(admin)/admin/audit-logs/page.tsx
"use client";

import React, { useState } from "react";

const AUDIT_LOGS = [
  {
    id: "LOG-9921",
    time: "22 Oct 2026, 14:30:12 IST",
    actor: "AI Solver Engine v2.4",
    category: "Solver Batch",
    event:
      "Executed Round 1 Gale-Shapley Allocation Batch (1,438 optimal matches)",
    hash: "0x9f8c7b6a5d4e3f2a1b",
    payload:
      '{ "batch": "R1-2026", "candidates": 4820, "matched": 1438, "blockingPairs": 0, "status": "VERIFIED" }',
  },
  {
    id: "LOG-9920",
    time: "22 Oct 2026, 13:15:04 IST",
    actor: "Capgemini India (HR)",
    category: "Onboarding Pass",
    event: "Verified & Locked Onboarding Pass PASS-CG-8841 for Aarav Sharma",
    hash: "0x4d2e1a9b8c7d6e5f4a",
    payload:
      '{ "passId": "PASS-CG-8841", "studentId": "STU-01", "affinity": 94.2, "signature": "VALID" }',
  },
  {
    id: "LOG-9919",
    time: "22 Oct 2026, 11:02:49 IST",
    actor: "System Admin",
    category: "Quota Policy",
    event: "Updated Regional Tier-2/3 Inclusion Floor constraint to 40%",
    hash: "0x7b1a9e8d7c6b5a4f3e",
    payload:
      '{ "rule": "REGIONAL_FLOOR", "previous": "35%", "updated": "40%", "enforced": true }',
  },
  {
    id: "LOG-9918",
    time: "21 Oct 2026, 19:45:30 IST",
    actor: "Proctoring Verifier",
    category: "Assessment",
    event:
      "Validated 96th Percentile Cloud & PyTorch Assessment for Aarav Sharma",
    hash: "0x3c5d7e9f1a2b3c4d5e",
    payload:
      '{ "assessmentId": "ASSESS-CLOUD-09", "integrityScore": "100%", "proctored": true }',
  },
];

export default function AdminAuditLogsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>("LOG-9921");
  const [verifying, setVerifying] = useState(false);
  const [verifiedToast, setVerifiedToast] = useState(false);

  const handleVerifyChain = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setVerifiedToast(true);
      setTimeout(() => setVerifiedToast(false), 3000);
    }, 600);
  };

  const filtered = AUDIT_LOGS.filter((log) => {
    const matchText =
      log.event.toLowerCase().includes(search.toLowerCase()) ||
      log.actor.toLowerCase().includes(search.toLowerCase()) ||
      log.id.toLowerCase().includes(search.toLowerCase());
    const matchCat =
      selectedCategory === "All" || log.category === selectedCategory;
    return matchText && matchCat;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm">
            <span className="material-symbols-outlined text-[14px]">
              verified_user
            </span>
            Tamper-Evident Ledger
          </span>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface mt-2">
            System Audit Logs
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Immutable cryptographic log of every solver execution, quota update,
            and allocation decision.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 self-start md:self-center">
          <button
            type="button"
            onClick={handleVerifyChain}
            className={`px-4 py-2.5 rounded-xl font-label-md flex items-center gap-2 transition-all whitespace-nowrap ${
              verifiedToast
                ? "bg-secondary text-on-secondary"
                : "bg-primary text-on-primary hover:bg-primary-container shadow-xs"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {verifiedToast ? "check_circle" : "fact_check"}
            </span>
            <span>
              {verifying
                ? "Verifying SHA-256 Chain..."
                : verifiedToast
                ? "All 12,490 Hashes Verified ✓"
                : "Verify Hash Chain"}
            </span>
          </button>
        </div>
      </div>

      {/* 3 KPI Summary Cards (Never Clipped) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm flex items-center justify-between">
          <div>
            <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">
              Total Signed Events
            </div>
            <div className="font-headline-md text-2xl font-bold text-on-surface mt-1.5">
              12,490 Logs
            </div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined">receipt_long</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm flex items-center justify-between">
          <div>
            <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">
              Hash Chain Integrity
            </div>
            <div className="font-headline-md text-2xl font-bold text-secondary mt-1.5">
              100% Verified
            </div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined">verified_user</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm flex items-center justify-between">
          <div>
            <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">
              Manual Overrides
            </div>
            <div className="font-headline-md text-2xl font-bold text-primary mt-1.5">
              0 Detected
            </div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined">gpp_good</span>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex-1 flex items-center gap-3 bg-surface-container-lowest px-4 py-2.5 rounded-2xl border border-outline-variant/30 shadow-xs">
          <span className="material-symbols-outlined text-outline">search</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter audit trail by Log ID, Actor, or Event..."
            className="w-full bg-transparent outline-none font-body-md text-on-surface"
          />
        </div>

        <div className="flex items-center gap-1 p-1 bg-surface-container rounded-xl self-start sm:self-center">
          {["All", "Solver Batch", "Onboarding Pass", "Quota Policy"].map(
            (cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-label-sm whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>
      </div>

      {/* Audit Log Entries */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm divide-y divide-outline-variant/20">
        {filtered.map((log) => {
          const isExpanded = expandedId === log.id;
          return (
            <div key={log.id} className="p-5 space-y-3">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-label-md text-primary font-bold">
                      {log.id}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-on-surface">
                      {log.category}
                    </span>
                    <span className="font-label-md text-on-surface font-semibold">
                      {log.actor}
                    </span>
                    <span className="font-label-sm text-on-surface-variant">
                      {log.time}
                    </span>
                  </div>
                  <p className="font-body-sm text-on-surface-variant">
                    {log.event}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <code className="px-3 py-1.5 rounded-lg bg-surface-container font-label-sm text-on-surface-variant whitespace-nowrap">
                    SHA256: {log.hash.slice(0, 10)}...
                  </code>
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : log.id)}
                    className="px-3.5 py-1.5 rounded-lg bg-primary-fixed/60 hover:bg-primary-fixed text-primary font-label-sm font-semibold whitespace-nowrap transition-colors"
                  >
                    {isExpanded ? "Hide Proof" : "Inspect Proof"}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <pre className="p-3.5 rounded-xl bg-inverse-surface text-inverse-on-surface font-mono text-xs overflow-x-auto">
                  {log.payload}
                </pre>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}