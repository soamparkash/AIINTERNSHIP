// app/(admin)/admin/settings/page.tsx
"use client";

import React, { useState } from "react";

type SettingsTab = "general" | "solver" | "notifications" | "security";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("general");
  const [savedToast, setSavedToast] = useState(false);

  const [platformName, setPlatformName] = useState("SmartAlloc AI");
  const [engineVersion, setEngineVersion] = useState("v2.4-Production");
  const [orgDomain, setOrgDomain] = useState("smartalloc.ai");
  const [timezone, setTimezone] = useState("IST (UTC+05:30)");

  const [flags, setFlags] = useState({
    aiMatching: true,
    smartAllocation: true,
    whatIfSimulator: true,
    readinessScore: true,
    autoWaitlistSwap: true,
    strictProctoring: true,
  });

  const toggleFlag = (key: keyof typeof flags) => {
    setFlags((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  return (
    <div className="py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant/30">
        <div>
          <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm">
            Platform Configuration
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            System Settings &amp; Feature Flags
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Configure global AI allocation parameters, feature availability, and
            security policies.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className={`px-5 py-2.5 rounded-xl font-label-lg flex items-center gap-2 shadow-sm transition-all self-start whitespace-nowrap ${
            savedToast
              ? "bg-secondary text-on-secondary"
              : "bg-primary text-on-primary hover:bg-primary-container"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">
            {savedToast ? "check_circle" : "save"}
          </span>
          <span>{savedToast ? "Settings Saved ✓" : "Save All Changes"}</span>
        </button>
      </div>

      {/* Clean Horizontal Segmented Tabs (Replaces Broken Left Box) */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-surface-container rounded-2xl w-fit border border-outline-variant/30">
        {[
          { id: "general", label: "General & Branding", icon: "Language" },
          { id: "solver", label: "AI Solver & Quotas", icon: "tune" },
          { id: "notifications", label: "Notifications & SLA", icon: "notifications" },
          { id: "security", label: "Security & Audit", icon: "shield_lock" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as SettingsTab)}
            className={`px-4 py-2 rounded-xl font-label-md text-xs flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-surface-container-lowest text-primary font-bold shadow-xs"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {tab.icon}
            </span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 7 Columns: Active Tab Settings */}
        <div className="lg:col-span-7 space-y-6">
          {activeTab === "general" && (
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-5">
              <div className="flex items-center gap-2.5 pb-3 border-b border-outline-variant/20">
                <span className="material-symbols-outlined text-primary">
                  dns
                </span>
                <h2 className="font-headline-sm text-on-surface">
                  Platform Identity &amp; Environment
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label-md text-on-surface">
                    Platform Name
                  </label>
                  <input
                    type="text"
                    value={platformName}
                    onChange={(e) => setPlatformName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary font-body-md"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label-md text-on-surface">
                    Engine Release Build
                  </label>
                  <input
                    type="text"
                    value={engineVersion}
                    onChange={(e) => setEngineVersion(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary font-body-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label-md text-on-surface">
                    Primary Portal Domain
                  </label>
                  <input
                    type="text"
                    value={orgDomain}
                    onChange={(e) => setOrgDomain(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary font-body-md"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label-md text-on-surface">
                    System Timezone
                  </label>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary font-body-md"
                  >
                    <option>IST (UTC+05:30)</option>
                    <option>UTC (Coordinated Universal Time)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === "solver" && (
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-5">
              <h2 className="font-headline-sm text-on-surface">
                Default Solver Thresholds
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label-md text-on-surface">
                    Minimum Tier-1 Affinity Cutoff
                  </label>
                  <input
                    type="text"
                    defaultValue="85.0%"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label-md text-on-surface">
                    Offer Acceptance Window
                  </label>
                  <input
                    type="text"
                    defaultValue="48 Hours"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
              <h2 className="font-headline-sm text-on-surface">
                Automated Notification Triggers
              </h2>
              <p className="font-body-sm text-on-surface-variant">
                Dispatch instant email and portal alerts when Round 1
                allocations or waitlist promotions occur.
              </p>
              <div className="p-4 rounded-xl bg-surface-container flex items-center justify-between">
                <span className="font-label-md text-on-surface">
                  SMTP &amp; Webhook Dispatch Service
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm">
                  Connected ✓
                </span>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
              <h2 className="font-headline-sm text-on-surface">
                Security &amp; Cryptographic Ledger
              </h2>
              <p className="font-body-sm text-on-surface-variant">
                All allocation batches are hashed with SHA-256 and logged to the
                immutable audit trail.
              </p>
              <div className="p-4 rounded-xl bg-surface-container flex items-center justify-between">
                <span className="font-label-md text-on-surface">
                  JWT Session Expiry Window
                </span>
                <strong className="font-label-md text-primary">24 Hours</strong>
              </div>
            </div>
          )}
        </div>

        {/* Right 5 Columns: Live Feature Flags Card */}
        <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
            <div>
              <h2 className="font-headline-sm text-on-surface">
                Active Feature Flags
              </h2>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Toggle real-time modules across Student and Company portals.
              </p>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm">
              Live Sync
            </span>
          </div>

          <div className="divide-y divide-outline-variant/20">
            {[
              {
                key: "aiMatching" as const,
                title: "AI Vector Matching",
                desc: "Enable multi-criteria cosine skill matching",
              },
              {
                key: "smartAllocation" as const,
                title: "Automated Seat Allocation",
                desc: "Enable capacity-constrained Gale-Shapley solver",
              },
              {
                key: "whatIfSimulator" as const,
                title: "Student What-If Simulator",
                desc: "Allow students to simulate counterfactual skill boosts",
              },
              {
                key: "readinessScore" as const,
                title: "Placement Readiness Telemetry",
                desc: "Compute real-time readiness scores from assessments",
              },
              {
                key: "autoWaitlistSwap" as const,
                title: "Auto Waitlist Promotion",
                desc: "Promote backup candidates when offers expire",
              },
            ].map((item) => {
              const enabled = flags[item.key];
              return (
                <div
                  key={item.key}
                  className="py-3.5 flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="font-label-md text-on-surface font-semibold">
                      {item.title}
                    </div>
                    <div className="font-body-sm text-xs text-on-surface-variant">
                      {item.desc}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleFlag(item.key)}
                    className={`w-12 h-6 rounded-full p-0.5 transition-colors shrink-0 flex items-center ${
                      enabled
                        ? "bg-primary justify-end"
                        : "bg-surface-container-highest justify-start"
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-white shadow-xs" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}